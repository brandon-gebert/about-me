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
  const navigationLinks = [
    { linkText: "Skills", className: "skills-section" },
    { linkText: "Case Study", className: "case-study-section" },
    { linkText: "Resume", className: "resume-section" },
  ];

  navigationLinks.forEach(({ linkText, className }) => {
    const navItem = Array.from(document.querySelectorAll("nav ul a li")).find(
      (li) => li.textContent.trim() === linkText,
    )?.parentElement;

    const section = document.querySelector(`.${className}`);

    if (navItem && section) {
      const sectionId = className; // Use the class name as the ID
      navItem.setAttribute("href", `#${sectionId}`);
      section.setAttribute("id", sectionId);
    }
  });
});
