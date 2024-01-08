import { type PlatformCloudflarePages } from '@builder.io/qwik-city/middleware/cloudflare-pages';
import render from './entry.ssr';

declare global {
  interface QwikCityPlatform extends PlatformCloudflarePages {}
}

export default render;
