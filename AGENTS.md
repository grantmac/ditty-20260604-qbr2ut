# Ditty workspace

This workspace is always a Vite + React + Tailwind application.

Preserve this stack when implementing designs or feature requests:
- Keep Vite as the dev server and build tool.
- Keep Tailwind as the styling system.
- Build UI in React components under `src/`.
- Do not replace the app with standalone static HTML/CSS/JS.
- Do not remove `vite.config.js`, `src/main.jsx`, `src/App.jsx`, or `src/index.css` unless replacing them with equivalent Vite + Tailwind files.

When recreating a Figma design, implement it in `src/App.jsx` and Tailwind
classes first. Add small CSS only in `src/index.css` for global tokens,
font smoothing, and reusable Tailwind layers.

After changes, run `npm run build` when practical, then commit and push with
`/usr/local/bin/ditty-commit`.
