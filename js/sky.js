const siteWidth = window.innerWidth * 0.99;
const siteHeight = window.innerHeight * 0.99;
const stars = document.querySelector(".stars");
for (i = 0; i <= 20; i++) {
  let start = document.createElement("div");
  start.className = "star star_" + i;
  start.style.cssText = `
    top: ${Math.random() * siteHeight}px;
    left: ${Math.random() * siteWidth}px;
  `;
  stars.appendChild(start);
}

// using Jquery
/* const siteWidth = $(window).width();
for (i = 0; i <= 100; i++) {
  let start = $("<div>")
    .addClass("star star_" + i)
    .css({
      top: Math.floor(Math.random() * screen.availHeight),
      left: Math.floor(Math.random() * screen.availWidth),
    })
    .appendTo(".stars");
} */
