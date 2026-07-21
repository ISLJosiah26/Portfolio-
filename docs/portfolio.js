/* =============================================================
   Portfolio JS. Drawer, deep links, nav, reveal.
   Case study data lives in case-studies.js (loaded first).
   ============================================================= */

document.getElementById('year').textContent = new Date().getFullYear();

/* ===== Drawer ===== */
const drawer = document.getElementById('drawer');
const backdrop = document.getElementById('drawerBackdrop');
const drawerContent = document.getElementById('drawerContent');
const drawerScroll = document.getElementById('drawerScroll');
const drawerClose = document.getElementById('drawerClose');

/* Asset paths must be root-absolute: once the drawer pushes
   /work/<id>/ onto the history stack, relative srcs would resolve
   against that path and 404. */
function absPath(src) {
  return (src && !src.startsWith('http') && !src.startsWith('/')) ? `/${src}` : src;
}
function absSrcset(srcset) {
  return srcset.split(',').map((part) => {
    const [file, size] = part.trim().split(/\s+/);
    return `${absPath(file)} ${size || ''}`.trim();
  }).join(', ');
}

function imageOrPlaceholder(item, classExtra = '') {
  if (item.src) {
    const srcset = item.srcset ? ` srcset="${absSrcset(item.srcset)}" sizes="(max-width: 820px) 96vw, 820px"` : '';
    return `<div class="cs-gallery-item ${classExtra}"><img src="${absPath(item.src)}"${srcset} alt="${item.alt || ''}" loading="lazy" decoding="async"/></div>`;
  }
  return `<div class="cs-gallery-item placeholder ${classExtra}"><span class="placeholder-tag">${item.tag || 'image.jpg'}</span></div>`;
}

function coverOrPlaceholder(item) {
  if (item && item.src) {
    const srcset = item.srcset ? ` srcset="${absSrcset(item.srcset)}" sizes="(max-width: 820px) 96vw, 820px"` : '';
    const natural = item.fit === 'natural' ? ' natural' : '';
    return `<div class="cs-cover${natural}"><img src="${absPath(item.src)}"${srcset} alt="${item.alt || ''}" loading="lazy" decoding="async"/></div>`;
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

/* ===== Focus trap helpers ===== */
let drawerOpener = null;

function getFocusable(container) {
  return [...container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )];
}

function handleDrawerTab(e) {
  if (e.key !== 'Tab') return;
  const focusable = getFocusable(drawer);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

/* ===== Open / close, with history deep links =====
   Opening pushes /work/<id>/ onto the history stack, so the URL is
   shareable (a real static page lives there) and Back closes the
   drawer. Closing via UI delegates to history.back() when we own
   the current history entry. */

function openCaseStudy(id, { push = true } = {}) {
  const cs = CASE_STUDIES.find((c) => c.id === id);
  if (!cs) return;
  drawerOpener = document.activeElement;
  drawerContent.innerHTML = renderCaseStudy(cs);
  drawerScroll.scrollTop = 0;
  drawer.classList.add('open');
  backdrop.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('drawer-open');
  document.addEventListener('keydown', handleDrawerTab);
  setTimeout(() => drawerClose.focus(), 50);

  if (push) {
    history.pushState({ cs: id }, '', `work/${id}/`);
  }

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

function doCloseCaseStudy() {
  drawer.classList.remove('open');
  backdrop.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('drawer-open');
  document.removeEventListener('keydown', handleDrawerTab);
  if (drawerOpener) { drawerOpener.focus(); drawerOpener = null; }
  const cue = drawer.querySelector('.drawer-scroll-cue');
  if (cue) cue.remove();
}

function closeCaseStudy() {
  if (history.state && history.state.cs) {
    history.back(); // popstate handler does the closing
  } else {
    doCloseCaseStudy();
  }
}

window.addEventListener('popstate', (e) => {
  const id = e.state && e.state.cs;
  if (id) {
    openCaseStudy(id, { push: false });
  } else if (drawer.classList.contains('open')) {
    doCloseCaseStudy();
  }
});

/* Work list + hero proof links open the drawer in place */
document.querySelectorAll('a[data-id]').forEach((link) => {
  link.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // let new-tab clicks through
    e.preventDefault();
    openCaseStudy(link.dataset.id);
  });
});

drawerClose.addEventListener('click', closeCaseStudy);
backdrop.addEventListener('click', closeCaseStudy);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer.classList.contains('open')) closeCaseStudy();
});

/* ===== Work list hover preview ===== */
(function initWorkPeek() {
  const peek = document.getElementById('workPeek');
  if (!peek) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const img = peek.querySelector('img');

  document.querySelectorAll('.work-link[data-thumb]').forEach((link) => {
    link.addEventListener('pointerenter', () => {
      img.src = absPath(link.dataset.thumb);
      peek.classList.add('show');
    });
    link.addEventListener('pointerleave', () => peek.classList.remove('show'));
    link.addEventListener('pointermove', (e) => {
      peek.style.transform = `translate(${e.clientX + 28}px, ${e.clientY - 90}px)`;
    });
  });
})();

/* ===== Mobile nav ===== */
const hamburger = document.getElementById('navHamburger');
const navMobile = document.getElementById('navMobile');
const siteContent = document.getElementById('siteContent');
const siteFooter = document.getElementById('siteFooter');
let navOpener = null;

function setPageInert(inert) {
  [siteContent, siteFooter, drawer, backdrop].filter(Boolean).forEach((el) => {
    if (inert) el.setAttribute('inert', '');
    else el.removeAttribute('inert');
  });
}

function handleNavTab(e) {
  if (e.key !== 'Tab') return;
  const focusable = getFocusable(navMobile);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function openMobileNav() {
  if (drawer.classList.contains('open')) closeCaseStudy();
  navOpener = document.activeElement;
  navMobile.classList.add('open');
  navMobile.setAttribute('aria-hidden', 'false');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Close menu');
  document.body.classList.add('nav-open');
  setPageInert(true);
  document.addEventListener('keydown', handleNavTab);
  setTimeout(() => navMobile.querySelector('a')?.focus(), 50);
}

function closeMobileNav({ restoreFocus = true } = {}) {
  navMobile.classList.remove('open');
  navMobile.setAttribute('aria-hidden', 'true');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('nav-open');
  setPageInert(false);
  document.removeEventListener('keydown', handleNavTab);
  if (restoreFocus && navOpener) navOpener.focus();
  navOpener = null;
}

hamburger.addEventListener('click', () => {
  if (navMobile.classList.contains('open')) closeMobileNav();
  else openMobileNav();
});
navMobile.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => closeMobileNav({ restoreFocus: false }));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMobile.classList.contains('open')) closeMobileNav();
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
            <p class="form-success-body">Thanks for reaching out. I’ll get back to you within a couple of business days.</p>
          </div>
        `;
      } else {
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        formStatus.textContent = 'Something went wrong. Please try again or message me on LinkedIn.';
        formStatus.style.display = 'block';
      }
    } catch (_) {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
      formStatus.textContent = 'Something went wrong. Please try again or message me on LinkedIn.';
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

/* ===== Active nav section ===== */
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach((a) => {
      const active = a.getAttribute('href') === `#${id}`;
      a.classList.toggle('nav-active', active);
      if (active) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-10% 0px -80% 0px', threshold: 0 });
['about', 'services', 'work', 'contact'].forEach((id) => {
  const el = document.getElementById(id);
  if (el) navObserver.observe(el);
});

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
  const scheduleBuild = (delay = 150) => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildPath, delay);
  };

  window.addEventListener('resize', () => scheduleBuild(), { passive: true });

  // Rebuild only when primary content regions change size, avoiding a body-wide observer.
  if ('ResizeObserver' in window) {
    const ro = new ResizeObserver(() => scheduleBuild(120));
    [document.querySelector('.hero'), ...document.querySelectorAll('main > section')].filter(Boolean).forEach((el) => ro.observe(el));
  }

  if (document.readyState === 'complete') {
    buildPath();
  } else {
    window.addEventListener('load', buildPath);
  }
}());
