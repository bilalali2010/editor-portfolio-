# Bilal Ali — Video Editor Portfolio

React + Vite + Tailwind portfolio.

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build into dist/
npm run preview   # preview the build
```

## Deploy to GitHub Pages
Push to `main`. In the repo go to Settings → Pages → Source: **GitHub Actions**. The included workflow builds and publishes automatically.

## Editing content
- Text, links and contact details: `src/data/config.ts`
- Projects and videos: `src/data/portfolioData.ts`
- Videos live in `public/videos` (720p H.264 MP4, plus VP9 WebM where provided); posters in `public/images`.
