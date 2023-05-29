import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
  ],
  build: {
    rollupOptions,
    sourcemap: true,
    reportCompressedSize: true,
    cssCodeSplit: true,
    minify: "esbuild",
    lib: {
      entry: "./src/entry.ts",
      name: "XinlUI",
      fileName: "xinl-ui",
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
    coverage: {
      provider: 'istanbul', // or 'c8'
      reporter: ['text', 'json', 'html'],
    },
  }
});
