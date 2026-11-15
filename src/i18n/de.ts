import type { Dict } from './types';
import { REPOS } from './shared';

export const de: Dict = {
  meta: {
    title: 'Alain Tolentino – Software & Web Engineering · Pflichtpraktikum ab März 2027',
    description:
      'Portfolio von Alain Josué Tolentino Ibarra: DAAD-KOSPIE-Stipendiat an der TU Dresden, B.Sc. Software Technology Engineering (Note 1,3). Verfügbar für ein 5–6-monatiges Pflichtpraktikum ab Ende März 2027.',
    ogLocale: 'de_DE',
  },
  nav: {
    skip: 'Zum Inhalt springen',
    projects: 'Projekte',
    journey: 'Werdegang',
    skills: 'Kenntnisse',
    contact: 'Kontakt',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    lang: 'Sprache wählen',
    themeToLight: 'Zum hellen Design wechseln',
    themeToDark: 'Zum dunklen Design wechseln',
    home: 'Startseite',
  },
  hero: {
    status: 'Verfügbar für ein Pflichtpraktikum ab Ende März 2027',
    name: 'Alain Josué Tolentino Ibarra',
    role: 'DAAD-KOSPIE-Stipendiat · Informatik an der TU Dresden',
    degree: 'B.Sc. Software Technology Engineering (UANL) · Notendurchschnitt 94,9 / 100 ≙ Note 1,3',
    lead: 'Mein Schwerpunkt liegt in der modernen Web-Entwicklung – von responsiven Frontends mit React, Astro und Tailwind CSS bis zu RESTful APIs mit Node.js, Express.js und relationalen Datenbanken.',
    photoAlt: 'Porträtfoto von Alain Josué Tolentino Ibarra',
    facts: [
      { value: '1,3', label: 'Notendurchschnitt (94,9 / 100)' },
      { value: 'DAAD', label: 'KOSPIE-Vollstipendium 2026/27' },
      { value: 'B2 · C1', label: 'Deutsch · Englisch' },
      { value: '1. Platz', label: 'Hackathon TigreHacks 2023' },
    ],
    availabilityTitle: 'Praktikum · Eckdaten',
    availability: [
      { label: 'Zeitraum', value: '5–6 Monate ab Ende März 2027 (bis Juli/August 2027)' },
      { label: 'Umfang', value: 'Pflichtpraktikum in Vollzeit · 40 Std./Woche' },
      { label: 'Bereich', value: 'Software & Web Engineering' },
      { label: 'Status', value: 'Gültiges Studienvisum & Arbeitserlaubnis (DAAD-KOSPIE)' },
      { label: 'Studium', value: 'Keine parallelen Vorlesungsverpflichtungen' },
    ],
    ctaProjects: 'Projekte ansehen',
    ctaCv: 'Lebenslauf (PDF)',
    cvHref: '/cv/Lebenslauf-Alain-Tolentino.pdf',
    cvFile: 'Lebenslauf-Alain-Tolentino.pdf',
  },
  projects: {
    eyebrow: '01 — Projekte',
    title: 'Ausgewählte Web- und Softwareprojekte',
    intro:
      'Sortiert nach Relevanz. Jede Karte kennzeichnet den tatsächlichen Rahmen – Kundenprojekt, Studienprojekt oder laufende Arbeit.',
    stackLabel: 'Technologien',
    resultLabel: 'Ergebnis',
    items: [
      {
        id: 'tud',
        title: 'Interaktive Web-Datenvisualisierung & Systemmodellierung',
        period: 'seit 10/2026',
        context: 'TU Dresden · Fakultät Informatik',
        scope: 'Studienprojekt · laufend',
        scopeTone: 'ongoing',
        summary:
          'Praxisarbeiten im laufenden Wintersemester 2026/2027 an der TU Dresden.',
        bullets: [
          'Konzeption, UI/UX-Entwurf und Frontend-Implementierung einer interaktiven, datengestützten Web-Infografik im Rahmen des 60-Stunden-Praxisportfolios im Modul Web- und Multimedia-Engineering.',
          'Modellierung und Verhaltensanalyse nebenläufiger Systeme mit gefärbten Petri-Netzen (CPN IDE) in Softwaretechnologie II.',
          'Bearbeitung praktischer Übungsaufgaben zur syntaktischen Programmanalyse im Compilerbau.',
        ],
        stack: ['HTML5', 'CSS3', 'SVG', 'JavaScript', 'XML', 'CPN IDE'],
        links: [],
      },
      {
        id: 'shop',
        title: 'Full-Stack E-Commerce-Webanwendung & Admin-Dashboard',
        subtitle: 'Online Videogame Store',
        period: '11/2024 – 08/2025',
        context: 'UANL · Mexiko',
        scope: 'Studienprojekt',
        scopeTone: 'study',
        summary:
          'Mehrschichtige Webanwendung mit responsivem React-Frontend und RESTful-Backend.',
        bullets: [
          'Produktkatalog mit dynamischer Filterung.',
          'Warenkorb- und Wishlist-Verwaltung über die React Context API.',
          'Rollengeschütztes Admin-Dashboard mit vollständigen CRUD-Funktionen.',
          'RESTful API in Node.js und Express.js mit JWT-Authentifizierung, angebunden an ein relationales MySQL-Schema zur Produkt- und Nutzerverwaltung.',
        ],
        stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'JWT'],
        links: [{ kind: 'repo', label: 'Repository auf GitHub', href: REPOS.shop }],
      },
      {
        id: 'ajschool',
        title: 'The AJ School – Webplattform des Sprachinstituts',
        subtitle: 'Case Study',
        period: '04/2021 – 06/2026',
        context: 'The AJ School · Reynosa, Mexiko',
        scope: 'Kundenprojekt · produktiv',
        scopeTone: 'client',
        summary:
          'Eigenständige Konzeption, Entwicklung und Veröffentlichung des responsiven Schul-Webportals – als Web-Entwickler des Instituts, parallel zu meiner Tätigkeit als Englischdozent.',
        caseStudy: [
          {
            label: 'Rolle',
            text: 'Eigenständige Konzeption, Entwicklung und Bereitstellung – von der Planung bis zum produktiven Betrieb.',
          },
          {
            label: 'Umsetzung',
            text: 'Responsives Webportal mit Astro, Tailwind CSS und HTML5/CSS3; Anbindung von Firebase (NoSQL) und Formspree für Anfrageformulare.',
          },
          {
            label: 'Ergebnis',
            text: 'Steigerung der digitalen Kursanfragen und prognostizierten Einschreibungen um 15 %.',
          },
        ],
        metric: { value: '+15 %', label: 'digitale Kursanfragen & prognostizierte Einschreibungen' },
        stack: ['Astro', 'Tailwind CSS', 'HTML5', 'CSS3', 'Firebase (NoSQL)', 'Formspree'],
        links: [{ kind: 'site', label: 'Live-Website', href: REPOS.ajschool }],
        note: 'Repository privat (Kundenprojekt)',
      },
      {
        id: 'agile',
        title: 'Agile Web-Lernplattformen & Qualitätssicherung',
        period: '10/2024 – 08/2025',
        context: 'UANL · Mexiko',
        scope: 'Studienprojekte · Scrum-Team',
        scopeTone: 'study',
        summary:
          'Frontend-Architektur, responsives UI/UX-Design und Software-Testing in agilen Studienprojekten.',
        subprojects: [
          {
            title: 'Interaktive Crossword-Webanwendung',
            text: 'Lernspiel im Browser: Frontend-Architektur und responsives UI/UX-Design in agilen Sprints (Scrum).',
            links: [
              { kind: 'demo', label: 'Live-Demo', href: REPOS.crosswordDemo },
              { kind: 'repo', label: 'Repository', href: REPOS.crossword },
            ],
          },
          {
            title: 'Modulare Informationsplattform zum Thema Nachhaltigkeit',
            text: 'Frontend-Architektur und responsives UI/UX-Design einer modularen Web-Plattform.',
          },
          {
            title: 'QA für einen virtuellen 3D-Fakultätsrundgang',
            text: 'Systematische Funktions-, Performance- und Hardware-Kompatibilitätstests inklusive Fehlerdokumentation im Teamprojekt.',
          },
        ],
        stack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'UI/UX', 'Scrum', 'Software-Testing'],
        links: [],
      },
      {
        id: 'sisdon',
        title: 'SISDON – Verkaufs- und Bestandsverwaltung',
        subtitle: 'Desktop-Anwendung',
        period: '02/2024 – 08/2024',
        context: 'UANL · Mexiko',
        scope: 'Studienprojekt · 25. Projektkolloquium FIME',
        scopeTone: 'study',
        summary:
          'Datenbankgestützte Desktop-Anwendung zur digitalen Bestands-, Kunden- und Auftragsverwaltung für einen lokalen Betrieb.',
        bullets: [
          'Verwaltung von Lagerbestand, Kunden und Verkäufen in einer Windows-Forms-Oberfläche.',
          'Ausgewählt zur Präsentation beim 25. Projektkolloquium der Fakultät FIME (UANL).',
        ],
        stack: ['C#', '.NET', 'WinForms', 'SQL', 'MS Access'],
        links: [{ kind: 'repo', label: 'Repository auf GitHub', href: REPOS.sisdon }],
      },
    ],
  },
  journey: {
    eyebrow: '02 — Werdegang',
    title: 'Akademischer Werdegang & Praxiserfahrung',
    intro: 'Vier Stationen im Studium, vier in der Praxis – chronologisch, neueste zuerst.',
    filterLabel: 'Einträge filtern',
    filters: { all: 'Alle', edu: 'Ausbildung', work: 'Praxis' },
    kindLabel: { edu: 'Ausbildung', work: 'Praxis' },
    showDetails: 'Details anzeigen',
    hideDetails: 'Details ausblenden',
    items: [
      {
        kind: 'edu',
        period: '10/2026 – vorauss. 09/2027',
        place: 'Dresden, Deutschland',
        title: 'Austauschstudium Informatik',
        org: 'Technische Universität Dresden, Fakultät Informatik',
        details: [
          'DAAD-KOSPIE-Vollstipendiat: Kombinierte Studien- und Praxisaufenthalte für Ingenieure aus Entwicklungsländern (einjähriges Leistungsstipendium des DAAD).',
          'Belegte Fachmodule (WS 2026/2027): Web- und Multimedia-Engineering, Softwaretechnologie II, Compilerbau.',
        ],
      },
      {
        kind: 'work',
        period: '04/2021 – 06/2026',
        place: 'Reynosa, Mexiko',
        title: 'Web-Entwickler & Englischdozent (Niveau B2/C1 GER)',
        org: 'The AJ School (Sprachinstitut)',
        details: [
          'Webplattform-Entwicklung: Eigenständige Konzeption, Entwicklung und Bereitstellung des responsiven Schul-Webportals mit Astro, Tailwind CSS, HTML5/CSS3, Firebase (NoSQL) und Formspree; Steigerung der digitalen Kursanfragen und prognostizierten Einschreibungen um 15 %.',
          'Lehrtätigkeit: Strukturierte Planung und Durchführung von Englischkursen auf den Niveaustufen B2 und C1 für Jugendliche und Erwachsene.',
        ],
      },
      {
        kind: 'edu',
        period: '07/2026 – 09/2026',
        place: 'Leipzig, Deutschland',
        title: 'Intensivsprachkurs Deutsch (Abschlusszertifikat B2 GER)',
        org: 'interDaF e. V. am Herder-Institut der Universität Leipzig',
        details: [
          'Dreimonatiger Vollzeit-Intensivkurs zur sprachlichen und fachkulturellen Vorbereitung auf das Fachstudium in Deutschland (gefördert durch den DAAD).',
        ],
      },
      {
        kind: 'work',
        period: '12/2025 – 05/2026',
        place: 'Monterrey, Mexiko',
        title: 'Studentischer IT- und Systemassistent',
        org: 'Coordinación General de Administración y Sistemas – FIME, UANL',
        details: [
          'Akademischer Sozialdienst: Systematische Fehlerdiagnosen (Troubleshooting) an Arbeitsplatzsystemen und Netzwerken, Pflege interner Verwaltungsdatenbanken sowie Aktualisierung technischer Systemdokumentationen.',
        ],
      },
      {
        kind: 'edu',
        period: '08/2022 – vorauss. 12/2027',
        place: 'Monterrey, Mexiko',
        title: 'B.Sc. Software Technology Engineering',
        org: 'Universidad Autónoma de Nuevo León (UANL), Facultad de Ingeniería Mecánica y Eléctrica (FIME)',
        details: [
          'Aktueller Notendurchschnitt: 94,9 / 100 Punkte (entspricht der deutschen Note 1,3 – „sehr gut“; mexikanische Skala 0–100, Bestehensgrenze 70).',
          'Studienstand: 9. Fachsemester (Regelstudienzeit: 10 Semester).',
          'Schwerpunkte: Web-Entwicklung (Frontend & Backend), relationale & NoSQL-Datenbanken, objektorientierte Programmierung, Softwarearchitektur, Betriebssysteme und Computernetzwerke.',
        ],
      },
      {
        kind: 'work',
        period: '03/2022 – 06/2022',
        place: 'Reynosa, Mexiko',
        title: 'Praktikant in der Projektadministration',
        org: 'Petróleos Mexicanos (PEMEX)',
        details: [
          'Strukturierte Erfassung, Bereinigung und Auswertung von Verfahrensdaten in einer juristischen Datenbank mittels MS Excel sowie Erstellung standardisierter Fortschrittsberichte.',
        ],
      },
      {
        kind: 'edu',
        period: '08/2019 – 07/2022',
        place: 'Reynosa, Mexiko',
        title: 'Bachillerato Tecnológico & Zweisprachiger Programmiertechniker',
        org: 'Instituto Internacional de Estudios Superiores (IIES)',
        details: [
          'Hochschulzugangsberechtigung und berufsfachlicher Abschluss als Bilingual Programming Technician mit Schwerpunkt auf Grundlagen der Softwareentwicklung, OOP und relationalen Datenbanken.',
        ],
      },
      {
        kind: 'work',
        period: '07/2021 – 08/2021',
        place: 'Reynosa, Mexiko',
        title: 'Studentische Hilfskraft im Projektingenieurwesen',
        org: 'Secretaría de Agricultura y Desarrollo Rural (SAGARPA)',
        details: [
          'Überprüfung technischer Projektunterlagen, Nachverfolgung von Genehmigungsverfahren und Aktualisierung von Kostenkalkulationen für regionale Infrastrukturprojekte.',
        ],
      },
    ],
  },
  skills: {
    eyebrow: '03 — Kenntnisse',
    title: 'Kenntnisse, Sprachen & Zertifikate',
    intro: 'Klarer Schwerpunkt auf Web-Entwicklung, ergänzt durch solide Grundlagen aus Studium und Projekten.',
    focus: {
      title: 'Schwerpunkt: Web-Entwicklung',
      note: 'Gute Kenntnisse',
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
        'Responsive UI/UX-Design',
      ],
    },
    groups: [
      {
        title: 'Grundkenntnisse (Studium & Projekte)',
        items: ['TypeScript', 'C# (.NET)', 'Java', 'C', 'C++', 'Python (Grundlagen)', 'XML', 'MS Access', 'Petri-Netze (CPN IDE)'],
      },
      {
        title: 'Werkzeuge & Methoden',
        items: ['Git', 'GitHub', 'Visual Studio Code', 'Linux (WSL2, VirtualBox)', 'OOP', 'Scrum', 'Software-Testing (QA)'],
      },
    ],
    languagesTitle: 'Sprachen',
    languages: [
      { name: 'Spanisch', level: 'Muttersprache', detail: '', value: 100 },
      { name: 'Englisch', level: 'C1', detail: 'Verhandlungssicher in Wort und Schrift', value: 85 },
      { name: 'Deutsch', level: 'B2', detail: 'Gute Kenntnisse in Wort und Schrift', value: 68 },
    ],
    certsTitle: 'Zertifikate',
    certs: [
      {
        name: 'Meta Front-End Developer Professional Certificate',
        date: '08/2024',
        issuer: 'Coursera',
        detail: 'React, JavaScript, HTML5/CSS3, Git, UI/UX-Grundlagen',
      },
      {
        name: 'interDaF-Sprachzertifikat Deutsch – Niveau B2 GER',
        date: '09/2026',
        issuer: 'Herder-Institut der Universität Leipzig',
        detail: 'Dreimonatiger Intensivkurs',
      },
      {
        name: 'Cambridge TKT – Module 2, Band 3',
        date: '10/2024',
        issuer: 'Cambridge University Press & Assessment',
        detail: 'Strukturierte Planung und Aufbereitung von Lerninhalten',
      },
    ],
    awardsTitle: 'Auszeichnungen',
    awards: [
      'DAAD-KOSPIE-Vollstipendium (2026/2027)',
      '1. Platz beim Hackathon TigreHacks 2023 – Intelligente Ampelsteuerung (Teamprojekt)',
      'Aussteller beim 25. Institutionellen Projektkolloquium der FIME (UANL)',
    ],
    workStyleTitle: 'Arbeitsweise',
    workStyle: [
      {
        title: 'Strukturiert & lernbereit',
        text: 'Studiendurchschnitt von 94,9 / 100 (Note 1,3) und schnelle Einarbeitung in neue Web-Frameworks und Fachmodule an der TU Dresden.',
      },
      {
        title: 'Eigeninitiative & Zuverlässigkeit',
        text: 'Eigenständige Umsetzung und Veröffentlichung des produktiven Webportals für The AJ School sowie des Systems SISDON.',
      },
      {
        title: 'Teamfähig & interkulturell',
        text: 'Agile Studienprojekte (Scrum), Hackathon TigreHacks 2023 (1. Platz) und Lehrtätigkeit als Englischdozent (B2/C1).',
      },
    ],
  },
  contact: {
    eyebrow: '04 — Kontakt',
    title: 'Offen für ein Pflichtpraktikum ab Ende März 2027.',
    text: 'Über eine Nachricht oder die Einladung zu einem persönlichen oder virtuellen Vorstellungsgespräch freue ich mich sehr. Ich antworte auf Deutsch oder Englisch.',
    emailLabel: 'E-Mail',
    copy: 'Kopieren',
    copied: 'Kopiert',
    profilesLabel: 'Profile',
    cvLabel: 'Lebenslauf',
  },
  footer: {
    rights: 'Alain Josué Tolentino Ibarra',
    built: 'Entwickelt mit Astro & Tailwind CSS',
    privacy: 'Datenschutz',
    top: 'Nach oben',
  },
  privacy: {
    title: 'Datenschutzerklärung',
    updated: 'Stand: November 2026',
    back: 'Zurück zur Startseite',
    sections: [
      {
        heading: '1. Verantwortlicher',
        paragraphs: [
          'Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist: Alain Josué Tolentino Ibarra, E-Mail: alain.tolentino@outlook.com.',
          'Diese Website ist ein privates, nicht-kommerzielles Bewerbungsportfolio.',
        ],
      },
      {
        heading: '2. Hosting und Server-Logfiles',
        paragraphs: [
          'Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf der Seiten verarbeitet der Hosting-Anbieter technisch notwendige Daten in sogenannten Server-Logfiles: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL sowie Browser- und Betriebssysteminformationen.',
          'Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt in der sicheren und stabilen Auslieferung der Website. Eine Zusammenführung mit anderen Datenquellen findet nicht statt.',
          'Für Übermittlungen in Drittländer stützt sich Vercel auf die in der DSGVO vorgesehenen Garantien. Weitere Informationen: https://vercel.com/legal/privacy-policy',
        ],
      },
      {
        heading: '3. Keine Cookies, kein Tracking, keine externen Schriftarten',
        paragraphs: [
          'Diese Website setzt keine Cookies, verwendet keine Analyse- oder Tracking-Werkzeuge und bindet keine Inhalte von Drittanbietern ein. Alle Schriftarten werden lokal vom eigenen Server ausgeliefert; es findet keine Verbindung zu Google Fonts oder anderen CDNs statt.',
          'Ihre Auswahl für das helle oder dunkle Design wird ausschließlich im lokalen Speicher (localStorage) Ihres Browsers abgelegt und nicht übertragen. Diese Speicherung ist für die von Ihnen ausdrücklich gewünschte Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG) und kann jederzeit über die Browsereinstellungen gelöscht werden.',
        ],
      },
      {
        heading: '4. Kontakt per E-Mail',
        paragraphs: [
          'Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse, Name und Inhalt der Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage verwendet (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Die Daten werden gelöscht, sobald sie für diesen Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
        ],
      },
      {
        heading: '5. Externe Links',
        paragraphs: [
          'Diese Website enthält Links zu externen Angeboten (z. B. GitHub, LinkedIn, Netlify). Daten werden erst übertragen, wenn Sie einen solchen Link anklicken. Für die dortige Datenverarbeitung sind die jeweiligen Anbieter verantwortlich.',
        ],
      },
      {
        heading: '6. Ihre Rechte',
        paragraphs: [
          'Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Wenden Sie sich dazu formlos an die oben genannte E-Mail-Adresse.',
          'Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).',
        ],
      },
    ],
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Die angeforderte Seite existiert nicht oder wurde verschoben.',
    back: 'Zur Startseite',
  },
};
