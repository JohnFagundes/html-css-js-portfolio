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
      "<strong>Desenvolvedor Full Stack</strong> com forte atuação em <strong>front-end</strong>, utilizando <strong>React.js</strong>, <strong>TypeScript</strong> e <strong>Vite</strong>. Atualmente, sou responsável pelo desenvolvimento da plataforma CifraAds, um sistema de gestão de afiliados e campanhas digitais.",
    "about.p2":
      "Tenho experiência na construção de dashboards analíticos, sistemas financeiros e painéis administrativos, com foco em performance, organização de código e experiência do usuário. Também possuo domínio em <strong>Zustand</strong>, <strong>React Hook Form</strong>, <strong>Zod</strong>, <strong>Tailwind CSS</strong>, integração com <strong>APIs REST</strong> e visualização de dados com <strong>Recharts</strong>.",
    "about.p3":
      "Atuei como desenvolvedor <strong>back-end</strong> freelancer, sendo responsável pelo desenvolvimento completo de APIs com <strong>Node.js</strong>, incluindo modelagem de banco, deploy e uso de <strong>AWS</strong> e <strong>Supabase</strong>, além de integração com <strong>front-end</strong> e contato direto com clientes.",
    "about.p4":
      "Atualmente, também colaboro com o <strong>backend</strong>, organização de tarefas e gestão de versionamento com <strong>Git</strong>, atuando de forma autônoma em ambiente de produção.",
    "about.p5":
      "Tenho perfil proativo, boa comunicação e experiência trabalhando diretamente com demandas reais de negócio.",
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
    "profile.greeting": "Hello, I'm",
    "profile.role": "Full Stack Developer",
    "profile.downloadCV": "Download CV",
    "profile.cvPath": "./assets/CV John Victor EN.pdf",
    "profile.contactInfo": "Contact Info",
    "profile.linkedin": "My LinkedIn profile",
    "profile.github": "My GitHub profile",
    "profile.imgAlt": "João Victor profile picture",
    "about.subtitle": "Get to know",
    "about.title": "About Me",
    "about.experience": "Experience",
    "about.experienceDesc": "3 years <br />Full Stack Developer",
    "about.education": "Education",
    "about.edu1": "Bachelor's in Information Systems",
    "about.edu2": "Intensive Software Development Program (1187h)",
    "about.p1":
      "<strong>Full Stack Developer</strong> with a strong focus on <strong>front-end</strong>, using <strong>React.js</strong>, <strong>TypeScript</strong>, and <strong>Vite</strong>. I am currently responsible for developing the CifraAds platform, an affiliate and digital campaign management system.",
    "about.p2":
      "I have experience building analytical dashboards, financial systems, and administrative panels, with a focus on performance, code organization, and user experience. I am also proficient in <strong>Zustand</strong>, <strong>React Hook Form</strong>, <strong>Zod</strong>, <strong>Tailwind CSS</strong>, <strong>REST API</strong> integration, and data visualization with <strong>Recharts</strong>.",
    "about.p3":
      "I worked as a freelance <strong>back-end</strong> developer, being responsible for the full development of APIs with <strong>Node.js</strong>, including database modeling, deployment, and use of <strong>AWS</strong> and <strong>Supabase</strong>, as well as <strong>front-end</strong> integration and direct client contact.",
    "about.p4":
      "I currently also collaborate on <strong>backend</strong> development, task organization, and version control management with <strong>Git</strong>, working autonomously in a production environment.",
    "about.p5":
      "I have a proactive profile, strong communication skills, and experience working directly with real business demands.",
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
    "footer.copyright": "Copyright © 2023 João Victor. All Rights Reserved.",
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
  if (savedLang && translations[savedLang]) {
    currentLang = savedLang;
  }
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
