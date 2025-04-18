const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBranding = document.querySelector(".nav-branding");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  const isOpening = !navMenu.classList.contains("active");

  hamburger.classList.toggle("active");
  navBranding.classList.toggle("active");

  if (isOpening) {
    // Show menu immediately
    navMenu.classList.add("active");

    // Fade in links after slight delay
    setTimeout(() => {
      navLinks.forEach((link) => link.classList.add("active"));
    }, 200);
  } else {
    // Fade out links first
    navLinks.forEach((link) => link.classList.remove("active"));

    // Then hide menu after delay
    setTimeout(() => {
      navMenu.classList.remove("active");
    }, 300); // Should match nav-link transition duration
  }
});

// Optional: close menu when link clicked
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.forEach((link) => link.classList.remove("active"));
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBranding.classList.remove("active");
  }),
);
