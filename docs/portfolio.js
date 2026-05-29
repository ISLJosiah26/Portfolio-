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
    title: 'Three websites for sister companies.',
    year: '2026',
    client: 'Integrated Staffing Group',
    role: 'Design & Development',
    deck: 'Three sister agencies in Atlantic Canada, each with a separate brand, built on a shared technical foundation from scratch on Squarespace.',
    cover: { src: 'staffing-integrated.jpg', alt: 'Integrated Staffing website homepage', tag: 'staffing-cover.jpg' },
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
      { src: 'staffing-integrated.jpg', alt: 'Integrated Staffing homepage', wide: true },
      { src: 'staffing-administrative.jpg', alt: 'Administrative Staffing homepage' },
      { src: 'staffing-accountant.jpg', alt: 'Accountant Staffing homepage' }
    ],
    links: [
      { label: 'integratedstaffing.ca', href: 'https://integratedstaffing.ca', meta: 'live' },
      { label: 'accountantstaffing.ca', href: 'https://accountantstaffing.ca', meta: 'live' },
      { label: 'administrativestaffing.ca', href: 'https://administrativestaffing.ca', meta: 'live' }
    ]
  },

  {
    id: 'intelligence',
    title: 'Business Intelligence Program.',
    year: '2026',
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
    year: '2026',
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
    id: 'wwhra',
    title: 'Website for a residents association.',
    year: '2026',
    client: 'Westwood Hills Residents Association',
    role: 'Design & Development',
    deck: 'A full redesign of the digital presence for a volunteer-run community association in Upper Tantallon, NS — replacing an aging Joomla site with a clean, accessible, and easy-to-maintain web presence.',
    cover: { src: '', tag: 'wwhra-cover.jpg' },
    sections: [
      {
        label: 'The brief',
        body: [
          "The Westwood Hills Residents Association is a volunteer-run community organization serving a neighbourhood of approximately 5,000 residents in Upper Tantallon, Nova Scotia. Their site was built on Joomla and hadn't been meaningfully updated in years — difficult to navigate, not mobile-friendly, and hard for the volunteer board to maintain.",
          "The goal was a clean, fast, accessible site that the association could manage themselves without technical help. It needed to surface key community information quickly: meeting minutes, health clinic schedules, emergency resources, and board contacts."
        ]
      },
      {
        label: 'The approach',
        body: [
          "Given the volunteer context, the right tool was a static site — fast to load, cheap to host, and with no CMS overhead to maintain. Content was restructured around what residents actually need: upcoming events, resident resources, and how to get involved.",
          "The design is deliberately simple. Large type, high contrast, no unnecessary chrome. The navigation mirrors how residents think about the organization, not how the old site was organized. Every page is mobile-first."
        ]
      },
      {
        label: 'Outcome',
        body: [
          "A significantly faster and more accessible site that the volunteer board can update without developer involvement. Page load times reduced from multi-second Joomla renders to near-instant static delivery."
        ]
      }
    ],
    quote: null,
    gallery: [],
    links: [
      { label: 'wwhra.com', href: 'https://www.wwhra.com', meta: 'live' }
    ]
  },

  {
    id: 'dashboard',
    title: 'Marketing performance dashboard.',
    year: '2026',
    client: 'Integrated Staffing',
    role: 'Design & Development',
    deck: 'A live KPI dashboard that pulls data from Google Sheets through a custom Apps Script endpoint. Replaced a manual monthly reporting process.',
    cover: { src: 'dashboard-cover.jpg', alt: 'Marketing performance dashboard showing KPI charts', tag: 'dashboard-cover.jpg' },
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
    return `<div class="cs-gallery-item ${classExtra}"><img src="${item.src}" alt="${item.alt || ''}"/></div>`;
  }
  return `<div class="cs-gallery-item placeholder ${classExtra}"><span class="placeholder-tag">${item.tag || 'image.jpg'}</span></div>`;
}

function coverOrPlaceholder(item) {
  if (item && item.src) {
    return `<div class="cs-cover"><img src="${item.src}" alt="${item.alt || ''}"/></div>`;
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

  const existingCue = drawer.querySelector('.drawer-scroll-cue');
  if (existingCue) existingCue.remove();
  const cue = document.createElement('div');
  cue.className = 'drawer-scroll-cue';
  cue.setAttribute('aria-hidden', 'true');
  cue.innerHTML = `
    <span>Scroll</span>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
      <path d="M7 2 L7 12 M3 8 L7 12 L11 8"/>
    </svg>
  `;
  drawer.appendChild(cue);
  setTimeout(() => cue.remove(), 2900);
}

function closeCaseStudy() {
  drawer.classList.remove('open');
  backdrop.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
  const cue = drawer.querySelector('.drawer-scroll-cue');
  if (cue) cue.remove();
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

/* ===== Contact form ===== */
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    formStatus.style.display = 'none';

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        contactForm.innerHTML = `
          <div class="form-success">
            <p class="form-success-title">Message sent.</p>
            <p class="form-success-body">Thanks for reaching out — I’ll get back to you within a couple of business days.</p>
          </div>
        `;
      } else {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        formStatus.textContent = 'Something went wrong. Please try again or email me directly.';
        formStatus.style.display = 'block';
      }
    } catch (_) {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      formStatus.textContent = 'Something went wrong. Please try again or email me directly.';
      formStatus.style.display = 'block';
    }
  });
}

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

/* ===== Scroll line ===== */
(function initScrollLine() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 700) return;

  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.id = 'scroll-line-svg';
  svg.setAttribute('aria-hidden', 'true');
  document.body.appendChild(svg);

  const pathEl = document.createElementNS(NS, 'path');
  pathEl.id = 'scroll-line-path';
  svg.appendChild(pathEl);

  let totalLen = 0;

  function docTop(el) {
    return el.getBoundingClientRect().top + window.scrollY;
  }

  function buildPath() {
    const W = document.documentElement.clientWidth;
    const H = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

    svg.setAttribute('width', W);
    svg.setAttribute('height', H);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

    // Collect section boundary y positions
    const sectionEls = [
      document.querySelector('.hero'),
      document.getElementById('about'),
      document.getElementById('services'),
      document.getElementById('work'),
      document.getElementById('contact'),
    ].filter(Boolean);

    if (!sectionEls.length) return;

    const ys = sectionEls.map((el) => docTop(el));
    ys.push(H);

    // Margin for vertical edge segments — gives the snake its side rails
    const MX = 20;
    const LX = MX;        // left rail x
    const RX = W - MX;    // right rail x

    // Snake: drop in left margin → sweep right → drop in right margin → sweep left → repeat
    let d = `M ${LX} 0`;

    for (let i = 0; i < ys.length - 1; i++) {
      const y0 = ys[i];
      const y1 = ys[i + 1];
      if (i % 2 === 0) {
        d += ` L ${LX} ${y0} L ${RX} ${y0} L ${RX} ${y1}`; // drop left, sweep right, drop right
      } else {
        d += ` L ${RX} ${y0} L ${LX} ${y0} L ${LX} ${y1}`; // drop right, sweep left, drop left
      }
    }
    // Final edge drop to page bottom
    const finalX = (ys.length - 1) % 2 === 0 ? LX : RX;
    d += ` L ${finalX} ${H}`;

    pathEl.setAttribute('d', d);
    totalLen = pathEl.getTotalLength();
    pathEl.style.strokeDasharray = totalLen;
    updateOffset();
  }

  function updateOffset() {
    if (!totalLen) return;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    // Pre-draw enough to show the first sweep on load, then draw the rest with scroll
    const drawn = document.documentElement.clientWidth + ratio * (totalLen - document.documentElement.clientWidth);
    pathEl.style.strokeDashoffset = totalLen - drawn;
  }

  let raf;
  window.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(updateOffset);
  }, { passive: true });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildPath, 150);
  });

  // Rebuild if page height changes (e.g. case study list rendered)
  const ro = new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildPath, 100);
  });
  ro.observe(document.body);

  if (document.readyState === 'complete') {
    buildPath();
  } else {
    window.addEventListener('load', buildPath);
  }
}());
