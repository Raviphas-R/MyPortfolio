$("#navbar-toggle-btn").click(function () {
  $("#nav-bar").toggleClass("hide");
  $("#nav-bar").addClass("navbar-toggled");
  $("#nav-bar > ul").addClass("navbar-toggled");
});

$(window).on("resize", function () {
  if ($(this).width() >= 880) {
    $("#nav-bar").addClass("hide");
  }
  if ($(this).width() >= 880) {
    $("#nav-bar").removeClass("navbar-toggled");
    $("#nav-bar > ul").removeClass("navbar-toggled");
  }
});
