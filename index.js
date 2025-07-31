// Clicking on Menu Button in Mobile View
const menuLines = document.getElementById("menu-lines");
const menus = document.getElementById("menus");

menuLines.addEventListener("click", () => {
  menus.classList.toggle("hidden");
});

// User taps on the Button
// COntainer holding the menu content appears