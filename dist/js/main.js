// Responisve Nav
$(function() {
  menu = $("nav ul");

  $("#openup").on("click", function(e) {
    e.preventDefault();
    menu.slideToggle();
  });

  $(window).resize(function() {
    var w = $(this).width();
    if (w > 480 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }
  });

  $("nav li").on("click", function(e) {
    var w = $(window).width();
    if (w < 580) {
      menu.slideToggle();
    }
  });
  $(".open-menu").height($(window).height());
});

$(".clifton-strengths").on("click", function(e) {
  e.preventDefault();
});

// function to handle sticky header effect once user scrolls past about me
$(window).scroll(function() {
  if ($(this).scrollTop() == 500) {
    $(".sticky-header")
      .slideToggle()
      .addClass(".in-view");
  }
  //  else if ($(this).scrollTop() < 1000) {
  //   $(".sticky-header").slideToggle(".in-view");
  // }
});
// second part of above
// $(".scrollUp").click(function() {
//   $("html, body").animate(
//     {
//       scrollTop: 0
//     },
//     500
//   );
//   return false;
// });
