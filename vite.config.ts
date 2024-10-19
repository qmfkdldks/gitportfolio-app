import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  define: {
    "process.env.REACT_APP_GITPORTFOLIO_API_URL": JSON.stringify(process.env.REACT_APP_GITPORTFOLIO_API_URL),
  },
});
