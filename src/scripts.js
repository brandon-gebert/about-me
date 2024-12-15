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
    {
      linkText: "Skills",
      className: "skills-section",
      fallbackUrl: "index.html#skills-section",
    },
    {
      linkText: "Case Study",
      className: "case-study-section",
      fallbackUrl: "index.html#case-study-section",
    },
    {
      linkText: "Resume",
      className: "resume-section",
      fallbackUrl: "index.html#resume-section",
    },
    { linkText: "Contact", fallbackUrl: "contact.html" }, // No section, direct URL
  ];

  navigationLinks.forEach(({ linkText, className, fallbackUrl }) => {
    const navItem = Array.from(document.querySelectorAll("nav ul a li")).find(
      (li) => li.textContent.trim() === linkText,
    )?.parentElement;

    if (navItem) {
      if (className) {
        const section = document.querySelector(`.${className}`);
        if (section) {
          const sectionId = className; // Use the class name as the ID
          navItem.setAttribute("href", `#${sectionId}`);
          section.setAttribute("id", sectionId);
        } else if (fallbackUrl) {
          // If section is not found, use fallback URL
          navItem.setAttribute("href", fallbackUrl);
        }
      } else if (fallbackUrl) {
        // If no className but fallback URL is provided
        navItem.setAttribute("href", fallbackUrl);
      }
    }
  });
});
