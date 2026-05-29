const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const baseUrlWithoutTrailingSlash = baseUrl.slice(0, -1);

export function sitePath(path = '/') {
  if (/^(https?:|mailto:|#)/.test(path)) {
    return path;
  }

  if (path === baseUrlWithoutTrailingSlash || path.startsWith(baseUrl)) {
    return path === baseUrlWithoutTrailingSlash ? baseUrl : path;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
}

export function absoluteSiteUrl(path: string, site: URL | undefined) {
  const origin = site ?? new URL('https://bryanlin920616.github.io');
  return new URL(sitePath(path), origin).toString();
}
