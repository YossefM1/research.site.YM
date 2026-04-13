let currentLang = localStorage.getItem("siteLang") || "en";

const content = {
  en: {
    dir: "ltr",
    researcherLabel: "Researcher Name",
    researcherName: "Yossef Melamed",
    badge: "Academic Research Homepage",
    mainTitle: "Research Topics",
    subtitle:
      "A professional homepage presenting core research directions in power systems, grid dynamics, and advanced inverter control.",
    profileLabel: "Researcher",
    university: "Tel Aviv University",
    topicsTitle: "Research Topics",
    topic1Title: "Grid Stability",
    topic1Text:
      "Research on dynamic behavior, robustness, and stability challenges in modern electric grids with increasing inverter-based resources.",
    topic2Title: "Real-Time Online Inertia Measurement",
    topic2Text:
      "Development of methods for estimating grid inertia online in real time, with emphasis on monitoring and system awareness.",
    topic3Title: "VSM Control with H-Infinity",
    topic3Text:
      "Advanced control design for Virtual Synchronous Machines using H-infinity methods for improved performance and resilience.",
    footer: "Research homepage draft · Yossef Melamed · Tel Aviv University",
    button: "עברית",
    navHome: "Home",
    navResults: "Results",
    navPublications: "Publications",
    navContact: "Contact",
    heroBtn1: "View Research Results",
    heroBtn2: "Publications",

    resultsBadge: "Research Topics Overview",
    resultsTitle: "Research Results",
    resultsSubtitle:
      "This page provides a central entry point to the main research topics, their explanations, results, literature background, scripts, models, and supporting materials.",
    resCard1Title: "Grid Stability",
    resCard1Text:
      "Enter the dedicated research page for grid stability, including idea, methodology, results, literature review, papers, scripts, models, and experiments.",
    resCard1Btn: "Open Research Page",
    resCard2Title: "Real-Time Online Inertia Measurement",
    resCard2Text:
      "Enter the dedicated research page for online inertia estimation, including explanation, methods, results, papers, scripts, and technical material.",
    resCard2Btn: "Open Research Page",
    resCard3Title: "VSM Control with H-Infinity",
    resCard3Text:
      "Enter the dedicated research page for VSM control with H-infinity, including controller design, analysis, results, models, and supporting files.",
    resCard3Btn: "Open Research Page",

    pubBadge: "Academic Work",
    pubTitle: "Publications",
    pubSubtitle:
      "Peer-reviewed publications from research in power systems and advanced grid control.",

    contactBadge: "Contact",
    contactTitle: "Contact",
    contactSubtitle:
      "For academic collaboration, research discussions, or project inquiries, please use the contact details below.",
    contactCardTitle: "Contact Information",
    contactRoleLabel: "Role:",
    contactRoleValue: "PhD Researcher",
    contactNameLabel: "Name:",
    contactUniLabel: "University:",
    contactNameValue: "Yossef Melamed",
    contactUniValue: "Tel Aviv University"
  },

  he: {
    dir: "rtl",
    researcherLabel: "שם החוקר",
    researcherName: "יוסף מלמד",
    badge: "דף מחקר אקדמי",
    mainTitle: "נושאי מחקר",
    subtitle:
      "דף בית מקצועי המציג את תחומי המחקר המרכזיים במערכות הספק, דינמיקת רשת ובקרת ממירים מתקדמת.",
    profileLabel: "החוקר",
    university: "אוניברסיטת תל אביב",
    topicsTitle: "נושאי מחקר",
    topic1Title: "יציבות הגריד",
    topic1Text:
      "מחקר על ההתנהגות הדינמית, החוסן ואתגרי היציבות ברשתות חשמל מודרניות עם שילוב הולך וגובר של ממירים.",
    topic2Title: "מדידת אינרציה בזמן אמת Online",
    topic2Text:
      "פיתוח שיטות לאמידת אינרציית הרשת בזמן אמת באופן מקוון, עם דגש על ניטור והבנת מצב המערכת.",
    topic3Title: "בקרת VSM עם H-Infinity",
    topic3Text:
      "תכנון בקרה מתקדם עבור מכונות סינכרוניות וירטואליות באמצעות שיטות H-infinity לשיפור ביצועים וחוסן.",
    footer: "טיוטת דף בית למחקר · יוסף מלמד · אוניברסיטת תל אביב",
    button: "English",
    navHome: "דף הבית",
    navResults: "תוצאות",
    navPublications: "פרסומים",
    navContact: "צור קשר",
    heroBtn1: "צפה בתוצאות המחקר",
    heroBtn2: "פרסומים",

    resultsBadge: "מפת תחומי המחקר",
    resultsTitle: "תוצאות מחקר",
    resultsSubtitle:
      "עמוד זה מהווה שער מרכזי לתחומי המחקר הראשיים, ההסברים שלהם, התוצאות, הרקע הספרותי, הסקריפטים, המודלים והחומרים התומכים.",
    resCard1Title: "יציבות הגריד",
    resCard1Text:
      "כניסה לעמוד המחקר הייעודי של יציבות הגריד, כולל רעיון, מתודולוגיה, תוצאות, סקירת ספרות, מאמרים, סקריפטים, מודלים וניסויים.",
    resCard1Btn: "פתח עמוד מחקר",
    resCard2Title: "מדידת אינרציה בזמן אמת Online",
    resCard2Text:
      "כניסה לעמוד המחקר הייעודי של אמידת אינרציה מקוונת, כולל הסבר, שיטות, תוצאות, מאמרים, סקריפטים וחומר טכני.",
    resCard2Btn: "פתח עמוד מחקר",
    resCard3Title: "בקרת VSM עם H-Infinity",
    resCard3Text:
      "כניסה לעמוד המחקר הייעודי של בקרת VSM עם H-infinity, כולל תכן בקרה, ניתוח, תוצאות, מודלים וקבצים תומכים.",
    resCard3Btn: "פתח עמוד מחקר",

    pubBadge: "עבודה אקדמית",
    pubTitle: "פרסומים",
    pubSubtitle:
      "פרסומים עמיתים ממחקר במערכות הספק ובקרת רשת מתקדמת.",

    contactBadge: "יצירת קשר",
    contactTitle: "צור קשר",
    contactSubtitle:
      "לשיתופי פעולה אקדמיים, דיונים מחקריים או פניות בנושא הפרויקט, ניתן להשתמש בפרטי הקשר הבאים.",
    contactCardTitle: "פרטי קשר",
    contactRoleLabel: "תפקיד:",
    contactRoleValue: "חוקר דוקטורט",
    contactNameLabel: "שם:",
    contactUniLabel: "אוניברסיטה:",
    contactNameValue: "יוסף מלמד",
    contactUniValue: "אוניברסיטת תל אביב"
  }
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function applyLanguage(lang) {
  const t = content[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;

  for (const key in t) {
    setText(key, t[key]);
  }

  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = t.button;
}

const langButton = document.getElementById("langToggle");
if (langButton) {
  langButton.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "he" : "en";
    localStorage.setItem("siteLang", currentLang);
    applyLanguage(currentLang);
  });
}

applyLanguage(currentLang);