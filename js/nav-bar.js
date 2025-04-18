fetch("/html/header.html")
  .then((res) => res.text())
  .then((data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const header = doc.querySelector("header");
    document.body.insertBefore(header, document.body.firstChild);

    // ✅ Now that header is in DOM, init nav
    initNavBar();
  });

function initNavBar() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navBranding = document.querySelector(".nav-branding");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu || !navBranding) {
    console.warn("Nav elements not found. Skipping navbar logic.");
    return;
  }

  hamburger.addEventListener("click", () => {
    const isOpening = !navMenu.classList.contains("active");

    hamburger.classList.toggle("active");
    navBranding.classList.toggle("active");

    if (isOpening) {
      navMenu.classList.add("active");

      setTimeout(() => {
        navLinks.forEach((link) => link.classList.add("active"));
      }, 200);
    } else {
      navLinks.forEach((link) => link.classList.remove("active"));

      setTimeout(() => {
        navMenu.classList.remove("active");
      }, 300);
    }
  });

  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      navLinks.forEach((link) => link.classList.remove("active"));
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      navBranding.classList.remove("active");
    }),
  );
}
