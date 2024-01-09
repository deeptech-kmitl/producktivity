import { manifest } from '@qwik-client-manifest';
import { tryGetFragmentAsset, renderResponse } from '@producktivity/util-fragment';
import Root from './root';

export default {
  async fetch(request: Request, env: Record<string, unknown>): Promise<Response> {
    const asset = await tryGetFragmentAsset(env, request);
    if (asset !== null) {
      return asset;
    }

    return renderResponse(request, env, <Root />, manifest);
  },
};
