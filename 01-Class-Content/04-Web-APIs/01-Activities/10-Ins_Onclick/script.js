var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";

function myEventFunction() {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  } else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
}
// themeSwitcher.addEventListener("click", myEventFunction);
container.addEventListener("mouseover", function () {
  console.log("did ya hover?");
});
