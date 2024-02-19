// libs/web/shared/ui/vite.config.ts
import { qwikVite } from "file:///Users/skrajangwong/Documents/projects/producktivity/node_modules/.pnpm/@builder.io+qwik@1.3.2_@types+node@20.10.6_lightningcss@1.22.1_undici@5.28.2/node_modules/@builder.io/qwik/optimizer.mjs";
import { nxViteTsPaths } from "file:///Users/skrajangwong/Documents/projects/producktivity/node_modules/.pnpm/@nx+vite@17.2.8_@swc-node+register@1.6.8_@swc+core@1.3.102_@types+node@20.10.6_nx@17.2.8_type_5iepnpj4r7ygqoj5u3t5bavea4/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import tsconfigPaths from "file:///Users/skrajangwong/Documents/projects/producktivity/node_modules/.pnpm/vite-tsconfig-paths@4.2.3_typescript@5.3.3_vite@5.0.10/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { defineConfig } from "file:///Users/skrajangwong/Documents/projects/producktivity/node_modules/.pnpm/vite@5.0.10_@types+node@20.10.6_lightningcss@1.22.1/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/skrajangwong/Documents/projects/producktivity/node_modules/.pnpm/vite-plugin-dts@3.7.0_@types+node@20.10.6_typescript@5.3.3_vite@5.0.10/node_modules/vite-plugin-dts/dist/index.mjs";
import { join } from "path";
import { qwikNxVite } from "file:///Users/skrajangwong/Documents/projects/producktivity/node_modules/.pnpm/qwik-nx@2.0.2_@swc-node+register@1.6.8_@swc+core@1.3.102_@types+node@20.10.6_eslint@8.56.0_nx_6nykc4y3yf3likcldoayzczt6i/node_modules/qwik-nx/plugins.js";
var __vite_injected_original_dirname = "/Users/skrajangwong/Documents/projects/producktivity/libs/web/shared/ui";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  cacheDir: "../../../../node_modules/.vite/libs/web/shared/ui",
  plugins: [
    qwikNxVite(),
    qwikVite(),
    nxViteTsPaths(),
    tsconfigPaths({ root: "../../../../" }),
    dts({
      entryRoot: "src",
      tsconfigPath: join(__vite_injected_original_dirname, "tsconfig.lib.json")
    })
  ],
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: "../../dist/libs/web/shared/ui",
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    cssMinify: "lightningcss",
    lib: {
      entry: "./src/index.ts",
      name: "@producktivity/ui",
      fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: "[name].[ext]"
      }
    }
  },
  define: {
    "import.meta.vitest": void 0
  },
  test: {
    globals: true,
    cache: {
      dir: "../../../../node_modules/.vitest"
    },
    environment: "node",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    includeSource: ["src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../../../coverage/libs/web/shared/ui"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibGlicy93ZWIvc2hhcmVkL3VpL3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3NrcmFqYW5nd29uZy9Eb2N1bWVudHMvcHJvamVjdHMvcHJvZHVja3Rpdml0eS9saWJzL3dlYi9zaGFyZWQvdWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9za3JhamFuZ3dvbmcvRG9jdW1lbnRzL3Byb2plY3RzL3Byb2R1Y2t0aXZpdHkvbGlicy93ZWIvc2hhcmVkL3VpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9za3JhamFuZ3dvbmcvRG9jdW1lbnRzL3Byb2plY3RzL3Byb2R1Y2t0aXZpdHkvbGlicy93ZWIvc2hhcmVkL3VpL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9J3ZpdGVzdCcgLz5cbmltcG9ydCB7IHF3aWtWaXRlIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcXdpay9vcHRpbWl6ZXInO1xuaW1wb3J0IHsgbnhWaXRlVHNQYXRocyB9IGZyb20gJ0BueC92aXRlL3BsdWdpbnMvbngtdHNjb25maWctcGF0aHMucGx1Z2luJztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBxd2lrTnhWaXRlIH0gZnJvbSAncXdpay1ueC9wbHVnaW5zJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdDogX19kaXJuYW1lLFxuICBjYWNoZURpcjogJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8udml0ZS9saWJzL3dlYi9zaGFyZWQvdWknLFxuICBwbHVnaW5zOiBbXG4gICAgcXdpa054Vml0ZSgpLFxuICAgIHF3aWtWaXRlKCksXG4gICAgbnhWaXRlVHNQYXRocygpLFxuICAgIHRzY29uZmlnUGF0aHMoeyByb290OiAnLi4vLi4vLi4vLi4vJyB9KSxcbiAgICBkdHMoe1xuICAgICAgZW50cnlSb290OiAnc3JjJyxcbiAgICAgIHRzY29uZmlnUGF0aDogam9pbihfX2Rpcm5hbWUsICd0c2NvbmZpZy5saWIuanNvbicpLFxuICAgIH0pLFxuICBdLFxuICAvLyBDb25maWd1cmF0aW9uIGZvciBidWlsZGluZyB5b3VyIGxpYnJhcnkuXG4gIC8vIFNlZTogaHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2J1aWxkLmh0bWwjbGlicmFyeS1tb2RlXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnLi4vLi4vZGlzdC9saWJzL3dlYi9zaGFyZWQvdWknLFxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgIGNvbW1vbmpzT3B0aW9uczoge1xuICAgICAgdHJhbnNmb3JtTWl4ZWRFc01vZHVsZXM6IHRydWUsXG4gICAgfSxcbiAgICBjc3NNaW5pZnk6ICdsaWdodG5pbmdjc3MnLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICcuL3NyYy9pbmRleC50cycsXG4gICAgICBuYW1lOiAnQHByb2R1Y2t0aXZpdHkvdWknLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC5xd2lrLiR7Zm9ybWF0ID09PSAnZXMnID8gJ21qcycgOiAnY2pzJ31gLFxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogJ1tuYW1lXS5bZXh0XScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgICdpbXBvcnQubWV0YS52aXRlc3QnOiB1bmRlZmluZWQsXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGNhY2hlOiB7XG4gICAgICBkaXI6ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnZpdGVzdCcsXG4gICAgfSxcbiAgICBlbnZpcm9ubWVudDogJ25vZGUnLFxuICAgIGluY2x1ZGU6IFsnc3JjLyoqLyoue3Rlc3Qsc3BlY30ue2pzLG1qcyxjanMsdHMsbXRzLGN0cyxqc3gsdHN4fSddLFxuICAgIGluY2x1ZGVTb3VyY2U6IFsnc3JjLyoqLyoue2pzLG1qcyxjanMsdHMsbXRzLGN0cyxqc3gsdHN4fSddLFxuICAgIHJlcG9ydGVyczogWydkZWZhdWx0J10sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHJlcG9ydHNEaXJlY3Rvcnk6ICcuLi8uLi8uLi8uLi9jb3ZlcmFnZS9saWJzL3dlYi9zaGFyZWQvdWknLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGdCQUFnQjtBQUN6QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsa0JBQWtCO0FBUDNCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFNBQVM7QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULGNBQWM7QUFBQSxJQUNkLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUFBLElBQ3RDLElBQUk7QUFBQSxNQUNGLFdBQVc7QUFBQSxNQUNYLGNBQWMsS0FBSyxrQ0FBVyxtQkFBbUI7QUFBQSxJQUNuRCxDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQSxFQUdBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQjtBQUFBLE1BQ2YseUJBQXlCO0FBQUEsSUFDM0I7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLGNBQWMsV0FBVyxPQUFPLFFBQVEsS0FBSztBQUFBLE1BQ25FLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxJQUN2QjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixzQkFBc0I7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLGFBQWE7QUFBQSxJQUNiLFNBQVMsQ0FBQyxzREFBc0Q7QUFBQSxJQUNoRSxlQUFlLENBQUMsMENBQTBDO0FBQUEsSUFDMUQsV0FBVyxDQUFDLFNBQVM7QUFBQSxJQUNyQixVQUFVO0FBQUEsTUFDUixrQkFBa0I7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
