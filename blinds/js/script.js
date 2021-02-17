
$(document).ready(function () {
  $('.menu-nav__burger').click(function () {
    $('.menu-mobail').toggleClass('menu-mobail_active');
  });
  $('.menu-mobail__close').click(function () {
    $('.menu-mobail').toggleClass('menu-mobail_active');
  });

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
});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
