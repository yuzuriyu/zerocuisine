import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // or a version of your choice
    polyfillDynamicImport: false, // Disable dynamic import polyfill
  },
  esbuild: {
    jsxFactory: "React.createElement", // or your JSX factory function
    jsxFragment: "React.Fragment", // or your JSX fragment identifier
  },
});
