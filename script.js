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

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Thanks! Your message is ready to send.";
  contactForm.reset();
});
