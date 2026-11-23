const heroMenuToggleBtn = document.getElementById("heroMenuToggleBtn");
const heroSlideMenu = document.getElementById("heroSlideMenu");
const slideCloseBtn = document.getElementById("slideCloseBtn");
const searchBar = document.getElementById("searchBar");
const heroSearchBtn = document.getElementById("heroSearchBtn");
const closeSearchBtn = document.getElementById("closeSearchBtn");

function openMenu() {
	heroSlideMenu.classList.add("open");
	heroMenuToggleBtn.setAttribute("aria-expanded", "true");
}
function closeMenu() {
	heroSlideMenu.classList.remove("open");
	heroMenuToggleBtn.setAttribute("aria-expanded", "false");
}

function openSearch() {
	searchBar.classList.add("open");
	heroSearchBtn.setAttribute("aria-expanded", "true");
}

function closeSearch() {
	searchBar.classList.remove("open");
	heroSearchBtn.setAttribute("aria-expanded", "false");
}

heroMenuToggleBtn.addEventListener("click", openMenu);
slideCloseBtn.addEventListener("click", closeMenu);
heroSearchBtn.addEventListener("click", openSearch);
closeSearchBtn.addEventListener("click", closeSearch);