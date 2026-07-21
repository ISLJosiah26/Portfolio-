/* =============================================================
   Case study data. Single source of truth.
   Used by portfolio.js (drawer) and scripts/build-case-pages.mjs
   (static pages at /work/<id>/). After editing, re-run:
     node scripts/build-case-pages.mjs
   Image srcs: leave src as "" to render the striped placeholder.
   ============================================================= */

const CASE_STUDIES = [
  {
    id: 'staffing',
    title: 'Three websites for sister companies.',
    year: '2026',
    client: 'Integrated Staffing Group',
    role: 'Design & Development',
    category: 'Web development',
    outcome: '15% traffic lift across three brands',
    deck: 'Three sister agencies, each with a distinct brand, built on a shared system. Proper recruitment platforms with live job boards, not brochures.',
    cover: {
      src: 'staffing-integrated-1600.webp',
      srcset: 'staffing-integrated-800.webp 800w, staffing-integrated-1600.webp 1600w',
      alt: 'Integrated Staffing website homepage',
      tag: 'staffing-cover.jpg'
    },
    sections: [
      {
        label: 'The brief',
        body: [
          "Integrated Staffing, Accountant Staffing, and Administrative Staffing are three sister agencies serving different client bases. Each needed a website that worked as part of a unified system while keeping each brand visually separate.",
          "The sites needed to function as proper recruitment platforms with live job boards, not just brochures."
        ]
      },
      {
        label: 'The approach',
        body: [
          "All three were built on Squarespace within a couple of months, using custom HTML, CSS, and JavaScript throughout to go beyond what the platform offers out of the box.",
          "A shared visual system establishes consistency across the group without making the brands feel identical. What changes per site is the brand: colour palette, photography, and copy voice for each agency's audience."
        ]
      },
      {
        label: 'Live job boards',
        body: [
          "Each job board connects to an external API and updates automatically. Postings stay current without manual intervention, and candidates can filter and apply directly through the site.",
          "Each job board is custom-built. No plugin handled the exact requirements."
        ]
      },
      {
        label: 'Outcome',
        body: [
          "Traffic increased 15% across all three brands following launch."
        ]
      }
    ],
    quote: null,
    gallery: [
      { src: 'staffing-integrated-1600.webp', srcset: 'staffing-integrated-800.webp 800w, staffing-integrated-1600.webp 1600w', alt: 'Integrated Staffing homepage', wide: true },
      { src: 'staffing-administrative-800.webp', srcset: 'staffing-administrative-800.webp 800w, staffing-administrative-1600.webp 1600w', alt: 'Administrative Staffing homepage' },
      { src: 'staffing-accountant-800.webp', srcset: 'staffing-accountant-800.webp 800w, staffing-accountant-1600.webp 1600w', alt: 'Accountant Staffing homepage' }
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
    category: 'Automation',
    outcome: '6,000+ alerts in its first month',
    deck: 'A custom web scraping pipeline that monitors Job Bank, LinkedIn, and Adzuna for postings from existing clients, scores each match, and alerts the right consultant before a placement opportunity slips away.',
    cover: { src: '', tag: 'clientwatch-cover.jpg' },
    sections: [
      {
        label: 'The problem',
        body: [
          "Recruitment consultants at the three sister agencies had a blind spot: existing clients posting jobs on public boards, often with competitors. Their CRM had no way to catch this.",
          "When a client is actively hiring, a recruitment agency has real leverage. A consultant who calls the day a role goes live is in a far better position than one who finds out weeks later, or not at all."
        ]
      },
      {
        label: 'What it does',
        body: [
          "ClientWatch monitors Job Bank, LinkedIn, and Adzuna for new postings, cross-references each one against the client list across all three agencies, and alerts the right consultant when a match is found.",
          "Matches are confidence-scored using normalisation logic, so a posting from a known client is recognised even when the company name is formatted differently from one board to the next."
        ]
      },
      {
        label: 'How it works',
        body: [
          "A custom scraping pipeline pulls postings from each source on a recurring schedule, with deduplication and rate limiting built in to stay reliable and avoid hammering the boards.",
          "Confirmed matches are pushed to consultants through Slack integrations across two workspaces and rolled up into an automated digest email every morning. A multi-user dashboard, backed by Supabase, gives the team a shared view of every alert."
        ]
      },
      {
        label: 'Stack',
        body: [
          "A Python scraping pipeline with Slack API integrations and a Supabase-backed dashboard. Built and maintained solo as a focused tool for a specific workflow."
        ],
        bullets: [
          "Monitors Job Bank, LinkedIn, and Adzuna on a schedule",
          "Confidence-scored client matching with normalisation logic",
          "Slack alerts across two workspaces and automated morning digest emails",
          "Deduplication, rate limiting, and a multi-user Supabase dashboard"
        ]
      },
      {
        label: 'Outcome',
        body: [
          "Generated over 6,000 alerts in its first month across the three agencies."
        ]
      }
    ],
    quote: null,
    gallery: [],
    links: []
  },

  {
    id: 'allowance',
    title: 'Personal budgeting app.',
    year: '2026',
    client: 'Personal project',
    role: 'Design & Development',
    category: 'Product',
    outcome: 'React and Supabase PWA',
    deck: 'A full-stack progressive web app for personal budgeting. Real-time spending tracking, budget management by category, and multi-user data isolation, built on React and Supabase.',
    cover: { src: '', tag: 'allowance-cover.jpg' },
    sections: [
      {
        label: 'The idea',
        body: [
          "Allowance answers a single question: how much do I actually have left to spend? Most budgeting apps bury that behind dashboards, categories, and charts. This one puts it first.",
          "Built as a personal project, designed to be the simplest way to see what's left once income, expenses, and budgets are accounted for."
        ]
      },
      {
        label: 'What it does',
        body: [
          "Users log income and expenses, set budgets by category, and watch their remaining balance update in real time as they spend.",
          "Every account is fully isolated. Row-level security in Supabase means each user only ever sees their own data."
        ]
      },
      {
        label: 'The build',
        body: [
          "A full-stack progressive web app built with React and Tailwind CSS on the front end, backed by Supabase for authentication, database, and security.",
          "As a PWA it installs on mobile and desktop and runs like a native app, while staying a single codebase on the web."
        ],
        bullets: [
          "User authentication and secure sessions",
          "Real-time spending tracking against budgets",
          "Budget management by category, with income and expense logging",
          "Row-level security for multi-user data isolation"
        ]
      }
    ],
    quote: null,
    gallery: [],
    links: [
      { label: 'allowance-flame.vercel.app', href: 'https://allowance-flame.vercel.app', meta: 'live' }
    ]
  },

  {
    id: 'logodesign',
    title: 'Logo design for an editorial firm.',
    year: '2026',
    client: 'Claros',
    role: 'Brand Design',
    category: 'Brand design',
    outcome: 'Stamp-style seal in light and dark',
    deck: 'A stamp-style seal for an editorial consultancy whose name comes from an ancient prophetic shrine of Apollo, with Apollo at the centre.',
    cover: {
      src: 'logo-cover-1600.webp',
      srcset: 'logo-cover-800.webp 800w, logo-cover-1600.webp 1600w',
      alt: 'Claros editorial consultancy seal with Apollo at the centre',
      tag: 'logo-cover.jpg'
    },
    sections: [
      {
        label: 'The brief',
        body: [
          "Claros is an editorial consultancy whose name comes from a real place: an ancient prophetic shrine of Apollo in western Turkey. The client wanted the logo to reflect that origin directly, with a depiction of Apollo as the central figure.",
          "Specific direction was given on the figure: male, bare-chested with robes, seated toward the viewer, one hand holding a torch and the other a lyre."
        ]
      },
      {
        label: 'The approach',
        body: [
          "Built in Adobe Illustrator. The direction on the figure was clear, so the work was interpretive: translating a specific mythological reference into something that functioned as a logo rather than an illustration.",
          "The result is a stamp-style seal with Apollo at centre, rendered in a woodcut-influenced style with the company name set in spaced capitals around the perimeter. Delivered in both light and dark versions."
        ]
      },
      {
        label: 'Outcome',
        body: [
          "A logo that carries genuine symbolic weight without being decorative for its own sake. The seal format gives it authority. The monochrome treatment keeps it flexible across applications."
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
    category: 'Web development',
    outcome: 'Board-run WordPress hub',
    deck: 'A community website built as the operational hub for the neighbourhood. Events, updates, resources, and contact, managed by non-developers.',
    cover: { src: '', tag: 'wwhra-cover.jpg' },
    sections: [
      {
        label: 'The brief',
        body: [
          "The Westwood Hills Residents Association needed a website that functioned as the operational hub for the community, not just a landing page. It needed to handle events, community updates, resource pages, and contact forms.",
          "It also needed to be manageable by people who are not developers. The board updates content themselves, and that had to hold long after launch."
        ]
      },
      {
        label: 'The approach',
        body: [
          "Built on WordPress and hosted on Hostinger. WordPress made sense here because the association updates content themselves without touching code.",
          "The site is structured around how residents use it: finding upcoming events, reading updates, accessing shared resources, and reaching the board. Design is functional and clear."
        ]
      },
      {
        label: 'Outcome',
        body: [
          "Live at wwhra.com and serving as the community's primary information channel."
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
    category: 'Data & reporting',
    outcome: 'Replaced a manual monthly report',
    deck: 'A real-time KPI dashboard consolidating data from Hootsuite, Squarespace Analytics, and GA4 into a single view. It replaced a manual monthly reporting process.',
    cover: {
      src: 'dashboard-cover-1600.webp',
      srcset: 'dashboard-cover-800.webp 800w, dashboard-cover-1600.webp 1600w',
      alt: 'Marketing performance dashboard showing KPI charts',
      tag: 'dashboard-cover.jpg',
      fit: 'natural'
    },
    sections: [
      {
        label: 'The problem',
        body: [
          "Reporting on marketing performance across the three sister agencies was a manual process: pull from Hootsuite, Squarespace Analytics, and GA4 separately, then assemble it by hand each month.",
          "By the time the report landed, the numbers were already old. There was no way to check current figures between cycles without starting over."
        ]
      },
      {
        label: 'The build',
        body: [
          "The dashboard consolidates data from all three sources into a single view. Data flows through a custom Google Apps Script endpoint connected to Google Sheets, with the front end built using Chart.js.",
          "Social media performance, website analytics, and quarter-over-quarter trends are tracked without anyone having to compile anything manually."
        ],
        bullets: [
          "Website analytics: sessions, sources, top pages, conversion events from GA4",
          "Social performance: follower growth, engagement, and reach via Hootsuite",
          "Quarter-over-quarter deltas for every KPI",
          "Data accessible at any point in the month, not just at the end of it"
        ]
      }
    ],
    quote: null,
    gallery: [],
    links: []
  }
];

/* Node (static page generator) */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CASE_STUDIES;
}
