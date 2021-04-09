$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

//Слайдер gallery
new Swiper('.gallery__container', {
  navigation: {
    nextEl: '.gallery-btn__prev',
    prevEl: '.gallery-btn__next',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  autoHeight: true,
});

//Слайдер brands
new Swiper('.brands__container', {
  navigation: {
    nextEl: '.swiper-btn__prev',
    prevEl: '.swiper-btn__next',
  },
  slidesPerView: 6,
  spaceBetween: 70,
  loop: true,
  autoHeight: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 600,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 70,
    },
  }
});