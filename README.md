# Portfolio

Personal portfolio for Josiah Yule, served from `docs/` via GitHub Pages at [www.josiahyule.ca](https://www.josiahyule.ca).

## Structure

- `docs/index.html` — the whole site (hero, about, services, work, contact)
- `docs/portfolio.css` / `docs/portfolio.js` — styles and behaviour
- `docs/fonts/` — self-hosted variable fonts (Space Grotesk, DM Sans, JetBrains Mono)
- `docs/work/<id>/index.html` — redirect stubs for the retired case-study URLs, kept so old links land on `/#work`

There is no build step. Everything is static and edited by hand.

## Editing projects

Project entries live in the work list in `docs/index.html`. Each `.work-entry` holds a title, a meta line, a paragraph, an optional list of links, and an optional screenshot.

Screenshots should be WebP with an 800w and 1600w variant, matching the `srcset` shape used by the existing entries. An entry with no `.work-thumb` block spans the full row on its own.

## Local preview

```sh
cd docs && python3 -m http.server 8000
```
