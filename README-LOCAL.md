# Antonio Encinas Camacho — Sitio Web Personal

Sitio web deportivo personal de **Antonio Encinas Camacho**, con su trayectoria completa de 10 temporadas en el fútbol andaluz.

---

## Ejecución en local

### Requisitos previos

| Herramienta | Versión mínima | Descarga |
|---|---|---|
| **Node.js** | v18 o superior | https://nodejs.org |
| **pnpm** | v8 o superior | `npm install -g pnpm` |

### Pasos

```bash
# 1. Instalar dependencias
pnpm install

# 2. Arrancar el servidor de desarrollo
pnpm dev

# 3. Abrir en el navegador
# http://localhost:3000
```

### Otros comandos disponibles

| Comando | Descripción |
|---|---|
| `pnpm dev` | Servidor de desarrollo con recarga automática |
| `pnpm build` | Build de producción (para Manus/servidor propio) |
| `pnpm build:github` | Build optimizado para GitHub Pages |
| `pnpm preview` | Previsualiza el build en local |
| `pnpm check` | Verifica los tipos TypeScript |
| `pnpm format` | Formatea el código con Prettier |

---

## Publicar en GitHub Pages

### Paso 1 — Crear el repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Crea un repositorio con el nombre **`antonio-encinas`** (o el que prefieras)
3. Déjalo **público** (GitHub Pages gratuito requiere repositorio público)

### Paso 2 — Ajustar el nombre del repositorio

Abre `vite.config.github.ts` y cambia `REPO_NAME` por el nombre exacto de tu repositorio:

```ts
const REPO_NAME = "antonio-encinas"; // ← cambia esto si el repo tiene otro nombre
```

> **Si publicas en `tuusuario.github.io`** (dominio raíz sin subruta), usa `const REPO_NAME = ""`.

### Paso 3 — Subir el código a GitHub

```bash
git init
git add .
git commit -m "Primer commit"
git remote add origin https://github.com/TU_USUARIO/antonio-encinas.git
git push -u origin main
```

### Paso 4 — Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** → **Pages**
3. En **Source** selecciona **GitHub Actions**
4. Guarda los cambios

### Paso 5 — Despliegue automático

A partir de ahora, cada `git push` a `main` desplegará el sitio automáticamente.

El sitio estará disponible en:
```
https://TU_USUARIO.github.io/antonio-encinas/
```

---

## Añadir fotos reales

Edita `client/src/pages/Galeria.tsx` y sustituye las URLs en el array `photos`
por las URLs públicas de tus fotos (Cloudinary, ImgBB, Google Drive público, etc.).

## Añadir vídeos reales

Edita `client/src/pages/Videos.tsx` y para cada vídeo añade:
- **YouTube**: `youtubeId: "ID_DEL_VIDEO"` (el ID está en la URL: `youtube.com/watch?v=ID_DEL_VIDEO`)
- **Vídeo propio**: `videoUrl: "https://url-de-tu-video.mp4"`

---

## Estructura del proyecto

```
antonio-encinas/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← Workflow de despliegue automático en GitHub Pages
├── client/
│   ├── index.html              ← HTML principal (fuentes, metadatos, script SPA)
│   ├── public/
│   │   └── 404.html            ← Redirección SPA para GitHub Pages (no borrar)
│   └── src/
│       ├── pages/
│       │   ├── Home.tsx        ← Página de inicio
│       │   ├── Historia.tsx    ← Timeline de 10 temporadas
│       │   ├── Estadisticas.tsx← Gráficos y estadísticas
│       │   ├── Logros.tsx      ← Hitos y logros destacados
│       │   ├── Galeria.tsx     ← Galería de fotos con lightbox
│       │   ├── Videos.tsx      ← Galería de vídeos con reproductor
│       │   ├── Sobre.tsx       ← Perfil personal
│       │   └── NotFound.tsx    ← Página 404
│       ├── components/
│       │   ├── Navbar.tsx      ← Navegación principal
│       │   ├── Footer.tsx      ← Pie de página
│       │   └── ui/             ← Componentes shadcn/ui
│       ├── lib/
│       │   └── seasonData.ts   ← Datos de todas las temporadas
│       ├── hooks/
│       │   ├── useScrollReveal.ts  ← Animaciones de entrada al hacer scroll
│       │   └── useScrollToTop.ts   ← Scroll al inicio al cambiar de página
│       ├── App.tsx             ← Rutas y layout principal
│       └── index.css           ← Estilos globales y tokens de diseño
├── vite.config.ts              ← Configuración de Vite (desarrollo/Manus)
├── vite.config.github.ts       ← Configuración de Vite para GitHub Pages
├── package.json
└── tsconfig.json
```

---

## Tecnologías utilizadas

- **React 19** — Framework de UI
- **TypeScript** — Tipado estático
- **Tailwind CSS 4** — Estilos utilitarios
- **Vite 7** — Bundler y servidor de desarrollo
- **Recharts** — Gráficos interactivos
- **Framer Motion** — Animaciones
- **shadcn/ui** — Componentes de UI
- **Wouter** — Enrutamiento ligero
- **Lucide React** — Iconos

---

## Diseño

El sitio sigue la filosofía **"Ascenso Imparable"**:

- **Paleta**: Negro profundo + Naranja fuego + Verde campo
- **Tipografía**: Oswald (display/títulos) + Source Sans 3 (cuerpo)
- **Motivos**: Líneas diagonales naranjas, número **21** gigante de fondo, badges de escudo para temporadas
- **Layout**: Asimétrico, con cortes diagonales entre secciones

---

## Solución de problemas

**Error: `pnpm: command not found`**
```bash
npm install -g pnpm
```

**Las páginas dan error 404 al recargar en GitHub Pages**
Asegúrate de que `client/public/404.html` existe y que `REPO_NAME` en
`vite.config.github.ts` coincide exactamente con el nombre de tu repositorio.

**El workflow de GitHub Actions falla**
- Comprueba que en **Settings → Pages** tienes **GitHub Actions** como fuente.
- Revisa los logs en la pestaña **Actions** de tu repositorio.

**Puerto 3000 ocupado en local**
Edita `vite.config.ts` y cambia el puerto: `server: { port: 3001 }`

---

*Sitio creado para Antonio Encinas Camacho — 10 temporadas, un camino, sin atajos.*
