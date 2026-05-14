# Project Overview
- Marketing/agency website built with Next.js 13, React 18, Sass, and Swiper.
- Active app source is inside `src/` (Next project root), with code in `src/src/`.

# Tech Stack
- Framework: Next.js `13.4.3` (`next`, `react`, `react-dom`).
- Styling: Sass (`sass`), global CSS in `src/src/styles/globals.css` and page SCSS imports.
- Content parsing: `gray-matter`, `remark`, `remark-html`.
- UI/slider: `swiper` with custom element registration in `_app.js`.

# Setup And Commands
- Install: `cd src && npm install`
- Dev server: `cd src && npm run dev`
- Production build: `cd src && npm run build`
- Start built app: `cd src && npm run start`
- Lint: `cd src && npm run lint`

# Key Paths
- App pages: `src/src/pages/`
- Shared UI: `src/src/components/`, `src/src/layouts/`
- Data content: `src/src/data/posts/*.md`, `src/src/data/projects/*.md`, `src/src/data/sections/*.json`
- Content loaders: `src/src/lib/posts.js`, `src/src/lib/projects.js`
- Public assets: `src/public/`
- Deployment workflow: `.github/workflows/nextjs.yml`

# Coding Conventions Observed
- JavaScript/JSX only (no TypeScript config/scripts).
- Path aliases from `src/jsconfig.json`: `@/*`, `@posts`, `@posts/*`.
- Preserve existing file-local style (quotes/semicolons are not fully uniform across files).

# Agent Notes / Gotchas
- Do feature/content edits in `src/src/**`; root-level `static/` and `index.html` are generated site artifacts.
- Blog/project listing and detail data come from markdown files read at build time via `fs` in `src/src/lib/*.js`.
- Some sliders are dynamically imported with `ssr: false`; keep this for browser-only components.
- GitHub Pages workflow deploys on pushes to branch `nextjs` and uploads `./out`.

# Tests
- No test framework or `test` script is configured in `src/package.json`.
