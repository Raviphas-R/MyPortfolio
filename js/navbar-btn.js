$("#navbar-toggle-btn").click(function () {
  $("#icon-menu").toggleClass("fa-solid fa-bars");
  $("#icon-menu").toggleClass("fa-solid fa-xmark");
  $("#nav-bar").removeClass("hide");
  let navToggle = $("#nav-bar").attr("class");
  switch (navToggle) {
    case "navbar-container":
      $("#nav-bar").addClass("navbar-open");
      break;

    case "navbar-container navbar-open":
      $("#nav-bar").removeClass("navbar-open");
      $("#nav-bar").addClass("navbar-close");
      break;

    case "navbar-container navbar-close":
      $("#nav-bar").addClass("navbar-open");
      $("#nav-bar").removeClass("navbar-close");
      break;
  }
});

$(".nav-list").click(function () {
  let navToggle = $("#nav-bar").attr("class");
  if (navToggle == "navbar-container navbar-open") {
    $("#nav-bar").removeClass("navbar-open");
    $("#nav-bar").addClass("navbar-close");
    $("#icon-menu").removeClass("fa-solid fa-xmark");
    $("#icon-menu").addClass("fa-solid fa-bars");
  }
});

$(window).on("resize", function () {
  if ($(this).width() >= 940) {
    $("#nav-bar").addClass("hide");
    $("#nav-bar").removeClass("navbar-close navbar-open");

    $("#nav-bar > ul").removeClass("navbar-open");
    $("#icon-menu").removeClass("fa-solid fa-xmark");
    $("#icon-menu").addClass("fa-solid fa-bars");
  }
});
