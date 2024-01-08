import type { RequestHandler } from '@builder.io/qwik-city';
import { isDev } from '@builder.io/qwik/build';

export const onRequest: RequestHandler = (event) => {
  if (isDev) return;

  const nonce = event.request.headers.get('cf-ray');
  event.sharedMap.set('@nonce', nonce);
};
