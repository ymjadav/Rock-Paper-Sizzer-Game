let mode = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";

mode.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    body.classList.add("bg-yellow-500");
    body.classList.remove("bg-white");
  } else {
    currentMode = "light";
    body.classList.add("bg-white");
    body.classList.remove("bg-yellow-500");
  }
  console.log(currentMode);
});
