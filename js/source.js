const hamburgerMenu = document.getElementById("toggle-hamburger");
const hamburgerList = document.getElementById("hamburger-list");

hamburgerMenu.addEventListener("click", openMenu);

function openMenu() {
  hamburgerList.classList.toggle("active");
}
