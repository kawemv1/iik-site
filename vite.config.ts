import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
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
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
