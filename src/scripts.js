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
