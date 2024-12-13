const hamMenu = document.querySelector(".ham-menu");
const homeMenu = document.querySelector(".home-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  homeMenu.classList.toggle("active");
});
