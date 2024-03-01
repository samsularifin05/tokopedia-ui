/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import viteCompression from "vite-plugin-compression";
import * as path from "path";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig(({ command, mode }) => {
  const timestamp = new Date().getTime();

  return {
    plugins: [react(), viteCompression(), EnvironmentPlugin("all", { prefix: "VITE_APP_" })],
    cacheControl: "max-age=3600",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components/index.ts"),
      },
    },
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[local]_[hash:base64:5]",
      },
    },
    build: {
      minify: "esbuild",
      emptyOutDir: true,
      outDir: "build",
      sourcemap: false,
      // minify: mode === "production",
      cssCodeSplit: true,
      modulePreload: true,
      chunkSizeWarningLimit: 1000000,
      cacheControl: "max-age=3600",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          chunkFileNames: `assets/js/[hash]-${timestamp}.js`,
          entryFileNames: `assets/js/[hash]-${timestamp}.js`,
          assetFileNames: ({ name }) => {
            if (/\.(gif|jpe?g|png|svg|webp|avif)$/.test(name ?? "")) {
              return `assets/images/[hash]-${timestamp}[extname]`;
            }
            if (/\.(ttf|woff2|svg)$/.test(name ?? "")) {
              return `assets/font/[hash]-${timestamp}[extname]`;
            }
            if (/\.css$/.test(name ?? "")) {
              return `assets/css/[hash]-${timestamp}[extname]`;
            }
            return `assets/[hash]-${timestamp}[extname]`;
          },
        },
      },
    },
  };
});
