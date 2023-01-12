let intervalId;

$(document).ready(function () {
  $(".carousel-item").eq(0).addClass("active");
  let total = $(".carousel-item").length;
  let current = 0;
  let delayStart = true;

  intervalId = setInterval(carousel, 4000); //start the interval

  $("#moveRight").on("click", function () {
    clearInterval(intervalId); //stop the interval
    let next = current;
    current = current + 1;
    setSlide(next, current);
    if (delayStart) {
      setTimeout(startInterval, 2000); //start the interval again after 2 sec
      delayStart = !delayStart;
    }
  });

  $("#moveLeft").on("click", function () {
    clearInterval(intervalId); //stop the interval
    let prev = current;
    current = current - 1;
    setSlide(prev, current);
    if (delayStart) {
      setTimeout(startInterval, 2000); //start the interval again after 2 sec
      delayStart = !delayStart;
    }
  });

  function carousel() {
    let next = current + 1;
    setSlide(current, next);
  }
  function startInterval() {
    intervalId = setInterval(carousel, 4000);
    delayStart = !delayStart;
  }

  function setSlide(prev, next) {
    if (next > total - 1) {
      current = 0;
    } else if (next < 0) {
      current = total - 1;
    } else {
      current = next;
    }
    $(".carousel-item").eq(prev).removeClass("active");
    $(".carousel-item").eq(current).addClass("active");
  }
});
