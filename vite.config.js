import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react":  ["react", "react-dom", "react-router-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-query":  ["@tanstack/react-query"],
          "vendor-ui":     [
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-toggle",
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));