$(document).ready(function () {
  $(".slider").slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".counter").counterUp({
    delay:20,
    time:3000
  });
});
