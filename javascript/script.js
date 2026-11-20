const heroMenuToggleBtn = document.getElementById("heroMenuToggleBtn");
const heroSlideMenu = document.getElementById("heroSlideMenu");
const slideCloseBtn = document.getElementById("slideCloseBtn");

function openMenu() {
	heroSlideMenu.classList.add("open");
	heroMenuToggleBtn.setAttribute("aria-expanded", "true");
}
function closeMenu() {
	heroSlideMenu.classList.remove("open");
	heroMenuToggleBtn.setAttribute("aria-expanded", "false");
}

heroMenuToggleBtn.addEventListener("click", openMenu);
slideCloseBtn.addEventListener("click", closeMenu);