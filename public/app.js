const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const main = document.getElementById("main");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
