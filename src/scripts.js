// Navigation Bar Scrolling
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

// Mobile Navigation Bar Toggle (Open/Close)
const openMobileNavbarButton = document.querySelector(
  ".open-mobile-navbar-button",
);
const closeMobileNavbarButton = document.querySelector(
  ".close-mobile-navbar-button",
);
const mobileNavbar = document.querySelector(".mobile-navbar");

if (openMobileNavbarButton && closeMobileNavbarButton && mobileNavbar) {
  openMobileNavbarButton.addEventListener("click", () => {
    mobileNavbar.classList.remove("hidden");
  });

  closeMobileNavbarButton.addEventListener("click", () => {
    mobileNavbar.classList.add("hidden");
  });
}
