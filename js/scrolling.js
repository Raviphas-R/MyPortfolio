//delete #tag when refresh
window.onload = function () {
  window.location.hash = "";
};

//detect user scrolling
$(() => {
  let scrolling = (element) => {
    $(window).scroll(function () {
      let top_of_element = $(element).offset().top;
      let bottom_of_element =
        $(element).offset().top + $(element).outerHeight();
      let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      let top_of_screen = $(window).scrollTop();

      bottom_of_screen > top_of_element && top_of_screen < bottom_of_element
        ? $(element).addClass("visible")
        : $(element).removeClass("visible");
    });
  };

  scrolling(".about-me");
  scrolling(".about-me-content");
  scrolling(".project-container");
  scrolling(".contact-container");
});
