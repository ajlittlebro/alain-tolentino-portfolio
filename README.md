# Alain Tolentino – Portfolio

Bilingual (DE/EN) portfolio website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
Design direction: "Swiss-German Technical Dossier" – navy `#143656`, technical grid paper, Inter + JetBrains Mono.

- Static site, no cookies, no tracking, self-hosted fonts
- Light/dark theme, responsive from 375 px to 1440 px+, respects `prefers-reduced-motion`
- Content lives in `src/i18n/de.ts` and `src/i18n/en.ts` (shared type in `types.ts`)
- Project schematics are hand-written inline SVG components in `src/components/diagrams/`
- `schema.org/Person` JSON-LD and Open Graph tags in `src/layouts/Base.astro`

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + production build into ./dist
npm run preview
```

## Open Graph image

`public/og-image.png` (1200×630) is a screenshot of `scripts/og-image.html`:

```bash
chrome --headless --screenshot=public/og-image.png --window-size=1200,630 scripts/og-image.html
```
