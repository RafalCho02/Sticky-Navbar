const $nav = $(".nav");
$(window).on("scroll", fixNav);

function fixNav() {
  if ($(window).scrollTop() > $nav.outerHeight() + 150) {
    $nav.addClass("active");
  } else {
    $nav.removeClass("active");
  }
}
