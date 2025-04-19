fetch("/html/header.html")
  .then((res) => res.text())
  .then((data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const header = doc.querySelector("header");
    document.body.insertBefore(header, document.body.firstChild);

    // ✅ Initialize features after header is in the DOM
    initNavBar();
    initDarkMode();
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
    }),
  );
}

function initDarkMode() {
  let darkmode = localStorage.getItem("darkmode");
  const themeSwitch = document.getElementById("theme-switch");

  const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
  };

  const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
  };

  if (darkmode === "active") enableDarkmode();

  if (themeSwitch) {
    themeSwitch.addEventListener("click", () => {
      darkmode = localStorage.getItem("darkmode");
      darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    });
  } else {
    console.warn("Theme switch button not found.");
  }
}
