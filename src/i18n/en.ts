import type { Dict } from './types';
import { REPOS } from './shared';

export const en: Dict = {
  meta: {
    title: 'Alain Tolentino – Software & Web Engineering · Internship from March 2027',
    description:
      'Portfolio of Alain Josué Tolentino Ibarra: DAAD-KOSPIE scholar at TU Dresden, B.Sc. Software Technology Engineering (German grade 1.3). Available for a 5–6 month mandatory internship starting late March 2027.',
    ogLocale: 'en_US',
  },
  nav: {
    skip: 'Skip to content',
    projects: 'Projects',
    journey: 'Background',
    skills: 'Skills',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    lang: 'Choose language',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    home: 'Home',
  },
  hero: {
    status: 'Available for a mandatory internship from late March 2027',
    name: 'Alain Josué Tolentino Ibarra',
    role: 'DAAD-KOSPIE Scholar · Computer Science at TU Dresden',
    degree: 'B.Sc. Software Technology Engineering (UANL) · GPA 94.9 / 100 ≙ German grade 1.3',
    lead: 'My focus is modern web development – from responsive frontends with React, Astro and Tailwind CSS to RESTful APIs with Node.js, Express.js and relational databases.',
    photoAlt: 'Portrait photo of Alain Josué Tolentino Ibarra',
    facts: [
      { value: '1.3', label: 'German grade (GPA 94.9 / 100)' },
      { value: 'DAAD', label: 'KOSPIE full scholarship 2026/27' },
      { value: 'B2 · C1', label: 'German · English' },
      { value: '1st place', label: 'TigreHacks 2023 hackathon' },
    ],
    availabilityTitle: 'Internship · Key facts',
    availability: [
      { label: 'Period', value: '5–6 months from late March 2027 (until July/August 2027)' },
      { label: 'Scope', value: 'Mandatory full-time internship · 40 hrs/week' },
      { label: 'Field', value: 'Software & Web Engineering' },
      { label: 'Status', value: 'Valid German student visa & work permit (DAAD-KOSPIE)' },
      { label: 'Studies', value: 'No conflicting coursework' },
    ],
    ctaProjects: 'View projects',
    ctaCv: 'Resume (PDF)',
    cvHref: '/cv/Resume-Alain-Tolentino.pdf',
    cvFile: 'Resume-Alain-Tolentino.pdf',
  },
  projects: {
    eyebrow: '01 — Projects',
    title: 'Selected web & software projects',
    intro:
      'Ordered by relevance. Each card states the actual scope – client project, university project or work in progress.',
    stackLabel: 'Technologies',
    resultLabel: 'Result',
    items: [
      {
        id: 'tud',
        title: 'Interactive Web Data Visualization & System Modeling',
        period: 'since 10/2026',
        context: 'TU Dresden · Faculty of Computer Science',
        scope: 'University project · in progress',
        scopeTone: 'ongoing',
        summary: 'Practical coursework during the current winter semester 2026/2027 at TU Dresden.',
        bullets: [
          'Designing and implementing an interactive, data-driven web infographic as part of the 60-hour practical portfolio in the Web and Multimedia Engineering module.',
          'Modeling concurrent queue systems using Colored Petri Nets (CPN IDE) in Softwaretechnologie II.',
          'Completing practical exercises on syntactic program analysis in Compiler Construction.',
        ],
        stack: ['HTML5', 'CSS3', 'SVG', 'JavaScript', 'XML', 'CPN IDE'],
        links: [],
      },
      {
        id: 'shop',
        title: 'Full-Stack E-Commerce Web Application & Admin Dashboard',
        subtitle: 'Online videogame store',
        period: '11/2024 – 08/2025',
        context: 'UANL · Mexico',
        scope: 'University project',
        scopeTone: 'study',
        summary: 'Multi-tier web application with a responsive React frontend and a RESTful backend.',
        bullets: [
          'Product catalog with dynamic filtering.',
          'Cart and wishlist state management with the React Context API.',
          'Role-protected admin dashboard with full CRUD functionality.',
          'RESTful API in Node.js and Express.js with JWT authentication, connected to a relational MySQL schema for product and user management.',
        ],
        stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'JWT'],
        links: [{ kind: 'repo', label: 'Repository on GitHub', href: REPOS.shop }],
      },
      {
        id: 'ajschool',
        title: 'The AJ School – Language Institute Web Platform',
        subtitle: 'Case study',
        period: '04/2021 – 06/2026',
        context: 'The AJ School · Reynosa, Mexico',
        scope: 'Client project · in production',
        scopeTone: 'client',
        summary:
          'Independently designed, built and deployed the school’s responsive web portal – as the institute’s web developer, alongside my role as English instructor.',
        caseStudy: [
          {
            label: 'Role',
            text: 'Independent design, development and deployment – from planning to production.',
          },
          {
            label: 'Implementation',
            text: 'Responsive web portal built with Astro, Tailwind CSS and HTML5/CSS3; integration of Firebase (NoSQL) and Formspree for inquiry forms.',
          },
          {
            label: 'Result',
            text: 'Increased online course inquiries and projected enrollments by 15%.',
          },
        ],
        metric: { value: '+15%', label: 'online course inquiries & projected enrollments' },
        stack: ['Astro', 'Tailwind CSS', 'HTML5', 'CSS3', 'Firebase (NoSQL)', 'Formspree'],
        links: [{ kind: 'site', label: 'Live website', href: REPOS.ajschool }],
        note: 'Private repository (client project)',
      },
      {
        id: 'agile',
        title: 'Agile Web Learning Platforms & Quality Assurance',
        period: '10/2024 – 08/2025',
        context: 'UANL · Mexico',
        scope: 'University projects · Scrum team',
        scopeTone: 'study',
        summary: 'Frontend architecture, responsive UI/UX design and software testing in agile university projects.',
        subprojects: [
          {
            title: 'Interactive crossword web application',
            text: 'Educational browser game: frontend architecture and responsive UI/UX design built in agile sprints (Scrum).',
            links: [
              { kind: 'demo', label: 'Live demo', href: REPOS.crosswordDemo },
              { kind: 'repo', label: 'Repository', href: REPOS.crossword },
            ],
          },
          {
            title: 'Modular sustainability information platform',
            text: 'Frontend architecture and responsive UI/UX design for a modular web platform.',
          },
          {
            title: 'QA for a 3D virtual campus tour',
            text: 'Systematic functional, performance and hardware compatibility testing, including bug documentation, in a team project.',
          },
        ],
        stack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'UI/UX', 'Scrum', 'Software testing'],
        links: [],
      },
      {
        id: 'sisdon',
        title: 'SISDON – Sales & Inventory Management System',
        subtitle: 'Desktop application',
        period: '02/2024 – 08/2024',
        context: 'UANL · Mexico',
        scope: 'University project · 25th FIME Projects Colloquium',
        scopeTone: 'study',
        summary:
          'Database-backed desktop application for digital inventory, customer and order management for a local business.',
        bullets: [
          'Management of stock, customers and sales in a Windows Forms interface.',
          'Selected for presentation at FIME’s 25th Institutional Projects Colloquium (UANL).',
        ],
        stack: ['C#', '.NET', 'WinForms', 'SQL', 'MS Access'],
        links: [{ kind: 'repo', label: 'Repository on GitHub', href: REPOS.sisdon }],
      },
    ],
  },
  journey: {
    eyebrow: '02 — Background',
    title: 'Education & practical experience',
    intro: 'Four academic stages and four practical roles – in reverse chronological order.',
    filterLabel: 'Filter entries',
    filters: { all: 'All', edu: 'Education', work: 'Experience' },
    kindLabel: { edu: 'Education', work: 'Experience' },
    showDetails: 'Show details',
    hideDetails: 'Hide details',
    items: [
      {
        kind: 'edu',
        period: '10/2026 – exp. 09/2027',
        place: 'Dresden, Germany',
        title: 'Academic Exchange in Computer Science',
        org: 'Technische Universität Dresden, Faculty of Computer Science',
        details: [
          'DAAD-KOSPIE Full Scholarship Fellow: Combined Study and Practice Stays for Engineers (merit-based full scholarship awarded by the DAAD).',
          'Enrolled modules (WS 2026/2027): Web and Multimedia Engineering, Softwaretechnologie II (Advanced Software Engineering), Compiler Construction.',
        ],
      },
      {
        kind: 'work',
        period: '04/2021 – 06/2026',
        place: 'Reynosa, Mexico',
        title: 'Web Platform Developer & English Instructor (CEFR B2/C1)',
        org: 'The AJ School (Language Institute)',
        details: [
          'Web platform development: Independently designed, built and deployed the school’s responsive web portal using Astro, Tailwind CSS, HTML5/CSS3, Firebase (NoSQL) and Formspree, increasing online course inquiries and projected enrollments by 15%.',
          'Teaching: Planned and delivered structured B2 and C1 English courses for adult and teenage students.',
        ],
      },
      {
        kind: 'edu',
        period: '07/2026 – 09/2026',
        place: 'Leipzig, Germany',
        title: 'Intensive German Language Course (Certified Level B2 CEFR)',
        org: 'interDaF e. V. at the Herder-Institut of Universität Leipzig',
        details: [
          'Three-month full-time intensive language and academic preparation program for university studies in Germany (funded by the DAAD).',
        ],
      },
      {
        kind: 'work',
        period: '12/2025 – 05/2026',
        place: 'Monterrey, Mexico',
        title: 'IT & Systems Assistant (University Social Service)',
        org: 'General Coordination of Administration & Systems – FIME, UANL',
        details: [
          'Performed structured hardware/software troubleshooting across faculty workstations, maintained internal administrative databases and updated technical system documentation.',
        ],
      },
      {
        kind: 'edu',
        period: '08/2022 – exp. 12/2027',
        place: 'Monterrey, Mexico',
        title: 'B.Sc. Software Technology Engineering',
        org: 'Universidad Autónoma de Nuevo León (UANL), Facultad de Ingeniería Mecánica y Eléctrica (FIME)',
        details: [
          'Cumulative grade: 94.9 / 100 (equivalent to German grade 1.3 – “sehr gut” / very good; Mexican scale 0–100, passing grade 70).',
          'Academic standing: 9th semester (standard duration: 10 semesters).',
          'Core coursework: Web development (frontend & backend), relational & NoSQL databases, object-oriented programming, software architecture, operating systems and computer networks.',
        ],
      },
      {
        kind: 'work',
        period: '03/2022 – 06/2022',
        place: 'Reynosa, Mexico',
        title: 'Projects Administration Assistant (Intern)',
        org: 'Petróleos Mexicanos (PEMEX)',
        details: [
          'Recorded, validated and analyzed procedural records in a legal database using MS Excel and compiled standardized progress reports.',
        ],
      },
      {
        kind: 'edu',
        period: '08/2019 – 07/2022',
        place: 'Reynosa, Mexico',
        title: 'Technical High School Diploma & Bilingual Programming Technician',
        org: 'Instituto Internacional de Estudios Superiores (IIES)',
        details: [
          'Certified Bilingual Programming Technician with emphasis on software development foundations, OOP and relational databases.',
        ],
      },
      {
        kind: 'work',
        period: '07/2021 – 08/2021',
        place: 'Reynosa, Mexico',
        title: 'Project Engineering Assistant (Intern)',
        org: 'Secretaría de Agricultura y Desarrollo Rural (SAGARPA)',
        details: [
          'Reviewed technical project documentation, tracked approval workflows and updated cost estimates for regional infrastructure projects.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: '03 — Skills',
    title: 'Skills, languages & certifications',
    intro: 'A clear focus on web development, backed by solid foundations from university coursework and projects.',
    focus: {
      title: 'Core focus: Web development',
      note: 'Good proficiency',
      items: [
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'JavaScript (ES6+)',
        'React',
        'Astro',
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'SQL (MySQL)',
        'NoSQL (Firebase)',
        'Responsive UI/UX design',
      ],
    },
    groups: [
      {
        title: 'Foundational knowledge (coursework & projects)',
        items: ['TypeScript', 'C# (.NET)', 'Java', 'C', 'C++', 'Python (basics)', 'XML', 'MS Access', 'Petri Nets (CPN IDE)'],
      },
      {
        title: 'Tools & practices',
        items: ['Git', 'GitHub', 'Visual Studio Code', 'Linux (WSL2, VirtualBox)', 'OOP', 'Scrum', 'Software testing (QA)'],
      },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native', detail: '', value: 100 },
      { name: 'English', level: 'C1', detail: 'Full professional proficiency', value: 85 },
      { name: 'German', level: 'B2', detail: 'Good working proficiency, spoken and written', value: 68 },
    ],
    certsTitle: 'Certifications',
    certs: [
      {
        name: 'Meta Front-End Developer Professional Certificate',
        date: '08/2024',
        issuer: 'Coursera',
        detail: 'React, JavaScript, HTML5/CSS3, Git version control, UI/UX fundamentals',
      },
      {
        name: 'interDaF German Language Certificate – Level B2 CEFR',
        date: '09/2026',
        issuer: 'Herder-Institut of Universität Leipzig',
        detail: 'Three-month intensive course',
      },
      {
        name: 'Cambridge TKT – Module 2, Band 3',
        date: '10/2024',
        issuer: 'Cambridge University Press & Assessment',
        detail: 'Structured lesson planning & resource preparation',
      },
    ],
    awardsTitle: 'Honors & awards',
    awards: [
      'DAAD-KOSPIE Full Scholarship (2026/2027)',
      '1st place at the TigreHacks 2023 hackathon – Smart traffic control (team project)',
      'Presenter at FIME’s 25th Institutional Projects Colloquium (UANL)',
    ],
    workStyleTitle: 'Work style',
    workStyle: [
      {
        title: 'Structured execution & fast ramp-up',
        text: 'A 94.9 / 100 cumulative GPA (German grade 1.3) and quick adaptation to new web frameworks and computer science modules at TU Dresden.',
      },
      {
        title: 'Initiative & reliability',
        text: 'Independently built and deployed the production web portal for The AJ School and the SISDON management system.',
      },
      {
        title: 'Intercultural teamwork',
        text: 'Agile Scrum student projects, TigreHacks 2023 (1st place) and teaching B2/C1 English courses.',
      },
    ],
  },
  contact: {
    eyebrow: '04 — Contact',
    title: 'Open to a mandatory internship from late March 2027.',
    text: 'I would be glad to hear from you – and to discuss my background in a personal or virtual interview. I reply in English or German.',
    emailLabel: 'Email',
    copy: 'Copy',
    copied: 'Copied',
    profilesLabel: 'Profiles',
    cvLabel: 'Resume',
  },
  footer: {
    rights: 'Alain Josué Tolentino Ibarra',
    built: 'Built with Astro & Tailwind CSS',
    privacy: 'Privacy',
    top: 'Back to top',
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
