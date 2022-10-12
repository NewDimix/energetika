$(window).on('load', function () {
  $preloader = $('.js-loader'),
    $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');

  setTimeout("$('.item.active .js-descr').addClass('item__descr_visible');", 2000);

  $('#carousel-example-generic').on('slide.bs.carousel', function () {
    setTimeout("$('.item.active .js-descr').addClass('item__descr_visible');", 2000);
  });

  $('.main-carousel').css("min-height", ($(".item.active .item__text").outerHeight()));
  $('.main-carousel').css("height", ( ($(window).height() - $(".header").outerHeight() - $(".footer").outerHeight()) / ($(window).height() / 100) + "%" ));

  $( window ).resize(function() {
    $('.main-carousel').css("min-height", ($(".item.active .item__text").outerHeight()));
    $('.main-carousel').css("height", ( ($(window).height() - $(".header").outerHeight() - $(".footer").outerHeight()) / ($(window).height() / 100) + "%" ));
  });

  $("#carousel-example-generic").on('slid.bs.carousel', function () {
    $('.main-carousel').css("min-height", ($(".item.active .item__text").outerHeight()));
  });
});
