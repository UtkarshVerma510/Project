const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const header = document.querySelector(".site-header");
const sections = document.querySelectorAll("main section[id]");

const updateNavigation = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
  const currentSection = [...sections].reverse().find((section) => window.scrollY >= section.offsetTop - 180);
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.toggle("active", currentSection && link.getAttribute("href") === `#${currentSection.id}`);
  });
};

window.addEventListener("scroll", updateNavigation, { passive: true });
updateNavigation();

const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const themeToggle = document.querySelector(".theme-toggle");
const rewardBanner = document.querySelector(".reward-banner");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});

document.querySelectorAll(".section").forEach((section) => section.classList.add("reveal"));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible"));
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

setTimeout(() => rewardBanner.remove(), 7000);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }
  formStatus.textContent = "Thanks! Your message is ready to send.";
  contactForm.reset();
});
