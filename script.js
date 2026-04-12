let currentLang = "en";

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
    button: "עברית"
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
    button: "English"
  }
};

function applyLanguage(lang) {
  const t = content[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;

  document.getElementById("researcherLabel").textContent = t.researcherLabel;
  document.getElementById("researcherName").textContent = t.researcherName;
  document.getElementById("badge").textContent = t.badge;
  document.getElementById("mainTitle").textContent = t.mainTitle;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("profileLabel").textContent = t.profileLabel;
  document.getElementById("profileName").textContent = t.researcherName;
  document.getElementById("university").textContent = t.university;
  document.getElementById("topicsTitle").textContent = t.topicsTitle;
  document.getElementById("topic1Title").textContent = t.topic1Title;
  document.getElementById("topic1Text").textContent = t.topic1Text;
  document.getElementById("topic2Title").textContent = t.topic2Title;
  document.getElementById("topic2Text").textContent = t.topic2Text;
  document.getElementById("topic3Title").textContent = t.topic3Title;
  document.getElementById("topic3Text").textContent = t.topic3Text;
  document.getElementById("footer").textContent = t.footer;
  document.getElementById("langToggle").textContent = t.button;
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "he" : "en";
  applyLanguage(currentLang);
});

applyLanguage(currentLang);