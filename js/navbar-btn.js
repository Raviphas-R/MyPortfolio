let iconMenu = $("#icon-menu");
let navBar = $("#nav-bar");

let closeMenu = () => {
  iconMenu.removeClass("fa-xmark");
  iconMenu.addClass("fa-bars");
};

let toggleMenu = (target, removeclass, addclass) => {
  $(target).removeClass(removeclass);
  $(target).addClass(addclass);
};

$("#navbar-toggle-btn").click(function () {
  iconMenu.toggleClass("fa-bars");
  iconMenu.toggleClass("fa-xmark");
  navBar.removeClass("hide");
  let navToggle = navBar.attr("class");
  switch (navToggle) {
    case "navbar-container":
      navBar.addClass("navbar-open");
      break;

    case "navbar-container navbar-open":
      toggleMenu(navBar, "navbar-open", "navbar-close");
      break;

    case "navbar-container navbar-close":
      toggleMenu(navBar, "navbar-close", "navbar-open");
      break;
  }
});

$(".nav-list a").click(function () {
  let navToggle = navBar.attr("class");
  if (navToggle == "navbar-container navbar-open") {
    toggleMenu(navBar, "navbar-open", "navbar-close");
    closeMenu();
  }
});

$(window).on("resize", function () {
  if ($(this).width() >= 940) {
    navBar.addClass("hide");
    navBar.removeClass("navbar-close navbar-open");
    closeMenu();
  }
});
