const button = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");
const items = document.querySelectorAll(".menu__item");
button.addEventListener("click", function () {
  button.classList.toggle("menu__btn--is-active");
  menu.classList.toggle("menu__list--is-open");
  items.forEach((element) => {
    element.classList.toggle("menu__item--is-visible");
  });
});
