const emailElement = document.getElementById("email");

emailElement.addEventListener("click", function () {
  const email = "chipcord@duck.com";
  navigator.clipboard.writeText(email).catch((err) => {
    console.error("Failed to copy: ", err);
  });

  // Add bounce animation
  emailElement.classList.add("bounce");

  // Remove the class after animation so it can trigger again
  emailElement.addEventListener("animationend", function handler() {
    emailElement.classList.remove("bounce");
    emailElement.removeEventListener("animationend", handler);
  });
});
