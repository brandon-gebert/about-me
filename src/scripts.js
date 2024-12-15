document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".overflow-x-scroll");
  carousels.forEach((carousel) => {
    const scrollUpButton = carousel
      .closest("section")
      .querySelector(".scroll-up-button");
    const scrollDownButton = carousel
      .closest("section")
      .querySelector(".scroll-down-button");

    if (scrollUpButton && scrollDownButton) {
      scrollUpButton.addEventListener("click", () => {
        carousel.scrollBy({
          left: -500,
          behavior: "smooth",
        });
      });

      scrollDownButton.addEventListener("click", () => {
        carousel.scrollBy({
          left: 500,
          behavior: "smooth",
        });
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default behavior
      const targetId = link.getAttribute("href").replace("#", "");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Smooth scroll to the section if on the same page
        targetSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Redirect to index.html with the hash for navigation from contact.html
        const isContactPage = window.location.pathname.includes("contact.html");

        if (isContactPage) {
          window.location.href = `index.html#${targetId}`;
        }
      }
    });
  });

  const carousels = document.querySelectorAll(".overflow-x-scroll");
  carousels.forEach((carousel) => {
    const scrollUpButton = carousel
      .closest("section")
      .querySelector(".scroll-up-button");
    const scrollDownButton = carousel
      .closest("section")
      .querySelector(".scroll-down-button");

    if (scrollUpButton && scrollDownButton) {
      scrollUpButton.addEventListener("click", () => {
        carousel.scrollBy({
          left: -500,
          behavior: "smooth",
        });
      });

      scrollDownButton.addEventListener("click", () => {
        carousel.scrollBy({
          left: 500,
          behavior: "smooth",
        });
      });
    }
  });
});
