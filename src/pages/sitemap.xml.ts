import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absoluteSiteUrl } from '../utils/urls';

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection('blog'))
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const latestPostDate = posts[0]?.data.pubDate ?? new Date();
  const staticRoutes = [
    { path: '/', lastmod: latestPostDate, priority: '1.0' },
    { path: '/blog/', lastmod: latestPostDate, priority: '0.9' },
    { path: '/projects/', lastmod: latestPostDate, priority: '0.8' },
    { path: '/about/', lastmod: latestPostDate, priority: '0.7' },
  ];

  const blogRoutes = posts.map(post => ({
    path: `/blog/${post.slug}/`,
    lastmod: post.data.pubDate,
    priority: '0.8',
  }));

  const urls = [...staticRoutes, ...blogRoutes]
    .map(route => `  <url>
    <loc>${escapeXml(absoluteSiteUrl(route.path, site))}</loc>
    <lastmod>${formatDate(route.lastmod)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`)
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
