# Portfolio

Personal portfolio for Josiah Yule, served from `docs/` via GitHub Pages at [www.josiahyule.ca](https://www.josiahyule.ca).

## Structure

- `docs/index.html` — the single-page site (hero, about, services, work, contact)
- `docs/case-studies.js` — case-study content, the single source of truth for both the in-page drawer and the static pages
- `docs/work/<id>/index.html` — generated static case-study pages (shareable URLs, SEO)
- `docs/portfolio.css` / `docs/portfolio.js` — styles and behaviour
- `docs/fonts/` — self-hosted variable fonts (Space Grotesk, DM Sans, JetBrains Mono)
- `scripts/build-case-pages.mjs` — static page generator

## Editing case studies

1. Edit `docs/case-studies.js` (copy, images, links, order).
2. Regenerate the static pages:

   ```sh
   node scripts/build-case-pages.mjs
   ```

3. Commit both the data file and the regenerated `docs/work/` pages.

Image `src` values left as `""` render a striped placeholder. Real images should be WebP with an 800w and 1600w variant (see existing entries for the `srcset` shape).

## Local preview

```sh
cd docs && python3 -m http.server 8000
```

Serve from `docs/` so the root-absolute asset paths used by the drawer and case pages resolve.
