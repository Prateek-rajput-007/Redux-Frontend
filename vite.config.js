import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Ensure compatibility with modern environments
    rollupOptions: {
      output: {
        manualChunks: undefined, // Avoid splitting chunks unnecessarily
      },
    },
  },
});
