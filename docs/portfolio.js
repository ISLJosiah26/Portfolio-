/* =============================================================
   Portfolio JS. Case study data, drawer, nav, reveal.
   ============================================================= */

document.getElementById('year').textContent = new Date().getFullYear();

/* ===== Case study data =====
   Replace cover/gallery `src` values with real images when you have them.
   Leave src as "" to render the striped placeholder with the tag.
*/
const CASE_STUDIES = [
  {
    id: 'staffing',
    title: 'Three recruitment websites.',
    year: '2024',
    client: 'Integrated Staffing Group',
    role: 'Design & Development',
    deck: 'Three sister agencies in Atlantic Canada, each with a separate brand, built on a shared technical foundation from scratch on Squarespace.',
    cover: { src: 'staffing-integrated.jpg', tag: 'staffing-cover.jpg' },
    sections: [
      {
        label: 'The brief',
        body: [
          "Integrated Staffing, Accountant Staffing, and Administrative Staffing are three sister agencies serving different client bases. Each had an aging website that no longer reflected the business. The marketing infrastructure was duplicated across all three with no shared system.",
          "The brief: rebuild all three from the ground up, keeping each brand distinct while running on one technical foundation."
        ]
      },
      {
        label: 'The approach',
        body: [
          "Each site runs on Squarespace, but almost nothing is off-the-shelf. The structure, components, and interactions are custom HTML, CSS, and JavaScript injected into each site. The agencies kept the CMS they already knew; the template constraints were removed.",
          "All three sites share a component library. Type scales, button styles, animation timing, and layout grids are consistent across the group. What changes per site is the brand: colour palette, photography, and copy voice for each agency's audience. A change to one site can be ported to the others in a few hours."
        ]
      },
      {
        label: 'Live job boards',
        body: [
          "Each site has a live job board pulling from the agency's CRM via external API. Postings update in real time, candidates can filter by category, location, and seniority, and applications go directly into the existing pipeline.",
          "Each job board is custom-built. No plugin handled the exact requirements."
        ]
      },
      {
        label: 'Outcome',
        body: [
          "All three sites launched in the same quarter. Organic traffic uplift of +15% across all three brands within the first six months."
        ]
      }
    ],
    quote: null,
    gallery: [
      { src: 'staffing-integrated.jpg', wide: true },
      { src: 'staffing-administrative.jpg' },
      { src: 'staffing-accountant.jpg' }
    ],
    links: [
      { label: 'integratedstaffing.ca', href: 'https://integratedstaffing.ca', meta: 'live' },
      { label: 'accountantstaffing.ca', href: 'https://accountantstaffing.ca', meta: 'live' },
      { label: 'administrativestaffing.ca', href: 'https://administrativestaffing.ca', meta: 'live' }
    ]
  },

  {
    id: 'clientwatch',
    title: 'ClientWatch.',
    year: '2024',
    client: 'Integrated Staffing Group',
    role: 'Product & Development',
    deck: 'A job intelligence platform running across three recruitment agencies. It monitors job boards across Atlantic Canada and alerts the right consultant when one of their clients posts a role.',
    cover: { src: '', tag: 'clientwatch-cover.jpg' },
    sections: [
      {
        label: 'The problem',
        body: [
          "When a client is actively hiring, a recruitment agency has real leverage. A consultant who calls the day a role goes live is in a much better position than one who finds out weeks later.",
          "There was no reliable way to know when clients were hiring. Consultants relied on cold outreach, manual job board checks, or chance. Clients would post a role and sign with someone else before anyone at the agency found out."
        ]
      },
      {
        label: 'What it does',
        body: [
          "ClientWatch monitors job boards across Atlantic Canada and alerts the right recruitment consultant when one of their existing clients posts a new opening.",
          "It also flags lapsed clients who have started hiring again. In production at Integrated Staffing, Accountant Staffing, and Administrative Staffing."
        ]
      },
      {
        label: 'How it works',
        body: [
          "Every two hours during business hours (Monday through Friday, 7am to 7pm AST), ClientWatch runs three scanners simultaneously against Job Bank Canada, LinkedIn, and Adzuna. Each scanner pulls all postings from Nova Scotia, New Brunswick, PEI, and Newfoundland.",
          "Each posting is compared against 1,800+ companies across all three agencies. When a match is confirmed, a Slack notification fires to the relevant agency's channel, and the alert queues for the 7am morning digest email."
        ]
      },
      {
        label: 'Stack',
        body: [
          "Node.js on Railway, Supabase (PostgreSQL) for the client list and alert history, Axios and Cheerio for scraping, Adzuna API for additional aggregation, Resend for digest emails, Slack incoming webhooks for real-time alerts."
        ],
        bullets: [
          "6,000+ alerts sent in the first month of production",
          "1,800+ client companies monitored across three agencies",
          "Job Bank Canada, LinkedIn, and Adzuna covered simultaneously",
          "Province-routed Slack notifications per agency"
        ]
      }
    ],
    quote: null,
    gallery: [],
    links: []
  },

  {
    id: 'logodesign',
    title: 'Logo design for an editing firm.',
    year: '2025',
    client: 'Confidential',
    role: 'Brand Design',
    deck: 'A logo and visual identity for a professional editing firm — built to feel precise, credible, and distinct in a crowded market.',
    cover: { src: '', tag: 'logo-cover.jpg' },
    sections: [
      {
        label: 'The brief',
        body: [
          "The client is a professional editing firm looking to establish a stronger brand presence. The existing identity was inconsistent and didn't reflect the quality and precision of their work.",
          "The goal was a clean, distinctive mark that would work across digital and print — business cards, website, proposals, and email headers."
        ]
      },
      {
        label: 'The approach',
        body: [
          "Explored several directions before settling on a mark that balances editorial precision with a modern, professional feel. Typography and spacing were treated as the primary design elements.",
          "Delivered final logo in multiple formats: primary lockup, stacked variant, and icon-only mark. Accompanied by a one-page brand guide covering colour palette, type, and usage rules."
        ]
      },
      {
        label: 'Outcome',
        body: [
          "A cohesive visual identity ready for immediate deployment across all brand touchpoints."
        ]
      }
    ],
    quote: null,
    gallery: [],
    links: []
  },

  {
    id: 'dashboard',
    title: 'Marketing performance dashboard.',
    year: '2024',
    client: 'Integrated Staffing',
    role: 'Design & Development',
    deck: 'A live KPI dashboard that pulls data from Google Sheets through a custom Apps Script endpoint. Replaced a manual monthly reporting process.',
    cover: { src: 'dashboard-cover.jpg', tag: 'dashboard-cover.jpg' },
    sections: [
      {
        label: 'The problem',
        body: [
          "Monthly marketing reporting was manual work: pull GA4 numbers, copy social stats from each platform, paste into a slide deck, calculate quarter-over-quarter changes by hand, and send a PDF to leadership a week into the following month.",
          "By the time the report landed, the numbers were already old. There was no way to check current figures between cycles without starting over."
        ]
      },
      {
        label: 'The build',
        body: [
          "The dashboard is a single web page that fetches live data from a Google Sheet through a Google Apps Script web app endpoint. The sheet is fed from GA4 exports and social platform analytics, refreshed on a schedule.",
          "Numbers are rendered with Chart.js for trend charts. KPIs are computed on the client: quarter-over-quarter deltas, rolling averages, and channel breakouts."
        ],
        bullets: [
          "Website analytics: sessions, sources, top pages, conversion events from GA4",
          "Social performance: follower growth, engagement, and reach across LinkedIn, Instagram, and Facebook",
          "Quarter-over-quarter deltas for every KPI",
          "Replaced approximately 6 hours of manual reporting work per month"
        ]
      }
    ],
    quote: null,
    gallery: [],
    links: []
  }
];

/* ===== Work list rendering ===== */
const workList = document.getElementById('workList');
CASE_STUDIES.forEach((cs) => {
  const li = document.createElement('li');
  li.className = 'work-entry';
  li.setAttribute('data-id', cs.id);
  li.setAttribute('tabindex', '0');
  li.setAttribute('role', 'button');
  li.setAttribute('aria-label', `Open case study: ${cs.title}`);
  li.innerHTML = `
    <div class="work-body">
      <h3 class="work-title">${cs.title}</h3>
    </div>
    <span class="work-arrow" aria-hidden="true">→</span>
  `;
  li.addEventListener('click', () => openCaseStudy(cs.id));
  li.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openCaseStudy(cs.id); }
  });
  workList.appendChild(li);
});

/* ===== Drawer ===== */
const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('drawerBackdrop');
const drawerContent = document.getElementById('drawerContent');
const drawerScroll = document.getElementById('drawerScroll');
const drawerClose = document.getElementById('drawerClose');

function imageOrPlaceholder(item, classExtra = '') {
  if (item.src) {
    return `<div class="cs-gallery-item ${classExtra}"><img src="${item.src}" alt=""/></div>`;
  }
  return `<div class="cs-gallery-item placeholder ${classExtra}"><span class="placeholder-tag">${item.tag || 'image.jpg'}</span></div>`;
}

function coverOrPlaceholder(item) {
  if (item && item.src) {
    return `<div class="cs-cover"><img src="${item.src}" alt=""/></div>`;
  }
  return `<div class="cs-cover placeholder"><span class="placeholder-tag">${(item && item.tag) || 'cover.jpg'}</span></div>`;
}

function renderCaseStudy(cs) {
  const sectionsHTML = cs.sections.map((s) => {
    const paras = s.body.map((p) => `<p>${p}</p>`).join('');
    const bullets = s.bullets ? `<ul>${s.bullets.map((b) => `<li>${b}</li>`).join('')}</ul>` : '';
    return `
      <section class="cs-section">
        <p class="cs-section-label">${s.label}</p>
        ${paras}
        ${bullets}
      </section>
    `;
  }).join('');

  const quoteHTML = cs.quote ? `
    <blockquote class="cs-quote">
      <p class="cs-quote-text">&ldquo;${cs.quote.text}&rdquo;</p>
      <p class="cs-quote-attr"><strong>${cs.quote.author}</strong> &middot; ${cs.quote.role}</p>
    </blockquote>
  ` : '';

  const galleryHTML = cs.gallery && cs.gallery.length ? `
    <div class="cs-gallery">
      ${cs.gallery.map((g) => imageOrPlaceholder(g, g.wide ? 'wide' : '')).join('')}
    </div>
  ` : '';

  const linksHTML = cs.links && cs.links.length ? `
    <ul class="cs-links">
      ${cs.links.map((l) => `
        <li><a href="${l.href}" target="_blank" rel="noopener">
          <span>${l.label}</span>
          <span>${l.meta || ''} ↗</span>
        </a></li>
      `).join('')}
    </ul>
  ` : '';

  return `
    ${coverOrPlaceholder(cs.cover)}
    <div class="cs-body">
      <div class="cs-meta">
        <span>${cs.year}</span>
        <span>${cs.client}</span>
        <span>${cs.role}</span>
      </div>
      <h1 class="cs-title">${cs.title}</h1>
      <p class="cs-deck">${cs.deck}</p>
      ${sectionsHTML}
      ${quoteHTML}
      ${galleryHTML}
      ${linksHTML}
    </div>
  `;
}

function openCaseStudy(id) {
  const cs = CASE_STUDIES.find((c) => c.id === id);
  if (!cs) return;
  drawerContent.innerHTML = renderCaseStudy(cs);
  drawerScroll.scrollTop = 0;
  drawer.classList.add('open');
  backdrop.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-open');
}

function closeCaseStudy() {
  drawer.classList.remove('open');
  backdrop.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
}

drawerClose.addEventListener('click', closeCaseStudy);
backdrop.addEventListener('click', closeCaseStudy);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer.classList.contains('open')) closeCaseStudy();
});

/* ===== Mobile nav ===== */
const hamburger = document.getElementById('navHamburger');
const navMobile = document.getElementById('navMobile');
hamburger.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', String(open));
});
navMobile.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    navMobile.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* ===== Reveal on scroll ===== */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
