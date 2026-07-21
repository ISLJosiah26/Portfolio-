/* =============================================================
   Generates static case-study pages at docs/work/<id>/index.html
   from docs/case-studies.js (the same data the drawer uses).
   Run after any edit to case-studies.js:
     node scripts/build-case-pages.mjs
   ============================================================= */

import { createRequire } from 'node:module';
import { mkdir, writeFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS = path.join(__dirname, '..', 'docs');
const SITE = 'https://www.josiahyule.ca';

const CASE_STUDIES = require(path.join(DOCS, 'case-studies.js'));

/* Prefix root-relative path for assets referenced from /work/<id>/ */
const abs = (src) => (src && !src.startsWith('http') && !src.startsWith('/')) ? `/${src}` : src;
const absSrcset = (srcset) => srcset
  ? srcset.split(',').map((part) => {
      const [file, size] = part.trim().split(/\s+/);
      return `${abs(file)} ${size || ''}`.trim();
    }).join(', ')
  : '';

function coverHTML(item) {
  if (item && item.src) {
    const srcset = item.srcset ? ` srcset="${absSrcset(item.srcset)}" sizes="(max-width: 1080px) 100vw, 1080px"` : '';
    const natural = item.fit === 'natural' ? ' natural' : '';
    return `<div class="cs-cover${natural}"><img src="${abs(item.src)}"${srcset} alt="${item.alt || ''}" decoding="async"/></div>`;
  }
  return '';
}

function galleryItemHTML(item, classExtra = '') {
  if (item.src) {
    const srcset = item.srcset ? ` srcset="${absSrcset(item.srcset)}" sizes="(max-width: 820px) 96vw, 640px"` : '';
    return `<div class="cs-gallery-item ${classExtra}"><img src="${abs(item.src)}"${srcset} alt="${item.alt || ''}" loading="lazy" decoding="async"/></div>`;
  }
  return `<div class="cs-gallery-item placeholder ${classExtra}"><span class="placeholder-tag">${item.tag || 'image.jpg'}</span></div>`;
}

function sectionsHTML(cs) {
  return cs.sections.map((s) => {
    const paras = s.body.map((p) => `<p>${p}</p>`).join('\n        ');
    const bullets = s.bullets ? `\n        <ul>${s.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>` : '';
    return `      <section class="cs-section">
        <p class="cs-section-label">${s.label}</p>
        ${paras}${bullets}
      </section>`;
  }).join('\n');
}

function linksHTML(cs) {
  if (!cs.links || !cs.links.length) return '';
  return `      <ul class="cs-links">
${cs.links.map((l) => `        <li><a href="${l.href}" target="_blank" rel="noopener"><span>${l.label}</span><span>${l.meta || ''} ↗</span></a></li>`).join('\n')}
      </ul>`;
}

function galleryHTML(cs) {
  if (!cs.gallery || !cs.gallery.length) return '';
  return `      <div class="cs-gallery">
${cs.gallery.map((g) => '        ' + galleryItemHTML(g, g.wide ? 'wide' : '')).join('\n')}
      </div>`;
}

function jsonLd(cs) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: cs.title,
    description: cs.deck,
    url: `${SITE}/work/${cs.id}/`,
    dateCreated: cs.year,
    creator: { '@type': 'Person', name: 'Josiah Yule', url: SITE },
    genre: cs.category
  };
  if (cs.cover && cs.cover.src) data.image = `${SITE}${abs(cs.cover.src)}`;
  return JSON.stringify(data, null, 2).replace(/^/gm, '  ').trim();
}

function pageHTML(cs, next) {
  const ogImage = cs.cover && cs.cover.src ? `${SITE}${abs(cs.cover.src)}` : `${SITE}/og-image.png`;
  const title = `${cs.title.replace(/\.$/, '')} · Josiah Yule`;
  return `<!DOCTYPE html>
<html lang="en" class="js">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title}</title>
  <meta name="description" content="${cs.deck}">
  <link rel="canonical" href="${SITE}/work/${cs.id}/">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${SITE}/work/${cs.id}/">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${cs.deck}">
  <meta property="og:image" content="${ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${cs.deck}">
  <meta name="twitter:image" content="${ogImage}">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#f7f4ef" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#141311" media="(prefers-color-scheme: dark)">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="/fonts/spacegrotesk-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/dmsans-latin.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/portfolio.css">
  <script type="application/ld+json">
  ${jsonLd(cs)}
  </script>
</head>
<body class="case-page">
  <a href="#csContent" class="skip-link">Skip to content</a>

  <nav>
    <a href="/" class="nav-logo">Josiah Yule</a>
    <div class="nav-links">
      <a href="/#work">All work</a>
      <a href="/#contact" class="nav-cta">Get in touch</a>
    </div>
  </nav>

  <main id="csContent">
    ${coverHTML(cs.cover)}
    <div class="cs-body">
      <a href="/#work" class="cs-back">&larr; All work</a>
      <div class="cs-meta">
        <span>${cs.year}</span>
        <span>${cs.client}</span>
        <span>${cs.role}</span>
      </div>
      <h1 class="cs-title">${cs.title}</h1>
      <p class="cs-deck">${cs.deck}</p>
${sectionsHTML(cs)}
${galleryHTML(cs)}
${linksHTML(cs)}
    </div>
  </main>

  <div class="cs-next">
    <a href="/work/${next.id}/">
      <span>
        <span class="cs-next-label">Next project</span>
        <span class="cs-next-title">${next.title}</span>
      </span>
      <span class="cs-next-arrow" aria-hidden="true">&rarr;</span>
    </a>
  </div>

  <footer id="siteFooter">
    <span>&copy; <span id="year"></span> Josiah Yule</span>
    <span>Halifax, NS</span>
  </footer>
  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
</body>
</html>
`;
}

const workDir = path.join(DOCS, 'work');
await rm(workDir, { recursive: true, force: true });

for (let i = 0; i < CASE_STUDIES.length; i++) {
  const cs = CASE_STUDIES[i];
  const next = CASE_STUDIES[(i + 1) % CASE_STUDIES.length];
  const dir = path.join(workDir, cs.id);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), pageHTML(cs, next));
  console.log(`wrote work/${cs.id}/index.html`);
}
console.log(`${CASE_STUDIES.length} pages built.`);
