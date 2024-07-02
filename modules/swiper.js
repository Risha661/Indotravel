import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const slider = document.querySelector(".album__slider");

const swiper = new Swiper(slider, {
  slidesPerView: 1,
  // loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  observer: true,
  observeParents: true,
  parallax: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
