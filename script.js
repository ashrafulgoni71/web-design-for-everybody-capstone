const btn = document.querySelector(".btn-mobile-nav");
const headerClass = document.querySelector(".header");

btn.addEventListener("click", function () {
  headerClass.classList.toggle("open-nav");
});
