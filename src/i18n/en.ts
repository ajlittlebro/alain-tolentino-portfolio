import type { Dict } from './types';
import { CV, REPOS } from './shared';

export const en: Dict = {
  meta: {
    title: 'Alain Tolentino – Software & Web Engineering · Internship from March 2027',
    description:
      'Portfolio of Alain Josué Tolentino Ibarra: DAAD-KOSPIE scholar at TU Dresden, B.Sc. Software Technology Engineering (German grade 1.3). Available for a 5–6 month mandatory internship starting late March 2027.',
    ogLocale: 'en_US',
    ogAlt: 'Alain Josué Tolentino Ibarra – DAAD-KOSPIE Scholar @ TU Dresden | Web & Software Engineering',
  },
  sections: { projects: 'projects', about: 'about', journey: 'journey', stack: 'skills', contact: 'contact' },
  nav: {
    skip: 'Skip to content',
    labels: { projects: 'Work', about: 'Workbench', journey: 'Journey', stack: 'Stack', contact: 'Contact' },
    brandSub: 'TU Dresden · DAAD-KOSPIE',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    lang: 'Choose language',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    home: 'Home',
    primary: 'Main navigation',
  },
  hero: {
    eyebrow: 'Dresden, Germany · Computer Science (TU Dresden) & Software Technology Engineering (B.Sc.)',
    name: 'Alain Josué Tolentino Ibarra',
    lead:
      'Software Technology Engineering student at UANL (GPA 94.9 / 100 – German grade 1.3) and DAAD-KOSPIE scholar at the Faculty of Computer Science, TU Dresden. I build modern web applications, turning functional requirements into clean, responsive interfaces (React, Astro, JavaScript ES6+, Tailwind CSS, HTML5/CSS3, SVG) connected to structured backend services (Node.js, Express.js, REST APIs, MySQL, Firebase).',
    ctaProjects: 'Explore selected work',
    cvDe: 'Lebenslauf (DE · PDF)',
    cvEn: 'CV / Resume (EN · PDF)',
    photoAlt: 'Portrait photo of Alain Josué Tolentino Ibarra',
    photoCaption: 'Fig. 00 — Portrait',
    telemetryTitle: 'Key figures · verified',
    metrics: [
      { value: '1.3', label: 'German grade equivalent', sub: '94.9 / 100 points at UANL · 9th semester' },
      { value: 'DE B2 · EN C1 · ES', label: 'Language skills', sub: 'German B2 (interDaF Leipzig, certified) · English C1 · Spanish native' },
      { value: '+15%', label: 'Production impact', sub: 'More online course inquiries through the web portal for The AJ School' },
    ],
  },
  copyEmail: { copy: 'Copy email', copied: 'Copied!', srCopied: 'Email address copied!' },
  projects: {
    eyebrow: '01 // Selected work',
    title: 'Three case studies, four live demos.',
    intro:
      'Ordered by relevance. Each case study separates context, architecture and outcome; the diagrams are simplified architecture schematics of the actual code.',
    tier1: 'Level 1 · Case studies',
    tier2: 'Level 2 · Live demos & engineering archive',
    labels: {
      role: 'Problem & role',
      architecture: 'System architecture & decisions',
      outcome: 'Challenge & outcome',
      stack: 'Technologies',
      artifact: 'Artifact · architecture schematic',
    },
    cases: [
      {
        id: 'shop',
        index: 'Case 01',
        title: 'Full-Stack E-Commerce Web Application & Admin CRUD Dashboard',
        period: '11/2024 – 08/2025',
        place: 'UANL, Mexico',
        badge: 'University project',
        badgeTone: 'study',
        role: 'Designed and built a multi-tier web application for an online videogame store that clearly separates the public storefront from a protected admin CRUD dashboard.',
        architecture:
          'React 18 frontend with 13 independent state providers (Context API, e.g. for authentication, cart, wishlist and catalog), combined multi-criteria filtering (min/max price, platform, genre, search) and admin tables built with @tanstack/react-table v8 (column sorting, global filter, pagination) and react-hook-form. RESTful backend in Node.js/Express.js connected to MySQL through a connection pool, JWT authentication in HTTP cookies, bcryptjs password hashing, server-side schema validation with Zod and image storage in Cloudinary.',
        outcome:
          'Data integrity before persisting to 15 relational MySQL tables: Zod validation in the API layer combined with 18 SQL triggers (BEFORE INSERT) that automatically clean input with TRIM. Cart and wishlist are stored per user in the database.',
        stack: ['React 18', 'Vite', 'Tailwind CSS', 'TanStack Table v8', 'React Hook Form', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'JWT', 'bcryptjs', 'Zod', 'Cloudinary'],
        links: [{ kind: 'repo', label: 'Repository on GitHub', href: REPOS.shop }],
        specsTitle: 'Technical details from the code',
        specs: [
          'client/src/context/: 13 providers (AuthContext, CarritoContext, WishlistContext, ProductosContext …)',
          'Tablas.jsx: getSortedRowModel · getFilteredRowModel · getPaginationRowModel · globalFilter',
          'server/middlewares/validateToken.js: authRequired guards private routes; role (id_rol) in the JWT payload',
          'server/sql/BDD.sql: 15 tables, 18 “BEFORE INSERT … TRIM()” triggers',
          'Secrets via environment variables (.env.example), never in the repository',
        ],
        diagram: 'shop',
        diagramTitle: 'Architecture: React client, Express REST API, MySQL and Cloudinary',
        diagramDesc:
          'Three layers: React 18 client with storefront, multi-filter and admin CRUD (TanStack Table, 13 contexts); Express REST API with JWT cookie auth, Zod validation and bcryptjs; persistence in MySQL (15 tables, 18 triggers) and media in Cloudinary.',
      },
      {
        id: 'ajschool',
        index: 'Case 02',
        title: 'The AJ School — Commercial School Web Portal in Production',
        period: '04/2021 – 06/2026 · Web release 2026',
        place: 'Reynosa, Mexico',
        badge: 'Client project · in production',
        badgeTone: 'client',
        role: 'Sole developer: responsible for concept, UI/UX design, development and production deployment of the language institute’s commercial web portal – alongside my role as English instructor (B2/C1).',
        architecture:
          'Evolved from an earlier WordPress version to a statically generated, instant-loading Astro architecture with Tailwind CSS; mobile-first information hierarchy for courses and levels, persistence via Firebase (NoSQL) and form capture via Formspree.',
        outcome:
          'Less friction when checking course schedules and levels on a phone: online course inquiries and projected enrollments increased by 15%.',
        metric: { value: '+15%', label: 'course inquiries & projected enrollments' },
        stack: ['Astro', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Firebase (NoSQL)', 'Formspree', 'Mobile-first UI/UX'],
        links: [{ kind: 'site', label: 'Live website', href: REPOS.ajschool }],
        note: 'Private repository – production portal of a real institute',
        specsTitle: 'Technical details (publicly visible)',
        specs: [
          'Page structure: Home · About · Courses · Contact · Privacy',
          'Astro with View Transitions (ClientRouter) and bundled /_astro assets',
          'Slider, gallery and event images served from Firebase Storage',
          'Inquiry forms via Formspree – no own server required',
        ],
        diagram: 'ajschool',
        diagramTitle: 'Architecture and conversion flow of The AJ School web portal',
        diagramDesc:
          'Astro static generation with Tailwind CSS (mobile-first) leads to course-level routing and lead capture, connected to Formspree and Firebase (NoSQL); outcome: plus 15 percent online course inquiries and projected enrollments.',
      },
      {
        id: 'tud',
        index: 'Case 03',
        title: 'Interactive Web Data Visualization & System Modeling',
        period: 'since 10/2026',
        place: 'Technische Universität Dresden',
        badge: 'University project · in progress',
        badgeTone: 'ongoing',
        role: 'Hands-on engineering work across my three specialization modules in the winter semester 2026/2027 as a DAAD-KOSPIE scholar at the Faculty of Computer Science, TU Dresden.',
        architecture:
          '(1) UI/UX design and frontend implementation of an interactive, data-driven web infographic in the 60-hour practical portfolio of Web and Multimedia Engineering (INF-25-Ba-PMI-WME); (2) formal modeling and behavioral analysis of concurrent queue systems with Colored Petri Nets (CPN IDE) in Softwaretechnologie II; (3) practical exercises on lexical and syntactic analysis (NFA/DFA, LL/LR parsers, AST) in Compiler Construction.',
        outcome:
          'Turning structured data sets (XML/JSON) and formal concurrency models into clear, accessible representations that can be manipulated directly in the browser – using native web standards (HTML5, CSS3, SVG, JavaScript).',
        stack: ['HTML5', 'CSS3', 'SVG', 'JavaScript (ES6+)', 'XML', 'Colored Petri Nets (CPN IDE)', 'Compiler Construction (AST / Parser)'],
        links: [],
        specsTitle: 'Modules in the winter semester 2026/2027',
        specs: [
          'Web and Multimedia Engineering – 60 h practical portfolio: interactive web infographic',
          'Softwaretechnologie II – Colored Petri Nets: places, transitions, tokens, behavioral analysis',
          'Compiler Construction – scanner/parser: NFA → DFA, LL/LR, abstract syntax trees',
        ],
        diagram: 'tud',
        diagramTitle: 'Dual panel: interactive SVG data visualization and a Colored Petri Net',
        diagramDesc:
          'Left: an interactive SVG bar chart driven by XML data (WME, 60 hours); right: a Colored Petri Net with places P1 and P2, transitions T1 and T2, directed arcs and tokens (Softwaretechnologie II).',
      },
    ],
    privacyNote:
      'Security & privacy note (GDPR): the public demos and repositories were audited in November 2026 – credentials moved to environment variables, third-party personal data removed and an anonymized showcase demo published.',
    archive: [
      {
        id: 'event',
        index: 'A-01',
        title: 'Event Landing Page & Custom Packery.js Masonry Engine',
        period: '2026',
        place: 'Personal project · demo with fictitious data',
        summary:
          'Event landing page designed and coded from scratch, with a custom JavaScript algorithm (equalizeColumnHeights) on top of Packery.js and imagesLoaded that dynamically aligns the bottom edge of a masonry gallery in 4, 3 and 2 columns without cropping AVIF photos.',
        facts: ['Keyboard-accessible lightbox', 'Live countdown', 'Google Calendar event generator', 'RSVP dialog with guest counter', 'GPU-accelerated background (translateZ(0))'],
        stack: ['HTML5', 'CSS3', 'Vanilla JS', 'Packery.js', 'imagesLoaded', 'AVIF'],
        links: [
          { kind: 'demo', label: 'Live demo', href: REPOS.eventDemo },
          { kind: 'repo', label: 'GitHub', href: REPOS.event },
        ],
        shot: 'event',
        shotAlt: 'Screenshot of the anonymized event landing page with countdown',
      },
      {
        id: 'boardgame',
        index: 'A-02',
        title: 'Agile Educational Board Game Web App & Software Quality Assurance',
        period: '10/2024 – 08/2025',
        place: 'UANL, Mexico · Scrum team',
        summary:
          'Frontend architecture and responsive UI/UX design of an interactive educational board game web app built in agile sprints (Scrum). In a team project for a 3D virtual campus tour my role was Software QA: functional, performance and hardware compatibility testing, including bug documentation.',
        facts: ['Dice, player tokens and quiz questions', 'Board drawn with Canvas 2D', 'Sound effects via the Web Audio API', 'Game state in localStorage'],
        stack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive UI/UX', 'Scrum', 'Software testing (QA)'],
        links: [
          { kind: 'demo', label: 'Live demo', href: REPOS.boardGameDemo },
          { kind: 'repo', label: 'GitHub', href: REPOS.boardGame },
        ],
        shot: 'boardgame',
        shotAlt: 'Screenshot of the educational board game Pensamiento Fimeño',
      },
      {
        id: 'sisdon',
        index: 'A-03',
        title: 'SISDON — Database-Backed Sales, Inventory & POS System',
        period: '02/2024 – 08/2024',
        place: 'UANL, Mexico',
        summary:
          'Desktop system for the digital management of inventory, customers, employees and point of sale (POS) for a local business. Selected for presentation at FIME’s 25th Institutional Projects Colloquium.',
        facts: [
          'CRUD via OleDb on MS Access',
          'Real-time input validation with lambda delegates and regular expressions (Regex)',
          'POS module with stage-based state control of the form sections',
          'Automatic stock deduction and invoice/ticket printing (PrintDocument)',
        ],
        stack: ['C# (.NET Framework 4.7.2)', 'Windows Forms', 'ADO.NET (OleDb)', 'SQL / MS Access', 'PrintDocument'],
        links: [{ kind: 'repo', label: 'GitHub', href: REPOS.sisdon }],
      },
      {
        id: 'sustainability',
        index: 'A-04',
        title: 'Modular Sustainability Web Platform & 1st Place “TigreHacks 2023” Hackathon',
        period: '10/2023 · 03/2024',
        place: 'Monterrey, Mexico',
        summary:
          'Multi-page study platform on sustainable development with 8 chapters, dynamic dropdown menus and consistent navigation. Plus 1st place at the TigreHacks 2023 hackathon for jointly developing the system concept, control logic and pitch of a prototype for dynamic traffic-light phase optimization.',
        facts: ['10/2023: TigreHacks 2023 – 1st place (team project)', '03/2024: platform with 8 chapters in 2 units'],
        stack: ['HTML5', 'Tailwind CSS', 'JavaScript (DOM)', 'System concept & prototyping'],
        links: [
          { kind: 'demo', label: 'Live demo', href: REPOS.sustainabilityDemo },
          { kind: 'repo', label: 'GitHub', href: REPOS.sustainability },
        ],
        shot: 'sustainability',
        shotAlt: 'Screenshot of the study platform Ambiente y Sustentabilidad',
      },
    ],
  },
  about: {
    eyebrow: '02 // About & digital workbench',
    title: 'From an empty editor to the last pixel.',
    story: {
      label: 'Why I write software',
      paragraphs: [
        'I enjoy the moment an empty file turns into something that solves a real problem. I like breaking requirements down into small, verifiable steps – and caring about both: a clean data structure and an interface that is right down to the last pixel.',
        'I built the foundations in Mexico – as a bilingual programming technician at IIES and now in my 9th semester of Software Technology Engineering at UANL (94.9 / 100, equivalent to 1.3). Since 2026 I continue as a DAAD-KOSPIE scholar at TU Dresden.',
      ],
    },
    bench: {
      label: 'Currently at the workbench',
      term: 'TU Dresden · WS 26/27',
      modules: [
        { code: 'WME', name: 'Web and Multimedia Engineering', focus: 'Interactive web infographic · 60 h practical portfolio' },
        { code: 'SWT II', name: 'Softwaretechnologie II', focus: 'Colored Petri Nets (CPN IDE) · concurrent systems' },
        { code: 'CB', name: 'Compiler Construction', focus: 'Lexical & syntactic analysis · parsers · AST' },
      ],
    },
    comms: {
      label: 'Engineering + clear communication',
      paragraphs: [
        'Teaching English at B2/C1 level (Cambridge TKT Module 2, Band 3) taught me to plan content in a structured way and explain it clearly. The intensive German B2 course at interDaF (Universität Leipzig) adds to that.',
        'It helps me document code, work in Scrum sprints and communicate in international teams – in English and German.',
      ],
      interestsLabel: 'Beyond the terminal',
      interests: ['Web design & modern frontend technologies', 'Language learning & cultural exchange', 'Analytical strategy games'],
    },
  },
  journey: {
    eyebrow: '03 // Experience & academic journey',
    title: 'My journey, in the same order as my resume.',
    intro: 'Four academic stages and four practical roles – line by line as in the resume.',
    eduTitle: 'Education & scholarships',
    workTitle: 'Practical & work experience',
    education: [
      {
        period: '10/2026 – exp. 09/2027',
        place: 'Dresden, Germany',
        title: 'Academic Exchange in Computer Science (Informatik)',
        org: 'Technische Universität Dresden, Faculty of Computer Science',
        details: [
          'DAAD-KOSPIE Full Scholarship Fellow: Combined Study and Practice Stays for Engineers (merit-based full scholarship awarded by the DAAD).',
          'Enrolled modules (WS 2026/2027): Web and Multimedia Engineering, Softwaretechnologie II, Compiler Construction.',
        ],
      },
      {
        period: '08/2022 – exp. 12/2027',
        place: 'Monterrey, Mexico',
        title: 'Bachelor of Science in Software Technology Engineering',
        org: 'Universidad Autónoma de Nuevo León (UANL), FIME',
        details: ['GPA: 94.9 / 100 (German grade 1.3 – “sehr gut” / very good).', '9th semester (standard duration: 10 semesters).'],
      },
      {
        period: '07/2026 – 09/2026',
        place: 'Leipzig, Germany',
        title: 'Intensive German Language Course (Certified Level B2 CEFR)',
        org: 'interDaF e. V. at the Herder-Institut of Universität Leipzig',
        details: ['Three-month full-time intensive preparation program for university studies in Germany (funded by the DAAD).'],
      },
      {
        period: '08/2019 – 07/2022',
        place: 'Reynosa, Mexico',
        title: 'Technical High School Diploma & Bilingual Programming Technician',
        org: 'Instituto Internacional de Estudios Superiores (IIES)',
        details: ['Certified Bilingual Programming Technician: software development, OOP, relational databases.'],
      },
    ],
    experience: [
      {
        period: '04/2021 – 06/2026',
        place: 'Reynosa, Mexico',
        title: 'Web Platform Developer & English Instructor (CEFR B2/C1)',
        org: 'The AJ School (Language Institute)',
        details: [
          'Independently designed, built and deployed the school’s responsive web portal with Astro, Tailwind CSS, HTML5/CSS3, Firebase (NoSQL) and Formspree; +15% online course inquiries and projected enrollments.',
          'Planned and delivered structured English courses at B2 and C1 level.',
        ],
      },
      {
        period: '12/2025 – 05/2026',
        place: 'Monterrey, Mexico',
        title: 'IT & Systems Assistant (University Social Service)',
        org: 'General Coordination of Administration & Systems – FIME, UANL',
        details: ['Structured troubleshooting of workstations and networks, maintenance of internal administrative databases and technical documentation.'],
      },
      {
        period: '03/2022 – 06/2022',
        place: 'Reynosa, Mexico',
        title: 'Projects Administration Assistant (Intern)',
        org: 'Petróleos Mexicanos (PEMEX)',
        details: ['Recorded, validated and analyzed procedural records in a legal database (MS Excel) and compiled standardized progress reports.'],
      },
      {
        period: '07/2021 – 08/2021',
        place: 'Reynosa, Mexico',
        title: 'Project Engineering Assistant (Intern)',
        org: 'Secretaría de Agricultura y Desarrollo Rural (SAGARPA)',
        details: ['Reviewed technical project documentation, tracked approval workflows and updated cost estimates.'],
      },
    ],
  },
  stack: {
    eyebrow: '04 // Tech stack & credentials',
    title: 'A tech stack, with context.',
    intro: 'Grouped by actual use in projects and coursework.',
    blocks: [
      {
        title: 'Core focus & good proficiency',
        note: 'Modern web development',
        items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React', 'Astro', 'Node.js', 'Express.js', 'RESTful APIs', 'SQL (MySQL)', 'NoSQL (Firebase)', 'Responsive UI/UX design', 'SVG'],
      },
      {
        title: 'Foundational knowledge',
        note: 'Coursework & academic projects',
        items: ['TypeScript', 'C# (.NET)', 'Java', 'C', 'C++', 'Python (basics)', 'XML', 'MS Access', 'Petri Nets (CPN IDE)'],
      },
      {
        title: 'Tools & practices',
        note: 'Way of working',
        items: ['Git', 'GitHub', 'Visual Studio Code', 'Linux basics (WSL2, VirtualBox)', 'OOP', 'Scrum', 'Software quality assurance (testing)'],
      },
    ],
    pillarsTitle: 'Work style · evidenced',
    pillars: [
      { title: 'Structured execution & fast ramp-up', text: 'GPA 94.9 / 100 (German grade 1.3) and quick adaptation to new frameworks and modules at TU Dresden.' },
      { title: 'Initiative & reliability', text: 'Independently built and deployed the production web portal for The AJ School and the SISDON system.' },
      { title: 'Intercultural teamwork & communication', text: 'Agile Scrum projects, TigreHacks 2023 (1st place) and teaching B2/C1 English courses.' },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native', detail: '' },
      { name: 'English', level: 'C1', detail: 'Full professional proficiency' },
      { name: 'German', level: 'B2', detail: 'Good working proficiency, spoken and written' },
    ],
    certsTitle: 'Certifications',
    certs: [
      { name: 'Meta Front-End Developer Professional Certificate', date: '08/2024', issuer: 'Coursera – React, JavaScript, HTML5/CSS3, Git, UI/UX' },
      { name: 'interDaF German Language Certificate – Level B2 CEFR', date: '09/2026', issuer: 'Herder-Institut of Universität Leipzig' },
      { name: 'Cambridge TKT – Module 2, Band 3', date: '10/2024', issuer: 'Cambridge University Press & Assessment' },
    ],
    awardsTitle: 'Honors & awards',
    awards: [
      'DAAD-KOSPIE Full Scholarship (2026/2027)',
      '1st place at the TigreHacks 2023 hackathon',
      'Presenter at FIME’s 25th Institutional Projects Colloquium (UANL)',
    ],
  },
  contact: {
    eyebrow: '05 // CV & contact',
    title: 'Open to a mandatory internship from late March 2027.',
    text: 'I would be glad to hear from you – and to discuss my background in a personal or virtual interview. I reply in English or German.',
    emailLabel: 'Email',
    send: 'Send email',
    cvTitle: 'Download my CV',
    cvNote: 'Public, GDPR-optimized versions: without street address, phone number or date of birth.',
    cvCards: [
      { lang: 'English · PDF', title: 'CV / Resume', href: CV.en.href, file: CV.en.file, open: 'Open', download: 'Download' },
      { lang: 'Deutsch · PDF', title: 'Lebenslauf', href: CV.de.href, file: CV.de.file, open: 'Open', download: 'Download' },
    ],
    profilesLabel: 'Profiles',
  },
  footer: {
    rights: 'Alain Josué Tolentino Ibarra',
    built: 'Astro · Tailwind CSS · no cookies or tracking',
    privacy: 'Privacy',
    top: 'Back to top',
    tagline: 'Code & Curiosity',
  },
  privacy: {
    title: 'Privacy policy',
    updated: 'Last updated: November 2026',
    back: 'Back to home',
    sections: [
      {
        heading: '1. Controller',
        paragraphs: [
          'The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is: Alain Josué Tolentino Ibarra, email: alain.tolentino@outlook.com.',
          'This website is a private, non-commercial application portfolio.',
        ],
      },
      {
        heading: '2. Hosting and server log files',
        paragraphs: [
          'This website is hosted by Vercel Inc. (USA). When you access the pages, the hosting provider processes technically necessary data in server log files: IP address, date and time of access, requested page, referrer URL, and browser and operating system information.',
          'Processing is based on Art. 6(1)(f) GDPR. The legitimate interest lies in delivering the website securely and reliably. This data is not combined with other data sources.',
          'For transfers to third countries, Vercel relies on the safeguards provided for in the GDPR. More information: https://vercel.com/legal/privacy-policy',
        ],
      },
      {
        heading: '3. No cookies, no tracking, no external fonts',
        paragraphs: [
          'This website sets no cookies, uses no analytics or tracking tools and embeds no third-party content. All fonts are served locally from this website’s own server; no connection to Google Fonts or other CDNs is made.',
          'Your choice of light or dark theme is stored exclusively in your browser’s local storage (localStorage) and is never transmitted. This storage is strictly necessary for the function you explicitly requested (Section 25(2) No. 2 TDDDG) and can be deleted at any time in your browser settings.',
        ],
      },
      {
        heading: '4. Contact by email',
        paragraphs: [
          'If you contact me by email, the data you provide (email address, name and message content) is used solely to process your inquiry (Art. 6(1)(b) or (f) GDPR). The data is deleted as soon as it is no longer required for this purpose, unless statutory retention obligations apply.',
        ],
      },
      {
        heading: '5. External links',
        paragraphs: [
          'This website contains links to external services (e.g. GitHub, LinkedIn, Netlify). Data is only transferred when you click such a link. The respective providers are responsible for their own data processing.',
        ],
      },
      {
        heading: '6. Your rights',
        paragraphs: [
          'You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21). To exercise these rights, simply contact the email address above.',
          'You also have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR).',
        ],
      },
    ],
  },
  notFound: {
    title: 'Page not found',
    text: 'The requested page does not exist or has been moved.',
    back: 'Back to home',
  },
};
