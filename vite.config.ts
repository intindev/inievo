import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackStartVite } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    viteReact(),
    TanStackStartVite(),
    tailwindcss(),
    tsconfigPaths()
  ]
});
