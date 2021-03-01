
$(document).ready(function () {
  //Меню (кнопки бургер)
  $('.menu-nav__burger').click(function () {
    $('.menu-mobail').toggleClass('menu-mobail_active');
  });
  $('.menu-mobail__close').click(function () {
    $('.menu-mobail').toggleClass('menu-mobail_active');
  });
  $('.menu-nav__item').click(function () {
    $('.menu-mobail').toggleClass('menu-mobail_active');
  });
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  //Слайдер в блоке с работами 
  $('.slider').slick({
    adaptiveHeight: true,
    slidesToScroll: 1,
    asNavFor: ".sliderbig",
  });

  $('.sliderbig').slick({
    adaptiveHeight: true,
    arrows: false,
    slidesToShow: 8,
    variableWidth: true,
    focusOnSelect: true,
    asNavFor: ".slider",
  });

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  //Слайдер в блоке с отзывами
  $('.review-slider').slick({
    adaptiveHeight: true,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    draggable: false,
    swipe: false,
  });

  $('.review-slider__slider').slick({
    adaptiveHeight: true,
    slidesToScroll: 1,
  });
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  //Якорная анимация
  $('a[href^="#header"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    $('html, body').animate({ scrollTop: dn }, 1000);
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });

  $('a[href^="#goods"]').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $('html, body').animate({ scrollTop: dn }, 1000);
  });

  $('a[href^="#slick"]').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $('html, body').animate({ scrollTop: dn }, 1000);
  });

  $('a[href^="#sale"]').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $('html, body').animate({ scrollTop: dn }, 1000);
  });

  $('a[href^="#review"]').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $('html, body').animate({ scrollTop: dn }, 1000);
  });

  $('a[href^="#footer"]').on('click', function (event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $('html, body').animate({ scrollTop: dn }, 1000);
  });
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  //Кнопка вверх
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  //Модалные окна
  //Вызов замерщика
  $('.popup-active').on('click', function (event) {
    event.preventDefault();
    $('.popup-call').fadeIn()
  });
  $('.popup-call__close').on('click', function (event) {
    event.preventDefault();
    $('.popup-call').fadeOut()
  });
  //Виды жалюзей
  $('.details-popup').on('click', function (event) {
    event.preventDefault();
    $('.popup-details').fadeIn()
  });
  $('.popup-details__close').on('click', function (event) {
    event.preventDefault();
    $('.popup-details').fadeOut()
  });
  //Задать вопрос
  $('.query-popup').on('click', function (event) {
    event.preventDefault();
    $('.popup-query').fadeIn()
  });
  $('.popup-query__close').on('click', function (event) {
    event.preventDefault();
    $('.popup-query').fadeOut()
  });
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  //Попап слайдер
  new Swiper('.popup-details', {
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    simulateTouch: false,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });

  new Swiper('.info-slider', {
    SliderPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    grabCursor: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  });
  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
});
