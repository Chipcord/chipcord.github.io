const images = document.querySelectorAll(".grid-image.base");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 200); // Delay in milliseconds
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

images.forEach((image) => {
  observer.observe(image);
});
