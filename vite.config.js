import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [tailwindcss(), react()],
  ssr: {
    noExternal: ["react-helmet-async"],
  },

  server: {
    port: 3000,
    host: true,
  },

  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: isSsrBuild
      ? undefined
      : {
          output: {
            manualChunks: {
              react: ["react", "react-dom"],
              router: ["react-router-dom"],
            },
          },
        },
  },
}));
