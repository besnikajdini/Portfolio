(function () {
  const translations = {
    en: {
      'meta.title': 'Besnik Ajdini — Portfolio',
      'meta.description': 'Besnik Ajdini — Application Development, Web, C#. Portfolio & internship search.',

      'nav.about': 'About',
      'nav.projects': 'Projects',

      'hero.eyebrow': 'Aspiring Application Developer — IMS Aarau/Baden',
      'hero.ctaProjects': 'View Projects',

      'projects.title': 'Selected Work',
      'projects.p1.desc': 'An intelligent web app that generates recipes based on available ingredients, with filters for specific foods and the ability to save favorites.',
      'projects.p2.desc': 'Business website for Niku Blendz — my own barber business. Focus on a clean layout, good readability and a modern, responsive presentation.',
      'projects.p4.desc': 'An open-source stock-direction predictor built on real technical indicators, news sentiment and honest, walk-forward backtesting — no inflated accuracy claims.',
      'projects.p5.desc': "A realistic, luxury-styled trading simulator with live-feel order execution, margin & leverage, and portfolio analytics — trade like it's real, risk-free.",
      'projects.linkDemo': 'Live Demo',
      'projects.linkGithub': 'GitHub',

      'about.eyebrow': '( About )',
      'about.title': 'My Journey So Far',
      'about.block0.title': 'Me',
      'about.block0.text': "The things that represent me are the ones you can see in the photos. I really enjoy training because it keeps me healthy and gives me that push of discipline that everyone needs in life to keep moving forward. The sea represents vacations — when I'm on vacation I get to see my family again, I let go of all the stress I carry inside, and I only think about enjoying life. Even if it's just for a few weeks, I make the most of those moments. Those haircuts were done by me — I've been cutting hair for friends, but also for people I've gotten to know, for a while now. This has helped me open up: I used to be a shy person, but thanks to this new hobby I've learned to talk to people, to socialize and understand them better.",
      'about.block1.title': 'Why IMS',
      'about.block1.text': "Why IMS? Good question. It wasn't a precise choice, but a spontaneous one. I've learned that the best paths are the unexpected ones — spontaneity is the best way to discover yourself, and that's exactly what happened to me. Now I'm here, learning more and more every day, and ready to face the toughest challenges.",
      'about.block2.title': 'My Vision',
      'about.block2.text': "My goal is to create something that changes people's lives — something that makes life easier and helps those who need it most. That's why, thanks to this profession of mine, I'm able to turn my goals into reality.",
      'about.block3.title': 'The Explorer',
      'about.block3.text': "I call myself an explorer for a simple reason: I love taking the harder path. You can only improve yourself when you step out of your comfort zone and take a new path — obviously a difficult one — just like it happened to me. There are people who have been doing this for years, and that pushes me to work harder and keep improving to surpass everyone.",
      'about.block4.title': 'Quality & Precision',
      'about.block4.text': "I call myself a perfectionist. I only stop working on a project when I believe it's perfect. For me, quality is the most important thing about a job — I don't care how long it takes, what matters is that it turns out right, and until then I never stop.",
      'about.block5.title': '♥ Heart',
      'about.block5.text': "The thing that matters most to me — family. Family represents everything I have. They are the ones who have always supported me, and they are the reason I keep going and push myself further every day. They sacrificed for me, and now it's my turn.",

      'education.eyebrow': 'Background',
      'education.title': 'Education & Experience',
      'education.item1.date': '08.2024 — present',
      'education.item1.loc': 'Aarau, Switzerland',
      'education.item1.text': 'Currently in training. Combines computer science with a broad general education; graduates with a Federal VET Diploma in IT and a vocational baccalaureate. Technical focus (BBB Baden): application development (C#, web, databases), systems engineering and agile project methods.',
      'education.item2.loc': 'Oftringen, Switzerland',
      'education.item2.text': 'Completed secondary school (Bezirksschule) in preparation for further education at IMS Aarau.',
      'education.item3.loc': 'Aarau, Switzerland',
      'education.item3.text': 'Integration program to prepare for the Swiss school system and to deepen German language skills.',
      'education.item4.loc': 'Cingoli, Italy',
      'education.item4.text': 'Completed secondary school in Italy with a solid foundation in mathematics, sciences and languages.',
      'education.item5.loc': 'Cingoli, Italy',
      'education.item5.text': 'Primary education in Italy focused on reading, writing, mathematics and first foreign language lessons.',

      'skills.title': 'My Toolbox',

      'projectsList.title': 'All Projects at a Glance',
      'projectsList.lead': 'This section is deliberately kept compact — as more projects come along, the list here will grow automatically.',

      'footer.big': "Let's shape the future.",
      'footer.privacy': 'Privacy Policy',
      'footer.legal': 'Legal Notice',

      'nav.home': 'Home',
      'legal.back': '← Back to Home',

      'privacy.eyebrow': '( Legal )',
      'privacy.title': 'Privacy Policy',
      'privacy.updated': 'Last updated: August 2026',
      'privacy.intro': 'This portfolio is a personal, non-commercial student project. This page explains, in simple terms, what happens with your data when you visit it.',
      'privacy.s1.title': 'Responsible Party',
      'privacy.s1.text': 'Besnik Ajdini, Aargau, Switzerland. Contact: <a href="mailto:B.Ajdini.inf24@stud.bbbaden.ch">B.Ajdini.inf24@stud.bbbaden.ch</a>',
      'privacy.s2.title': 'Data Collected on This Site',
      'privacy.s2.text': 'This website is a static site with no backend and no database. It does not collect, store or process any personal data on a server. The old contact form has been removed — you can reach me directly by email or via the social links on the site, which simply open your own email client or the respective platform.',
      'privacy.s3.title': 'Local Storage',
      'privacy.s3.text': 'Your language choice (EN/DE) is saved locally in your browser (localStorage) so it is remembered on your next visit. This information stays on your device and is never transmitted to me or to any server.',
      'privacy.s4.title': 'External Services & Fonts',
      'privacy.s4.text': 'To display fonts and icons correctly, this page loads resources from external providers: Google Fonts (fonts.googleapis.com / fonts.gstatic.com), Font Awesome and GSAP (both via cdnjs.cloudflare.com). When loading these resources, your browser may transmit your IP address to these providers. No tracking or analytics scripts are used on this site.',
      'privacy.s5.title': 'Your Rights',
      'privacy.s5.text': 'If you have any questions about this privacy policy, feel free to contact me by email at any time.',

      'legal.eyebrow': '( Legal )',
      'legal.title': 'Legal Notice',
      'legal.updated': 'Last updated: August 2026',
      'legal.s1.title': 'Site Owner',
      'legal.s1.text': 'Besnik Ajdini, Aargau, Switzerland. This website is a private, non-commercial student portfolio created as part of my IT apprenticeship (IMS Aarau/Baden).',
      'legal.s2.title': 'Contact',
      'legal.s2.text': 'Email: <a href="mailto:B.Ajdini.inf24@stud.bbbaden.ch">B.Ajdini.inf24@stud.bbbaden.ch</a>',
      'legal.s3.title': 'Disclaimer',
      'legal.s3.text': 'I compile the content of this site with care, but cannot guarantee that it is accurate, complete or up to date at all times. This site links to external live demos and third-party platforms (GitHub, LinkedIn); I am not responsible for the content of those external sites.',
      'legal.s4.title': 'Copyright',
      'legal.s4.text': 'Unless otherwise noted, all texts, images and code on this site are my own work. Please do not reuse them without permission.',

      'error404.eyebrow': '( 404 )',
      'error404.title': "This page doesn't exist",
      'error404.text': "The page you're looking for may have been moved or removed. Let's get you back on track.",
      'error404.cta': 'Back to Home'
    },
    de: {
      'meta.title': 'Besnik Ajdini — Portfolio',
      'meta.description': 'Besnik Ajdini — Applikationsentwicklung, Web, C#. Portfolio & Praktikumssuche.',

      'nav.about': 'Über mich',
      'nav.projects': 'Projekte',

      'hero.eyebrow': 'Angehender Applikationsentwickler — IMS Aarau/Baden',
      'hero.ctaProjects': 'Projekte ansehen',

      'projects.title': 'Ausgewählte Arbeiten',
      'projects.p1.desc': 'Eine intelligente Web-App, die Rezepte auf Basis der verfügbaren Zutaten erstellt, mit Filterfunktionen für bestimmte Lebensmittel und der Möglichkeit, Favoriten zu speichern.',
      'projects.p2.desc': 'Business-Website für Niku Blendz — mein eigenes Barber-Business. Fokus auf cleanem Layout, guter Lesbarkeit und einer modernen, responsiven Präsentation.',
      'projects.p4.desc': 'Ein Open-Source-Tool zur Vorhersage der Kursrichtung von Aktien, basierend auf echten technischen Indikatoren, News-Sentiment und ehrlichem Walk-Forward-Backtesting — ohne überzogene Genauigkeitsversprechen.',
      'projects.p5.desc': 'Ein realistischer, edel gestalteter Trading-Simulator mit live-nahen Orderausführungen, Margin & Hebel sowie Portfolio-Analysen — handeln wie im echten Markt, ganz ohne Risiko.',
      'projects.linkDemo': 'Live Demo',
      'projects.linkGithub': 'GitHub',

      'about.eyebrow': '( Über mich )',
      'about.title': 'Mein bisheriger Weg',
      'about.block0.title': 'Ich',
      'about.block0.text': 'Die Dinge, die mich ausmachen, sind die, die man auf den Fotos sieht. Ich trainiere sehr gerne, weil es mich gesund hält und mir genau den Schub an Disziplin gibt, den jeder Mensch im Leben braucht, um weiterzukommen. Das Meer steht für die Ferien — wenn ich im Urlaub bin, sehe ich meine Familie wieder, lasse allen Stress los, den ich in mir trage, und denke nur daran, das Leben zu geniessen. Auch wenn es nur für ein paar Wochen ist, geniesse ich diese Momente in vollen Zügen. Diese Haarschnitte habe ich selbst gemacht — ich schneide schon seit einer Weile Freunden, aber auch Bekannten die Haare. Das hat mir geholfen, mich zu öffnen: Ich war ein schüchterner Mensch, aber dank dieses neuen Hobbys habe ich gelernt, mit Menschen zu sprechen, zu sozialisieren und sie besser zu verstehen.',
      'about.block1.title': 'Warum IMS',
      'about.block1.text': 'Warum IMS? Gute Frage. Es war keine durchdachte Entscheidung, sondern eine spontane. Ich habe gelernt, dass die besten Wege die unerwarteten sind — Spontaneität ist die beste Art, sich selbst zu entdecken, und genau das ist mir passiert. Jetzt bin ich hier, lerne jeden Tag mehr dazu und bin bereit, mich den schwierigsten Herausforderungen zu stellen.',
      'about.block2.title': 'Meine Vision',
      'about.block2.text': 'Mein Ziel ist es, etwas zu schaffen, das das Leben aller verändert — etwas, das das Leben leichter macht und denen hilft, die es am meisten brauchen. Deshalb bin ich dank dieses Berufs in der Lage, meine Ziele Wirklichkeit werden zu lassen.',
      'about.block3.title': 'Der Entdecker',
      'about.block3.text': 'Ich nenne mich einen Entdecker aus einem einfachen Grund: Ich liebe es, den schwierigeren Weg zu gehen. Man kann sich nur verbessern, wenn man die Komfortzone verlässt und einen neuen, natürlich schwierigen Weg einschlägt — genau das ist mir passiert. Es gibt Menschen, die das schon seit Jahren tun, und das treibt mich an, immer härter zu arbeiten und mich immer weiter zu verbessern, um alle zu übertreffen.',
      'about.block4.title': 'Qualität und Genauigkeit',
      'about.block4.text': 'Ich nenne mich einen Perfektionisten. Ich höre erst auf, an einem Projekt oder einer Arbeit zu arbeiten, wenn ich denke, dass sie perfekt ist. Für mich ist Qualität das Wichtigste an einer Arbeit — es ist mir egal, wie lange ich dafür brauche, wichtig ist nur, dass sie gut wird, und bis dahin höre ich nie auf.',
      'about.block5.title': '♥ Herz',
      'about.block5.text': 'Das Wichtigste für mich — die Familie. Für mich bedeutet Familie alles, was ich habe. Sie haben mich immer unterstützt, und sie sind der Grund, warum ich weitermache und mich jeden Tag mehr anstrenge. Sie haben sich für mich aufgeopfert, und jetzt bin ich an der Reihe.',

      'education.eyebrow': 'Werdegang',
      'education.title': 'Ausbildung & Erfahrung',
      'education.item1.date': '08.2024 — heute',
      'education.item1.loc': 'Aarau, Schweiz',
      'education.item1.text': 'Aktuell in Ausbildung. Verbindet Informatik mit einer breiten Allgemeinbildung; Abschluss mit EFZ Informatik und Berufsmaturität. Technischer Fokus (BBB Baden): Applikationsentwicklung (C#, Web, Datenbanken), Systemtechnik und agile Projektmethoden.',
      'education.item2.loc': 'Oftringen, Schweiz',
      'education.item2.text': 'Abschluss der Bezirksschule als Vorbereitung für die Weiterbildung an der IMS Aarau.',
      'education.item3.loc': 'Aarau, Schweiz',
      'education.item3.text': 'Integrationsprogramm zur Vorbereitung auf das Schweizer Schulsystem und zur Vertiefung der Deutschkenntnisse.',
      'education.item4.loc': 'Cingoli, Italien',
      'education.item4.text': 'Abschluss der Sekundarschule in Italien mit soliden Grundlagen in Mathematik, Wissenschaften und Sprachen.',
      'education.item5.loc': 'Cingoli, Italien',
      'education.item5.text': 'Grundschulausbildung in Italien mit Fokus auf Lesen, Schreiben, Mathematik und erstem Fremdsprachenunterricht.',

      'skills.title': 'Mein Werkzeugkasten',

      'projectsList.title': 'Alle Projekte im Überblick',
      'projectsList.lead': 'Diese Sektion ist bewusst kompakt gehalten — sobald mehr Projekte dazukommen, wächst die Liste hier automatisch mit.',

      'footer.big': 'Lass uns die Zukunft gestalten.',
      'footer.privacy': 'Datenschutz',
      'footer.legal': 'Impressum',

      'nav.home': 'Startseite',
      'legal.back': '← Zurück zur Startseite',

      'privacy.eyebrow': '( Rechtliches )',
      'privacy.title': 'Datenschutzerklärung',
      'privacy.updated': 'Stand: August 2026',
      'privacy.intro': 'Dieses Portfolio ist ein persönliches, nicht-kommerzielles Schulprojekt. Diese Seite erklärt in einfachen Worten, was mit deinen Daten beim Besuch dieser Website passiert.',
      'privacy.s1.title': 'Verantwortliche Person',
      'privacy.s1.text': 'Besnik Ajdini, Aargau, Schweiz. Kontakt: <a href="mailto:B.Ajdini.inf24@stud.bbbaden.ch">B.Ajdini.inf24@stud.bbbaden.ch</a>',
      'privacy.s2.title': 'Auf dieser Website erhobene Daten',
      'privacy.s2.text': 'Diese Website ist eine statische Seite ohne Backend und ohne Datenbank. Es werden keine personenbezogenen Daten auf einem Server gesammelt, gespeichert oder verarbeitet. Das frühere Kontaktformular wurde entfernt — du erreichst mich direkt per E-Mail oder über die Social-Links auf der Seite, welche lediglich dein eigenes E-Mail-Programm bzw. die jeweilige Plattform öffnen.',
      'privacy.s3.title': 'Lokaler Speicher',
      'privacy.s3.text': 'Deine Sprachwahl (EN/DE) wird lokal in deinem Browser gespeichert (localStorage), damit sie beim nächsten Besuch erhalten bleibt. Diese Information verbleibt auf deinem Gerät und wird niemals an mich oder einen Server übermittelt.',
      'privacy.s4.title': 'Externe Dienste & Schriften',
      'privacy.s4.text': 'Damit Schriften und Icons korrekt angezeigt werden, lädt diese Seite Ressourcen von externen Anbietern: Google Fonts (fonts.googleapis.com / fonts.gstatic.com), Font Awesome und GSAP (beide über cdnjs.cloudflare.com). Beim Laden dieser Ressourcen kann dein Browser deine IP-Adresse an diese Anbieter übermitteln. Auf dieser Seite werden keine Tracking- oder Analyse-Skripte eingesetzt.',
      'privacy.s5.title': 'Deine Rechte',
      'privacy.s5.text': 'Bei Fragen zu dieser Datenschutzerklärung kannst du mich jederzeit per E-Mail kontaktieren.',

      'legal.eyebrow': '( Rechtliches )',
      'legal.title': 'Impressum',
      'legal.updated': 'Stand: August 2026',
      'legal.s1.title': 'Seitenbetreiber',
      'legal.s1.text': 'Besnik Ajdini, Aargau, Schweiz. Diese Website ist ein privates, nicht-kommerzielles Schulportfolio, das im Rahmen meiner IT-Ausbildung (IMS Aarau/Baden) entstanden ist.',
      'legal.s2.title': 'Kontakt',
      'legal.s2.text': 'E-Mail: <a href="mailto:B.Ajdini.inf24@stud.bbbaden.ch">B.Ajdini.inf24@stud.bbbaden.ch</a>',
      'legal.s3.title': 'Haftungsausschluss',
      'legal.s3.text': 'Ich erstelle die Inhalte dieser Seite mit Sorgfalt, kann aber nicht garantieren, dass sie jederzeit korrekt, vollständig und aktuell sind. Diese Seite verlinkt auf externe Live-Demos und Drittplattformen (GitHub, LinkedIn); für die Inhalte dieser externen Seiten übernehme ich keine Verantwortung.',
      'legal.s4.title': 'Urheberrecht',
      'legal.s4.text': 'Sofern nicht anders angegeben, stammen alle Texte, Bilder und der Code auf dieser Seite von mir selbst. Bitte nicht ohne Erlaubnis weiterverwenden.',

      'error404.eyebrow': '( 404 )',
      'error404.title': 'Diese Seite gibt es nicht',
      'error404.text': 'Die gesuchte Seite wurde möglicherweise verschoben oder entfernt. Wir bringen dich zurück auf Kurs.',
      'error404.cta': 'Zur Startseite'
    }
  };

  const STORAGE_KEY = 'ba-portfolio-lang';
  const DEFAULT_LANG = 'en';

  function getInitialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = lang;

    const title = document.getElementById('pageTitle');
    if (title && dict['meta.title']) title.textContent = dict['meta.title'];

    const desc = document.getElementById('pageDescription');
    if (desc && dict['meta.description']) desc.setAttribute('content', dict['meta.description']);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyLang(getInitialLang());

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
    });
  });
})();
