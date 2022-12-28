(window.applyThemeSetting = function (e) {
  const t = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
    o = e || localStorage.getItem("user-color-scheme") || t,
    r = document.documentElement.getAttribute("data-user-theme");
  if (o) {
    o !== r && document.documentElement.setAttribute("data-user-theme", o);
    const e = document.querySelector("web-lighthouse-viewer article.lh-root");
    e && e.classList.toggle("lh-dark", "dark" === o);
  }
}),
  window.applyThemeSetting();

/* theme toggle button */
let toggle = document.getElementById("toggle-theme");
let container = document.getElementById("container-toggle");
let sun = document.getElementById("sun-theme");
let moon = document.getElementById("moon-theme");
let state = false;

toggle.addEventListener("click", () => {
  state = !state;
  if (state) {
    container.classList.add("dark");
    toggle.classList.add("toggled");
    sun.classList.remove("animated");
    moon.classList.add("animated");
    document.documentElement.setAttribute("data-user-theme", "dark");
  } else {
    container.classList.remove("dark");
    toggle.classList.remove("toggled");
    sun.classList.add("animated");
    moon.classList.remove("animated");
    document.documentElement.setAttribute("data-user-theme", "light");
  }
});