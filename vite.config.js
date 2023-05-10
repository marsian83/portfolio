import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import postcss from "./postcss.config.cjs";
import jsonHMR from "./src/plugins/jsonHMR.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), jsonHMR()],
  css: {
    postcss,
  },
});
