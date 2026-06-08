function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (!menu || !icon) return;
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const THEME_STORAGE_KEY = "portfolio-theme";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const rootElement = document.documentElement;

function setTheme(theme) {
  rootElement.setAttribute("data-theme", theme);
  const isLight = theme === LIGHT_THEME;

  themeToggleButtons.forEach((button) => {
    const icon = button.querySelector("i");
    const label = button.querySelector("span");

    if (icon) {
      icon.classList.toggle("fa-moon", !isLight);
      icon.classList.toggle("fa-sun", isLight);
    }

    if (label) {
      const translate = window.i18n?.t;
      label.textContent = translate
        ? translate(isLight ? "theme.dark" : "theme.light")
        : isLight
          ? "Modo Escuro"
          : "Modo Claro";
    }
  });
}

function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
  }
}

const prefersLightQuery = window.matchMedia("(prefers-color-scheme: light)");

function initTheme() {
  const savedTheme = getSavedTheme();
  setTheme(savedTheme || (prefersLightQuery.matches ? LIGHT_THEME : DARK_THEME));
}

themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentTheme = rootElement.getAttribute("data-theme") || DARK_THEME;
    const nextTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    setTheme(nextTheme);
    saveTheme(nextTheme);
  });
});

prefersLightQuery.addEventListener("change", (event) => {
  if (getSavedTheme()) return;
  setTheme(event.matches ? LIGHT_THEME : DARK_THEME);
});

document.addEventListener("languagechange", () => {
  const currentTheme = rootElement.getAttribute("data-theme") || DARK_THEME;
  setTheme(currentTheme);
});

document.addEventListener("DOMContentLoaded", initTheme);

sections.forEach((section) => {
  section.classList.add("reveal");
});

function initObservers() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );

  sections.forEach((section) => revealObserver.observe(section));

  let currentActiveId = "";
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const activeId = `#${entry.target.id}`;
        if (activeId === currentActiveId) return;
        currentActiveId = activeId;

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === activeId);
        });
      });
    },
    { threshold: 0.35, rootMargin: "-20% 0px -45% 0px" },
  );

  sections.forEach((section) => navObserver.observe(section));
}

if ("requestIdleCallback" in window) {
  requestIdleCallback(initObservers, { timeout: 800 });
} else {
  setTimeout(initObservers, 0);
}
