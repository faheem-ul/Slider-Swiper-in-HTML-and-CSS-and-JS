let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
