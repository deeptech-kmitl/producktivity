import { manifest } from '@qwik-client-manifest';
import { renderResponse } from '@producktivity/util-fragment';
import Root from './routes/index';

export default {
  async fetch(request: Request, env: Record<string, unknown>): Promise<Response> {
    return renderResponse(request, env, <Root />, manifest, 'div');
  },
};
