// Carousel Scrolling
function initializeCarouselScrolling() {
  const carousels = document.querySelectorAll(".overflow-x-scroll");

  carousels.forEach((carousel) => {
    const scrollUpButton = carousel
      .closest("section")
      ?.querySelector(".scroll-up-button");
    const scrollDownButton = carousel
      .closest("section")
      ?.querySelector(".scroll-down-button");

    if (scrollUpButton && scrollDownButton) {
      scrollUpButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -500, behavior: "smooth" });
      });

      scrollDownButton.addEventListener("click", () => {
        carousel.scrollBy({ left: 500, behavior: "smooth" });
      });
    }
  });
}

// Navigation Bar Mobile Toggle
function initializeMobileNavbarToggle() {
  const openButton = document.querySelector(".open-mobile-navbar-button");
  const closeButton = document.querySelector(".close-mobile-navbar-button");
  const mobileNavbar = document.querySelector(".mobile-navbar");

  if (openButton && closeButton && mobileNavbar) {
    openButton.addEventListener("click", () => {
      mobileNavbar.classList.remove("hidden");
    });

    closeButton.addEventListener("click", () => {
      mobileNavbar.classList.add("hidden");
    });
  }
}

// Navigation Scroll Visibility
function initializeNavbarScrollVisibility() {
  const navbars = document.querySelectorAll("nav");
  let lastScrollPosition = window.pageYOffset;

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.pageYOffset;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    navbars.forEach((navbar) => {
      if (
        currentScrollPosition <= 5 ||
        currentScrollPosition >= maxScroll - 5
      ) {
        navbar.style.transform = "translateY(0)";
      } else if (currentScrollPosition > lastScrollPosition) {
        navbar.style.transform = "translateY(-100%)";
      } else {
        navbar.style.transform = "translateY(0)";
      }
    });

    lastScrollPosition = currentScrollPosition;
  });
}

// Initialize all functionality when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeCarouselScrolling();
  initializeMobileNavbarToggle();
  initializeNavbarScrollVisibility();
});
