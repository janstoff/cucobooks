import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/cucobooks/", // Repo path for GitHub Pages Deployment
});
