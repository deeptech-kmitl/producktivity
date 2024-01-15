import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { defineConfig } from 'vite';
import { qwikNxVite } from 'qwik-nx/plugins';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/apps/web',
  plugins: [
    tsconfigPaths({ root: '../../' }),
    qwikNxVite(),
    qwikCity(),
    qwikVite({
      client: {
        outDir: '../../dist/apps/web/client',
      },
      ssr: {
        outDir: '../../dist/apps/web/server',
      },
      tsconfigFileNames: ['tsconfig.app.json', '../../tsconfig.base.json'],
    }),
  ],
  ssr: {
    target: 'webworker',
    noExternal: true,
  },
  server: {
    fs: {
      // Allow serving files from the project root
      allow: ['../../'],
    },
  },
  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
