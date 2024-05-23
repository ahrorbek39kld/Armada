const btn = document.querySelector(".menu__btn2");
const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

btn.addEventListener("click", () => {
  menu.classList.toggle("menu__open");
  open.classList.toggle("close-btn")
  close.classList.toggle("close-btn")
});
