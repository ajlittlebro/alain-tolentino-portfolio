import type { Dict } from './types';
import { CV, REPOS } from './shared';

export const de: Dict = {
  meta: {
    title: 'Alain Tolentino – Software & Web Engineering · Pflichtpraktikum ab März 2027',
    description:
      'Portfolio von Alain Josué Tolentino Ibarra: DAAD-KOSPIE-Stipendiat an der TU Dresden, B.Sc. Software Technology Engineering (Note 1,3). Verfügbar für ein 5–6-monatiges Pflichtpraktikum ab Ende März 2027.',
    ogLocale: 'de_DE',
    ogAlt: 'Alain Josué Tolentino Ibarra – DAAD-KOSPIE Scholar @ TU Dresden | Web & Software Engineering',
  },
  sections: { projects: 'projekte', about: 'ueber-mich', journey: 'werdegang', stack: 'stack', contact: 'kontakt' },
  nav: {
    skip: 'Zum Inhalt springen',
    labels: { projects: 'Projekte', about: 'Werkbank', journey: 'Werdegang', stack: 'Stack', contact: 'Kontakt' },
    brandSub: 'TU Dresden · DAAD-KOSPIE',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    lang: 'Sprache wählen',
    themeToLight: 'Zum hellen Design wechseln',
    themeToDark: 'Zum dunklen Design wechseln',
    home: 'Startseite',
    primary: 'Hauptnavigation',
  },
  hero: {
    eyebrow: 'Dresden, Deutschland · Informatik (TU Dresden) & Software Technology Engineering (B.Sc.)',
    name: 'Alain Josué Tolentino Ibarra',
    lead:
      'Student der Software Technology Engineering an der UANL (Notendurchschnitt 94,9 / 100 – deutsche Note 1,3) und DAAD-KOSPIE-Stipendiat an der Fakultät Informatik der TU Dresden. Ich entwickle moderne Webanwendungen und übersetze fachliche Anforderungen in klare, responsive Oberflächen (React, Astro, JavaScript ES6+, Tailwind CSS, HTML5/CSS3, SVG), angebunden an strukturierte Backend-Dienste (Node.js, Express.js, REST-APIs, MySQL, Firebase).',
    ctaProjects: 'Ausgewählte Projekte ansehen',
    cvDe: 'Lebenslauf (DE · PDF)',
    cvEn: 'CV / Resume (EN · PDF)',
    photoAlt: 'Porträtfoto von Alain Josué Tolentino Ibarra',
    photoCaption: 'Abb. 00 — Porträt',
    telemetryTitle: 'Kennzahlen · verifiziert',
    metrics: [
      { value: '1,3', label: 'Deutscher Notenschnitt', sub: '94,9 / 100 Punkte an der UANL · 9. Fachsemester' },
      { value: 'DE B2 · EN C1 · ES', label: 'Sprachkompetenz', sub: 'Deutsch B2 (interDaF Leipzig, zertifiziert) · Englisch C1 · Spanisch Muttersprache' },
      { value: '+15 %', label: 'Produktiv-Impact', sub: 'Mehr digitale Kursanfragen durch das Webportal für The AJ School' },
    ],
  },
  copyEmail: { copy: 'E-Mail kopieren', copied: 'Kopiert!', srCopied: 'E-Mail-Adresse kopiert!' },
  projects: {
    eyebrow: '01 // Ausgewählte Projekte',
    title: 'Drei Fallstudien, vier Live-Demos.',
    intro:
      'Nach Relevanz sortiert. Jede Fallstudie trennt Kontext, Architektur und Ergebnis; die Diagramme sind vereinfachte Architekturschemata des tatsächlichen Codes.',
    tier1: 'Ebene 1 · Fallstudien',
    tier2: 'Ebene 2 · Live-Demos & Engineering-Archiv',
    labels: {
      role: 'Kontext & Rolle',
      architecture: 'Architektur & technische Entscheidungen',
      outcome: 'Herausforderung & Ergebnis',
      stack: 'Technologien',
      artifact: 'Artefakt · Architekturschema',
    },
    cases: [
      {
        id: 'shop',
        index: 'Case 01',
        title: 'Full-Stack E-Commerce-Webanwendung & Admin-CRUD-Dashboard',
        period: '11/2024 – 08/2025',
        place: 'UANL, Mexiko',
        badge: 'Studienprojekt',
        badgeTone: 'study',
        role: 'Konzeption und Umsetzung einer mehrschichtigen Webanwendung für einen Online-Videospielshop, die das öffentliche Storefront klar von einem geschützten Admin-CRUD-Dashboard trennt.',
        architecture:
          'React-18-Frontend mit 13 unabhängigen State-Providern (Context API, u. a. für Authentifizierung, Warenkorb, Wishlist und Katalog), kombinierter Mehrfachfilterung (Preis min./max., Plattform, Genre, Suche) sowie Admin-Tabellen mit @tanstack/react-table v8 (Spaltensortierung, globaler Filter, Paginierung) und react-hook-form. RESTful Backend in Node.js/Express.js über einen Connection-Pool an MySQL, JWT-Authentifizierung in HTTP-Cookies, Passwort-Hashing mit bcryptjs, serverseitige Schemavalidierung mit Zod und Bildspeicherung in Cloudinary.',
        outcome:
          'Datenintegrität vor der Persistenz in 15 relationalen MySQL-Tabellen: Zod-Validierung in der API-Schicht kombiniert mit 18 SQL-Triggern (BEFORE INSERT), die Eingaben automatisch per TRIM bereinigen. Warenkorb und Wishlist werden pro Nutzer in der Datenbank gespeichert.',
        stack: ['React 18', 'Vite', 'Tailwind CSS', 'TanStack Table v8', 'React Hook Form', 'Node.js', 'Express.js', 'MySQL', 'REST API', 'JWT', 'bcryptjs', 'Zod', 'Cloudinary'],
        links: [{ kind: 'repo', label: 'Repository auf GitHub', href: REPOS.shop }],
        specsTitle: 'Technische Details aus dem Code',
        specs: [
          'client/src/context/: 13 Provider (AuthContext, CarritoContext, WishlistContext, ProductosContext …)',
          'Tablas.jsx: getSortedRowModel · getFilteredRowModel · getPaginationRowModel · globalFilter',
          'server/middlewares/validateToken.js: authRequired schützt private Routen; Rolle (id_rol) im JWT-Payload',
          'server/sql/BDD.sql: 15 Tabellen, 18 Trigger „BEFORE INSERT … TRIM()“',
          'Secrets über Umgebungsvariablen (.env.example), nicht im Repository',
        ],
        diagram: 'shop',
        diagramTitle: 'Architektur: React-Client, Express-REST-API, MySQL und Cloudinary',
        diagramDesc:
          'Drei Schichten: React-18-Client mit Storefront, Mehrfachfilter und Admin-CRUD (TanStack Table, 13 Contexts); Express-REST-API mit JWT-Cookie-Auth, Zod-Validierung und bcryptjs; Persistenz in MySQL (15 Tabellen, 18 Trigger) und Medien in Cloudinary.',
      },
      {
        id: 'ajschool',
        index: 'Case 02',
        title: 'The AJ School — Kommerzielles Schul-Webportal in Produktion',
        period: '04/2021 – 06/2026 · Web-Release 2026',
        place: 'Reynosa, Mexiko',
        badge: 'Kundenprojekt · produktiv',
        badgeTone: 'client',
        role: 'Eigenständige Gesamtentwicklung (Sole Developer): Konzeption, UI/UX-Design, Entwicklung und Produktivbetrieb des kommerziellen Webportals des Sprachinstituts – parallel zu meiner Tätigkeit als Englischdozent (B2/C1).',
        architecture:
          'Weiterentwicklung von einer früheren WordPress-Version zu einer statisch generierten, sofort ladenden Astro-Architektur mit Tailwind CSS; mobile-first optimierte Informationshierarchie für Kurse und Niveaustufen, Persistenz über Firebase (NoSQL) und Formularerfassung über Formspree.',
        outcome:
          'Weniger Reibung bei der Abfrage von Kurszeiten und Niveaustufen am Smartphone: Steigerung der digitalen Kursanfragen und prognostizierten Einschreibungen um 15 %.',
        metric: { value: '+15 %', label: 'Kursanfragen & prognostizierte Einschreibungen' },
        stack: ['Astro', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript', 'Firebase (NoSQL)', 'Formspree', 'Mobile-First UI/UX'],
        links: [{ kind: 'site', label: 'Live-Website', href: REPOS.ajschool }],
        note: 'Repository privat – produktives Portal eines realen Instituts',
        specsTitle: 'Technische Details (öffentlich sichtbar)',
        specs: [
          'Seitenstruktur: Start · Über uns · Kurse · Kontakt · Datenschutz',
          'Astro mit View Transitions (ClientRouter) und gebündelten /_astro-Assets',
          'Slider-, Galerie- und Eventbilder aus Firebase Storage',
          'Anfrageformulare über Formspree – kein eigener Server nötig',
        ],
        diagram: 'ajschool',
        diagramTitle: 'Architektur und Conversion-Fluss des Webportals The AJ School',
        diagramDesc:
          'Astro Static Generation mit Tailwind CSS (mobile-first) führt zu Kursniveau-Routing und Lead-Erfassung, angebunden an Formspree und Firebase (NoSQL); Ergebnis: plus 15 Prozent digitale Kursanfragen und prognostizierte Einschreibungen.',
      },
      {
        id: 'tud',
        index: 'Case 03',
        title: 'Interaktive Web-Datenvisualisierung & Systemmodellierung',
        period: 'seit 10/2026',
        place: 'Technische Universität Dresden',
        badge: 'Studienprojekt · laufend',
        badgeTone: 'ongoing',
        role: 'Praktische Ingenieursarbeit in meinen drei Fachmodulen des Wintersemesters 2026/2027 als DAAD-KOSPIE-Stipendiat an der Fakultät Informatik der TU Dresden.',
        architecture:
          '(1) UI/UX-Entwurf und Frontend-Implementierung einer interaktiven, datengestützten Web-Infografik im 60-Stunden-Praxisportfolio von Web- und Multimedia-Engineering (INF-25-Ba-PMI-WME); (2) formale Modellierung und Analyse von Verhaltenseigenschaften nebenläufiger Warteschlangensysteme mit gefärbten Petri-Netzen (CPN IDE) in Softwaretechnologie II; (3) praktische Übungen zur lexikalischen und syntaktischen Analyse (NFA/DFA, LL-/LR-Parser, AST) im Compilerbau.',
        outcome:
          'Strukturierte Datensätze (XML/JSON) und formale Nebenläufigkeitsmodelle in klare, zugängliche und direkt im Browser bedienbare Darstellungen übersetzen – mit nativen Webstandards (HTML5, CSS3, SVG, JavaScript).',
        stack: ['HTML5', 'CSS3', 'SVG', 'JavaScript (ES6+)', 'XML', 'Colored Petri Nets (CPN IDE)', 'Compilerbau (AST / Parser)'],
        links: [],
        specsTitle: 'Module im Wintersemester 2026/2027',
        specs: [
          'Web- und Multimedia-Engineering – 60-h-Praxisportfolio: interaktive Web-Infografik',
          'Softwaretechnologie II – Colored Petri Nets: Stellen, Transitionen, Marken, Verhaltensanalyse',
          'Compilerbau – Scanner/Parser: NFA → DFA, LL/LR, abstrakte Syntaxbäume',
        ],
        diagram: 'tud',
        diagramTitle: 'Doppelpanel: interaktive SVG-Datenvisualisierung und gefärbtes Petri-Netz',
        diagramDesc:
          'Links ein interaktives SVG-Balkendiagramm aus XML-Daten (WME, 60 Stunden); rechts ein gefärbtes Petri-Netz mit den Stellen P1 und P2, den Transitionen T1 und T2, gerichteten Kanten und Marken (Softwaretechnologie II).',
      },
    ],
    privacyNote:
      'Sicherheits- & Datenschutzhinweis (DSGVO): Die öffentlichen Demos und Repositories wurden im November 2026 geprüft – Zugangsdaten in Umgebungsvariablen ausgelagert, personenbezogene Daten Dritter entfernt und eine anonymisierte Showcase-Demo veröffentlicht.',
    archive: [
      {
        id: 'event',
        index: 'A-01',
        title: 'Event-Landingpage & eigene Packery.js-Masonry-Engine',
        period: '2026',
        place: 'Privates Projekt · Demo mit fiktiven Daten',
        summary:
          'Von Grund auf entworfene Event-Landingpage mit eigenem JavaScript-Algorithmus (equalizeColumnHeights) auf Packery.js und imagesLoaded, der die Unterkante einer Masonry-Galerie in 4, 3 und 2 Spalten dynamisch angleicht, ohne AVIF-Fotos abzuschneiden.',
        facts: ['Lightbox mit Tastatursteuerung', 'Live-Countdown', 'Google-Calendar-Eventgenerator', 'RSVP-Dialog mit Gästezähler', 'GPU-beschleunigter Hintergrund (translateZ(0))'],
        stack: ['HTML5', 'CSS3', 'Vanilla JS', 'Packery.js', 'imagesLoaded', 'AVIF'],
        links: [
          { kind: 'demo', label: 'Live-Demo', href: REPOS.eventDemo },
          { kind: 'repo', label: 'GitHub', href: REPOS.event },
        ],
        shot: 'event',
        shotAlt: 'Screenshot der anonymisierten Event-Landingpage mit Countdown',
      },
      {
        id: 'boardgame',
        index: 'A-02',
        title: 'Agile Lern-Brettspiel-Webanwendung & Software-Qualitätssicherung',
        period: '10/2024 – 08/2025',
        place: 'UANL, Mexiko · Scrum-Team',
        summary:
          'Frontend-Architektur und responsives UI/UX-Design einer interaktiven Lern-Brettspiel-Webanwendung in agilen Sprints (Scrum). Im Teamprojekt eines virtuellen 3D-Fakultätsrundgangs war meine Rolle Software-QA: Funktions-, Performance- und Hardware-Kompatibilitätstests inklusive Fehlerdokumentation.',
        facts: ['Würfel, Spielfiguren und Quizfragen', 'Spielbrett per Canvas 2D', 'Soundeffekte über die Web Audio API', 'Spielstand in localStorage'],
        stack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive UI/UX', 'Scrum', 'Software-Testing (QA)'],
        links: [
          { kind: 'demo', label: 'Live-Demo', href: REPOS.boardGameDemo },
          { kind: 'repo', label: 'GitHub', href: REPOS.boardGame },
        ],
        shot: 'boardgame',
        shotAlt: 'Screenshot des Lern-Brettspiels Pensamiento Fimeño',
      },
      {
        id: 'sisdon',
        index: 'A-03',
        title: 'SISDON — Datenbankgestütztes Verkaufs-, Bestands- und POS-System',
        period: '02/2024 – 08/2024',
        place: 'UANL, Mexiko',
        summary:
          'Desktop-System für die digitale Verwaltung von Bestand, Kunden, Mitarbeitenden und Kasse (POS) eines lokalen Betriebs. Ausgewählt zur Präsentation beim 25. Institutionellen Projektkolloquium der Fakultät FIME.',
        facts: [
          'CRUD über OleDb auf MS Access',
          'Echtzeit-Eingabevalidierung mit Lambda-Delegaten und regulären Ausdrücken (Regex)',
          'POS-Modul mit stufenweiser Zustandssteuerung der Formularbereiche',
          'Automatische Bestandsabbuchung und Druck von Rechnungen/Bons (PrintDocument)',
        ],
        stack: ['C# (.NET Framework 4.7.2)', 'Windows Forms', 'ADO.NET (OleDb)', 'SQL / MS Access', 'PrintDocument'],
        links: [{ kind: 'repo', label: 'GitHub', href: REPOS.sisdon }],
      },
      {
        id: 'sustainability',
        index: 'A-04',
        title: 'Modulare Nachhaltigkeits-Webplattform & 1. Platz Hackathon „TigreHacks 2023“',
        period: '10/2023 · 03/2024',
        place: 'Monterrey, Mexiko',
        summary:
          'Mehrseitige Lernplattform zu nachhaltiger Entwicklung mit 8 Kapiteln, dynamischen Dropdown-Menüs und durchgängiger Navigation. Dazu der 1. Platz beim Hackathon TigreHacks 2023 für die gemeinsame Ausarbeitung von Systemkonzept, Steuerungslogik und Präsentation eines Prototyps zur dynamischen Ampelphasen-Optimierung.',
        facts: ['10/2023: TigreHacks 2023 – 1. Platz (Teamprojekt)', '03/2024: Plattform mit 8 Kapiteln in 2 Einheiten'],
        stack: ['HTML5', 'Tailwind CSS', 'JavaScript (DOM)', 'Systemkonzeption & Prototyping'],
        links: [
          { kind: 'demo', label: 'Live-Demo', href: REPOS.sustainabilityDemo },
          { kind: 'repo', label: 'GitHub', href: REPOS.sustainability },
        ],
        shot: 'sustainability',
        shotAlt: 'Screenshot der Lernplattform Ambiente y Sustentabilidad',
      },
    ],
  },
  about: {
    eyebrow: '02 // Über mich & Digitale Werkbank',
    title: 'Vom leeren Editor zum letzten Pixel.',
    story: {
      label: 'Warum ich programmiere',
      paragraphs: [
        'Mich reizt der Moment, in dem eine leere Datei zu etwas wird, das ein echtes Problem löst. Ich zerlege Anforderungen gern in kleine, überprüfbare Schritte und achte dabei auf beides: eine saubere Datenstruktur und eine Oberfläche, die bis zum letzten Pixel stimmt.',
        'Die Grundlagen dafür habe ich in Mexiko gelegt – als zweisprachiger Programmiertechniker am IIES und heute im 9. Fachsemester Software Technology Engineering an der UANL (94,9 / 100, entspricht 1,3). Seit 2026 setze ich das als DAAD-KOSPIE-Stipendiat an der TU Dresden fort.',
      ],
    },
    bench: {
      label: 'Aktuell auf der Werkbank',
      term: 'TU Dresden · WS 26/27',
      modules: [
        { code: 'WME', name: 'Web- und Multimedia-Engineering', focus: 'Interaktive Web-Infografik · 60-h-Praxisportfolio' },
        { code: 'SWT II', name: 'Softwaretechnologie II', focus: 'Gefärbte Petri-Netze (CPN IDE) · nebenläufige Systeme' },
        { code: 'CB', name: 'Compilerbau', focus: 'Lexikalische & syntaktische Analyse · Parser · AST' },
      ],
    },
    comms: {
      label: 'Engineering + klare Kommunikation',
      paragraphs: [
        'Als Englischdozent auf B2/C1-Niveau (Cambridge TKT Module 2, Band 3) habe ich gelernt, Inhalte strukturiert zu planen und verständlich zu erklären. Der Intensivkurs Deutsch B2 bei interDaF (Universität Leipzig) ergänzt das.',
        'Das hilft mir beim Dokumentieren von Code, in Scrum-Sprints und in internationalen Teams – auf Englisch und Deutsch.',
      ],
      interestsLabel: 'Jenseits des Terminals',
      interests: ['Web-Design & moderne Frontend-Technologien', 'Sprachenlernen & Kulturaustausch', 'Analytische Strategiespiele'],
    },
  },
  journey: {
    eyebrow: '03 // Akademischer & beruflicher Werdegang',
    title: 'Werdegang in der Reihenfolge des Lebenslaufs.',
    intro: 'Vier akademische Stationen und vier praktische Erfahrungen – Zeile für Zeile wie im Lebenslauf.',
    eduTitle: 'Akademischer Werdegang & Stipendien',
    workTitle: 'Berufspraktische Erfahrungen',
    education: [
      {
        period: '10/2026 – vorauss. 09/2027',
        place: 'Dresden, Deutschland',
        title: 'Austauschstudium im Studiengang Informatik (Computer Science)',
        org: 'Technische Universität Dresden, Fakultät Informatik',
        details: [
          'DAAD-KOSPIE-Vollstipendiat: Kombinierte Studien- und Praxisaufenthalte für Ingenieure aus Entwicklungsländern (einjähriges Leistungsstipendium des DAAD).',
          'Belegte Fachmodule (WS 2026/2027): Web- und Multimedia-Engineering, Softwaretechnologie II, Compilerbau.',
        ],
      },
      {
        period: '08/2022 – vorauss. 12/2027',
        place: 'Monterrey, Mexiko',
        title: 'Bachelor of Science in Software Technology Engineering',
        org: 'Universidad Autónoma de Nuevo León (UANL), FIME',
        details: [
          'Notendurchschnitt: 94,9 / 100 Punkte (deutsche Note 1,3 – „sehr gut“).',
          '9. Fachsemester (Regelstudienzeit: 10 Semester).',
        ],
      },
      {
        period: '07/2026 – 09/2026',
        place: 'Leipzig, Deutschland',
        title: 'Intensivsprachkurs Deutsch (Abschlusszertifikat Niveau B2 GER)',
        org: 'interDaF e. V. am Herder-Institut der Universität Leipzig',
        details: ['Dreimonatiger Vollzeit-Intensivkurs zur Vorbereitung auf das Fachstudium in Deutschland (gefördert durch den DAAD).'],
      },
      {
        period: '08/2019 – 07/2022',
        place: 'Reynosa, Mexiko',
        title: 'Bachillerato Tecnológico & Zweisprachiger Programmiertechniker',
        org: 'Instituto Internacional de Estudios Superiores (IIES)',
        details: ['Certified Bilingual Programming Technician: Softwareentwicklung, OOP, relationale Datenbanken.'],
      },
    ],
    experience: [
      {
        period: '04/2021 – 06/2026',
        place: 'Reynosa, Mexiko',
        title: 'Web-Entwickler & Englischdozent (Niveau B2/C1 GER)',
        org: 'The AJ School (Sprachinstitut)',
        details: [
          'Eigenständige Konzeption, Entwicklung und Bereitstellung des responsiven Schul-Webportals mit Astro, Tailwind CSS, HTML5/CSS3, Firebase (NoSQL) und Formspree; +15 % digitale Kursanfragen und prognostizierte Einschreibungen.',
          'Strukturierte Planung und Durchführung von Englischkursen auf B2- und C1-Niveau.',
        ],
      },
      {
        period: '12/2025 – 05/2026',
        place: 'Monterrey, Mexiko',
        title: 'Studentischer IT- und Systemassistent (Akademischer Sozialdienst)',
        org: 'Coordinación General de Administración y Sistemas – Fakultät FIME, UANL',
        details: ['Systematische Fehlerdiagnosen an Arbeitsplatzsystemen und Netzwerken, Pflege interner Verwaltungsdatenbanken und technischer Dokumentation.'],
      },
      {
        period: '03/2022 – 06/2022',
        place: 'Reynosa, Mexiko',
        title: 'Praktikant in der Projektadministration (Projects Administration Assistant)',
        org: 'Petróleos Mexicanos (PEMEX)',
        details: ['Erfassung, Bereinigung und Auswertung von Verfahrensdaten in einer juristischen Datenbank (MS Excel) sowie standardisierte Fortschrittsberichte.'],
      },
      {
        period: '07/2021 – 08/2021',
        place: 'Reynosa, Mexiko',
        title: 'Studentische Hilfskraft im Projektingenieurwesen (Project Engineering Assistant)',
        org: 'Secretaría de Agricultura y Desarrollo Rural (SAGARPA)',
        details: ['Prüfung technischer Projektunterlagen, Nachverfolgung von Genehmigungen und Aktualisierung von Kostenkalkulationen.'],
      },
    ],
  },
  stack: {
    eyebrow: '04 // Technologie-Stack & Zertifikate',
    title: 'Technologie-Stack mit Kontext.',
    intro: 'Gruppiert nach tatsächlicher Nutzung in Projekten und Studium.',
    blocks: [
      {
        title: 'Schwerpunkt & gute Kenntnisse',
        note: 'Moderne Web-Entwicklung',
        items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React', 'Astro', 'Node.js', 'Express.js', 'RESTful APIs', 'SQL (MySQL)', 'NoSQL (Firebase)', 'Responsive UI/UX-Design', 'SVG'],
      },
      {
        title: 'Grundkenntnisse',
        note: 'Studium & akademische Projekte',
        items: ['TypeScript', 'C# (.NET)', 'Java', 'C', 'C++', 'Python (Grundlagen)', 'XML', 'MS Access', 'Petri-Netze (CPN IDE)'],
      },
      {
        title: 'Werkzeuge & Methoden',
        note: 'Arbeitsweise',
        items: ['Git', 'GitHub', 'Visual Studio Code', 'Linux-Grundlagen (WSL2, VirtualBox)', 'OOP', 'Scrum', 'Qualitätssicherung (Software-Testing)'],
      },
    ],
    pillarsTitle: 'Arbeitsweise · belegt',
    pillars: [
      { title: 'Strukturierte Arbeitsweise & Lernbereitschaft', text: 'Notendurchschnitt 94,9 / 100 (Note 1,3) und schnelle Einarbeitung in neue Frameworks und Fachmodule an der TU Dresden.' },
      { title: 'Eigeninitiative & Zuverlässigkeit', text: 'Eigenständige Umsetzung und Veröffentlichung des produktiven Webportals für The AJ School sowie des Systems SISDON.' },
      { title: 'Interkulturelle Team- & Kommunikationsfähigkeit', text: 'Agile Studienprojekte (Scrum), TigreHacks 2023 (1. Platz) und Lehrtätigkeit als Englischdozent (B2/C1).' },
    ],
    languagesTitle: 'Sprachen',
    languages: [
      { name: 'Spanisch', level: 'Muttersprache', detail: '' },
      { name: 'Englisch', level: 'C1', detail: 'Verhandlungssicher in Wort und Schrift' },
      { name: 'Deutsch', level: 'B2', detail: 'Gute Kenntnisse in Wort und Schrift' },
    ],
    certsTitle: 'Zertifikate',
    certs: [
      { name: 'Meta Front-End Developer Professional Certificate', date: '08/2024', issuer: 'Coursera – React, JavaScript, HTML5/CSS3, Git, UI/UX' },
      { name: 'interDaF-Sprachzertifikat Deutsch – Niveau B2 GER', date: '09/2026', issuer: 'Herder-Institut der Universität Leipzig' },
      { name: 'Cambridge TKT – Module 2, Band 3', date: '10/2024', issuer: 'Cambridge University Press & Assessment' },
    ],
    awardsTitle: 'Auszeichnungen',
    awards: [
      'DAAD-KOSPIE-Vollstipendium (2026/2027)',
      '1. Platz beim Hackathon TigreHacks 2023',
      'Aussteller beim 25. Institutionellen Projektkolloquium der FIME (UANL)',
    ],
  },
  contact: {
    eyebrow: '05 // Lebenslauf & Kontakt',
    title: 'Offen für ein Pflichtpraktikum ab Ende März 2027.',
    text: 'Über eine Nachricht oder die Einladung zu einem persönlichen oder virtuellen Vorstellungsgespräch freue ich mich sehr. Ich antworte auf Deutsch oder Englisch.',
    emailLabel: 'E-Mail',
    send: 'E-Mail senden',
    cvTitle: 'Lebenslauf herunterladen',
    cvNote: 'Öffentliche, DSGVO-optimierte Fassungen: ohne Anschrift, Telefonnummer und Geburtsdatum.',
    cvCards: [
      { lang: 'Deutsch · PDF', title: 'Lebenslauf', href: CV.de.href, file: CV.de.file, open: 'Öffnen', download: 'Herunterladen' },
      { lang: 'English · PDF', title: 'CV / Resume', href: CV.en.href, file: CV.en.file, open: 'Öffnen', download: 'Herunterladen' },
    ],
    profilesLabel: 'Profile',
  },
  footer: {
    rights: 'Alain Josué Tolentino Ibarra',
    built: 'Astro · Tailwind CSS · ohne Cookies & Tracking',
    privacy: 'Datenschutz',
    top: 'Nach oben',
    tagline: 'Code & Curiosity',
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
