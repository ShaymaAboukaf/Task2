function removeActiveClass() {
  document.querySelectorAll(".nav-link").forEach((nav) => {
    nav.classList.remove("active");
  });
}
document.querySelectorAll(".main-nav-link").forEach((nav) => {
  nav.addEventListener("click", function (e) {
    removeActiveClass();
    e.target.classList.add("active");
  });
});

var swiper = new Swiper(".Slider-container", {
  effect: "cards",
  grabCursor: false,
  centerdSlides: true,
  loop: true,
  simulateTouch: false, // Disable dragging with the mouse
  allowTouchMove: false, // Disable swiping with touch gestures
  navigation: {
    nextEl: ".carousel-next",
    prevEl: ".carousel-prev",
  },
});
