import type { RequestHandler } from '@builder.io/qwik-city';
import { isDev } from '@builder.io/qwik/build';

export const onRequest: RequestHandler = (event) => {
  if (isDev) return;

  const nonce = event.request.headers.get('cf-ray');
  event.sharedMap.set('@nonce', nonce);

  const { hostname: rootFragmentHostname } = new URL(import.meta.env.VITE_ROOT_FRAGMENT_URL);

  const csp = [
    `default-src 'self' 'unsafe-inline' *.${rootFragmentHostname}`,
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' 'unsafe-inline' data:",
    `script-src 'self' 'unsafe-inline' 'nonce-${nonce}' 'strict-dynamic' https:`,
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    `frame-src 'self' 'nonce-${nonce}'`,
    "object-src 'none'",
    "base-uri 'self'",
  ];

  event.headers.set('Content-Security-Policy', csp.join('; '));
};
;
