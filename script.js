function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const THEME_STORAGE_KEY = "portfolio-theme";
const themeToggleButtons = document.querySelectorAll("[data-theme-toggle]");

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  const isLight = theme === "light";

  themeToggleButtons.forEach((button) => {
    const icon = button.querySelector("i");
    const label = button.querySelector("span");

    if (icon) {
      icon.classList.toggle("fa-moon", !isLight);
      icon.classList.toggle("fa-sun", isLight);
    }

    if (label) {
      label.textContent = isLight ? "Modo Escuro" : "Modo Claro";
    }
  });
}

const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
setTheme(savedTheme || (prefersLight ? "light" : "dark"));

themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

sections.forEach((section) => {
  section.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
);

sections.forEach((section) => revealObserver.observe(section));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const activeId = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === activeId);
      });
    });
  },
  { threshold: 0.35, rootMargin: "-20% 0px -45% 0px" },
);

sections.forEach((section) => navObserver.observe(section));
