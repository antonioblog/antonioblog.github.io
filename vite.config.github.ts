// vite.config.github.ts — Configuración de build para GitHub Pages
// Usa este archivo cuando hagas el build para GitHub Pages:
//   pnpm build:github
//
// IMPORTANTE: Cambia el valor de BASE_PATH por el nombre de tu repositorio.
// Ejemplo: si tu repo es https://github.com/usuario/antonio-encinas
//          el BASE_PATH debe ser "/antonio-encinas/"
//
// Si publicas en un dominio propio (usuario.github.io sin subruta), usa BASE_PATH = "/"

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// ── CAMBIA ESTO por el nombre de tu repositorio de GitHub ──────────────────
const REPO_NAME = "antonioblog.github.io"; // ← pon aquí el nombre exacto del repo
// ──────────────────────────────────────────────────────────────────────────

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: `/${REPO_NAME}/`,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/github-pages"),
    emptyOutDir: true,
  },
});
