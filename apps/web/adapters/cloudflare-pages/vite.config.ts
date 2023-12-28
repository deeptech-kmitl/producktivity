import { cloudflarePagesAdapter } from "@builder.io/qwik-city/adapters/cloudflare-pages/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

// @ts-expect-error an old vite 4 config in compatible with vite 5
export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["apps/web/src/entry.cloudflare-pages.tsx", "@qwik-city-plan"],
      },
    },
    plugins: [cloudflarePagesAdapter()],
  };
});
