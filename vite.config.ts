import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ['investinkids.kz', 'www.investinkids.kz', 'localhost'],
    watch: {
      ignored: ['**/.git/**', '**/node_modules/**']
    }
  },
  preview: {
    host: "::",
    port: 8080,
    allowedHosts: ['investinkids.kz', 'www.investinkids.kz', 'localhost']
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
