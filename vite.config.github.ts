// vite.config.github.ts — Configuración de build para GitHub Pages
// Usa este archivo cuando hagas el build para GitHub Pages:
//   pnpm build:github
//
// ── ELIGE UNO DE LOS DOS CASOS ────────────────────────────────────────────
//
// CASO A — User/Organization site (repo llamado "antonioblog.github.io"):
//   Tu URL es: https://antonioblog.github.io/
//   BASE_PATH = "/"
//   segmentCount en 404.html = 0
//
// CASO B — Project site (repo con otro nombre, ej. "antonio-encinas"):
//   Tu URL es: https://antonioblog.github.io/antonio-encinas/
//   BASE_PATH = "/antonio-encinas/"
//   segmentCount en 404.html = 1
//
// ─────────────────────────────────────────────────────────────────────────
// Según tu URL https://antonioblog.github.io/ → CASO A → BASE_PATH = "/"
// ─────────────────────────────────────────────────────────────────────────

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// ── CAMBIA ESTO según tu caso (ver comentarios arriba) ────────────────────
const BASE_PATH = "/"; // "/" para user site | "/nombre-repo/" para project site
// ─────────────────────────────────────────────────────────────────────────

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: BASE_PATH,
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
