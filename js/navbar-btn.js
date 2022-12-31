$("#navbar-toggle-btn").click(function () {
  $("#nav-bar").toggleClass("hide");
});

$(window).on("resize", function () {
  if ($(this).width() >= 880) {
    $("#nav-bar").addClass("hide");
  }
});
