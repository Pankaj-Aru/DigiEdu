jQuery(document).ready(function () {
  $(".counter").counterUp({
    delay: 40,
    time: 2000,
  });

  jQuery(".nav-trigger").click(function () {
    $(".site-content-wrapper").toggleClass("scaled");
    $(".nav-trigger img").toggleClass("scaled");
    $(".nav-trigger img:nth-child(2)").toggleClass("action");
    $(".nav-trigger img:nth-child(1)").toggleClass("action");
  });

  jQuery(".background").click(function () {
    $(".site-content-wrapper").toggleClass("scaled");
    $(".nav-trigger img").toggleClass("scaled");
    $(".nav-trigger img:nth-child(2)").toggleClass("action");
    $(".nav-trigger img:nth-child(1)").toggleClass("action");
  });

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 2000);
});
