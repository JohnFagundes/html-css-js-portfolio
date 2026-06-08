const LANG_STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG = "pt";

const translations = {
  pt: {
    "meta.title": "Meu Portfolio",
    "nav.about": "Sobre",
    "nav.experience": "Experiencia",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.contacts": "Contatos",
    "theme.label": "Tema",
    "theme.light": "Modo Claro",
    "theme.dark": "Modo Escuro",
    "lang.label": "EN",
    "lang.aria": "Mudar para inglês",
    "theme.aria": "Alternar tema",
    "brand.name": "João Victor",
    "brand.fullName": "João Victor Fagundes",
    "profile.greeting": "Olar, me chamo",
    "profile.role": "Desenvolvedor Full Stack",
    "profile.downloadCV": "Download CV",
    "profile.cvPath": "./assets/CV joão victor.pdf",
    "profile.contactInfo": "Contact Info",
    "profile.linkedin": "Meu perfil no LinkedIn",
    "profile.github": "Meu perfil no GitHub",
    "profile.imgAlt": "Foto de perfil de João Victor",
    "about.subtitle": "Saiba mais",
    "about.title": "Sobre mim",
    "about.experience": "Experiencia",
    "about.experienceDesc": "3 anos <br />Desenvolvedor FullStack",
    "about.education": "Escolaridade",
    "about.edu1": "Bacharel em Sistema de Informação",
    "about.edu2": "Intensivo em Desenvolvimento de Software (1187h)",
    "about.p1":
      "<strong>Desenvolvedor Full Stack</strong> com expertise em <strong>React.js, TypeScript, Vite e Node.js</strong>, atualmente responsável pelo desenvolvimento e manutenção da <strong>CifraAds</strong>, uma plataforma de gestão de afiliados e campanhas digitais. Possuo experiência na criação de dashboards analíticos, sistemas financeiros e painéis administrativos escaláveis, com foco em desempenho, arquitetura de software, qualidade de código e experiência do usuário. Tenho sólida atuação no desenvolvimento e integração de APIs REST, além de conhecimentos em AWS, Supabase, Git e tecnologias modernas de front-end, entregando soluções confiáveis que unem excelência técnica e objetivos de negócio.",
    "about.arrow": "Ir para experiência",
    "experience.subtitle": "Explore Minha",
    "experience.title": "Experiencia",
    "experience.frontend": "Front-end",
    "experience.backend": "Backend",
    "experience.skilled": "Experiente",
    "experience.database": "Banco de Dados",
    "experience.arrow": "Ir para projetos",
    "projects.subtitle": "Teste Meus Recentes",
    "projects.title": "Projetos",
    "projects.paymentManager": "Gestor De Cobranças",
    "projects.realEstate": "Site de Imobiliaria",
    "projects.cubosFlix": "Cubos Flix",
    "projects.arrow": "Ir para contato",
    "contact.subtitle": "Entre em contato",
    "contact.title": "Me Contate",
    "footer.copyright": "Copyright © 2023 João Victor. Todos os direitos reservados.",
  },
  en: {
    "meta.title": "My Portfolio",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.contacts": "Contact",
    "theme.label": "Theme",
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",
    "lang.label": "PT",
    "lang.aria": "Switch to Portuguese",
    "theme.aria": "Toggle theme",
    "brand.name": "John Victor",
    "brand.fullName": "John Victor Fagundes",
    "profile.greeting": "Hello, I'm",
    "profile.role": "Full Stack Developer",
    "profile.downloadCV": "Download CV",
    "profile.cvPath": "./assets/CV John Victor EN.pdf",
    "profile.contactInfo": "Contact Info",
    "profile.linkedin": "My LinkedIn profile",
    "profile.github": "My GitHub profile",
    "profile.imgAlt": "John Victor profile picture",
    "about.subtitle": "Get to know",
    "about.title": "About Me",
    "about.experience": "Experience",
    "about.experienceDesc": "3 years <br />Full Stack Developer",
    "about.education": "Education",
    "about.edu1": "Bachelor's in Information Systems",
    "about.edu2": "Intensive Software Development Program (1187h)",
    "about.p1":
      "<strong>Full Stack Developer</strong> with expertise in <strong>React.js, TypeScript, Vite, and Node.js</strong>, currently developing and maintaining <strong>CifraAds</strong>, an affiliate and digital campaign management platform. Experienced in building scalable dashboards, financial systems, and administrative applications, with a strong focus on performance, clean architecture, and user experience. Skilled in REST API development and integration, AWS, Supabase, Git, and modern front-end technologies, delivering reliable solutions that align technical excellence with business goals.",
    "about.arrow": "Go to experience",
    "experience.subtitle": "Explore My",
    "experience.title": "Experience",
    "experience.frontend": "Front-end",
    "experience.backend": "Backend",
    "experience.skilled": "Experienced",
    "experience.database": "Databases",
    "experience.arrow": "Go to projects",
    "projects.subtitle": "Browse My Recent",
    "projects.title": "Projects",
    "projects.paymentManager": "Payment Collection Manager",
    "projects.realEstate": "Real Estate Website",
    "projects.cubosFlix": "Cubos Flix",
    "projects.arrow": "Go to contact",
    "contact.subtitle": "Get in touch",
    "contact.title": "Contact Me",
    "footer.copyright": "Copyright © 2023 John Victor. All Rights Reserved.",
  },
};

let currentLang = DEFAULT_LANG;

function getSavedLang() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY);
  } catch {
    return null;
  }
}

function getBrowserLang() {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || "pt-BR"];

  for (const language of languages) {
    const code = language.toLowerCase();
    if (code.startsWith("pt")) return "pt";
    if (code.startsWith("en")) return "en";
  }

  return DEFAULT_LANG;
}

function saveLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
  }
}

function t(key) {
  return translations[currentLang]?.[key] ?? translations[DEFAULT_LANG]?.[key] ?? key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });

  document.title = t("meta.title");
  document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";
  document.documentElement.setAttribute("data-lang", currentLang);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  applyTranslations();
  saveLang(lang);
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function initLanguage() {
  const savedLang = getSavedLang();
  currentLang =
    savedLang && translations[savedLang] ? savedLang : getBrowserLang();
  applyTranslations();
}

window.i18n = { t, setLanguage, getCurrentLang: () => currentLang, initLanguage };

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = currentLang === "pt" ? "en" : "pt";
      setLanguage(nextLang);
    });
  });

  const cvDownloadBtn = document.getElementById("cv-download-btn");
  if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener("click", () => {
      window.open(t("profile.cvPath"));
    });
  }
});
