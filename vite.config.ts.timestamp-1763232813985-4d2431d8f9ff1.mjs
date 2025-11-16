// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/bigmistqke/Documents/GitHub/solid-lezer-markdown/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.12/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/bigmistqke/Documents/GitHub/solid-lezer-markdown/node_modules/.pnpm/vite-plugin-dts@4.5.4_@types+node@20.12.12_rollup@4.17.2_typescript@5.4.5_vite@5.2.11_@types+node@20.12.12_/node_modules/vite-plugin-dts/dist/index.mjs";
import solidPlugin from "file:///Users/bigmistqke/Documents/GitHub/solid-lezer-markdown/node_modules/.pnpm/vite-plugin-solid@2.10.2_solid-js@1.8.17_vite@5.2.11_@types+node@20.12.12_/node_modules/vite-plugin-solid/dist/esm/index.mjs";
var __vite_injected_original_dirname = "/Users/bigmistqke/Documents/GitHub/solid-lezer-markdown";
var vite_config_default = defineConfig({
  plugins: [
    dts({ rollupTypes: true }),
    solidPlugin({
      solid: {
        generate: "ssr"
      }
    })
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.tsx"),
      name: "SolidLezerMarkdown",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
      output: {
        globals: {
          "solid-js": "Solid",
          "solid-js/web": "SolidWeb"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYmlnbWlzdHFrZS9Eb2N1bWVudHMvR2l0SHViL3NvbGlkLWxlemVyLW1hcmtkb3duXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYmlnbWlzdHFrZS9Eb2N1bWVudHMvR2l0SHViL3NvbGlkLWxlemVyLW1hcmtkb3duL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9iaWdtaXN0cWtlL0RvY3VtZW50cy9HaXRIdWIvc29saWQtbGV6ZXItbWFya2Rvd24vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGR0cyh7IHJvbGx1cFR5cGVzOiB0cnVlIH0pLFxuICAgIHNvbGlkUGx1Z2luKHtcbiAgICAgIHNvbGlkOiB7XG4gICAgICAgIGdlbmVyYXRlOiAnc3NyJyxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHN4JyksXG4gICAgICBuYW1lOiAnU29saWRMZXplck1hcmtkb3duJyxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgICAgZm9ybWF0czogWydlcyddLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsnc29saWQtanMnLCAnc29saWQtanMvd2ViJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgICdzb2xpZC1qcyc6ICdTb2xpZCcsXG4gICAgICAgICAgJ3NvbGlkLWpzL3dlYic6ICdTb2xpZFdlYicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VixTQUFTLGVBQWU7QUFDL1csU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBSHhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUksRUFBRSxhQUFhLEtBQUssQ0FBQztBQUFBLElBQ3pCLFlBQVk7QUFBQSxNQUNWLE9BQU87QUFBQSxRQUNMLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUN6QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsWUFBWSxjQUFjO0FBQUEsTUFDckMsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsWUFBWTtBQUFBLFVBQ1osZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
