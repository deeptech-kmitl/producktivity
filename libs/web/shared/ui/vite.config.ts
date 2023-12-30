/// <reference types='vitest' />
import { qwikVite } from "@builder.io/qwik/optimizer";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { join } from "path";
import { qwikNxVite } from "qwik-nx/plugins";

export default defineConfig({
  root: __dirname,
  cacheDir: "../../../../node_modules/.vite/libs/web/shared/ui",
  plugins: [
    qwikNxVite(),
    qwikVite(),
    nxViteTsPaths(),
    tsconfigPaths({ root: "../../../../" }),
    dts({
      entryRoot: "src",
      tsConfigFilePath: join(__dirname, "tsconfig.lib.json"),
      skipDiagnostics: true,
    }),
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: "../../dist/libs/web/shared/ui",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    cssMinify: "lightningcss",
    lib: {
      entry: "./src/index.ts",
      name: "@producktivity/ui",
      fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: '[name].[ext]',
      },
    },
  },
  define: {
    "import.meta.vitest": undefined,
  },
  test: {
    globals: true,
    cache: {
      dir: "../../../../node_modules/.vitest",
    },
    environment: "node",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    includeSource: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../../../coverage/libs/web/shared/ui",
    },
  },
});
