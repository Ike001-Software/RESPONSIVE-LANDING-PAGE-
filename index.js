// Clicking on Menu Button in Mobile View
const menuLines = document.getElementById("menu-lines");
const menus = document.getElementById("menus");
const menuItems = menus.querySelectorAll("li");

menuLines.addEventListener("click", () => {
  menus.classList.toggle("hidden");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menus.classList.toggle("hidden");
  });
});

// SlideUp Effect Of Text Upon Load

// Website loads
// The Section visible in the Viewport goes through the SlideUp effect already defined just once.
// Other sections go through the same effect immediately they are visible on the viewport.

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top <= window.innerHeight && rect.bottom >= 0
//     );
// }

// const sections = document.querySelectorAll("section");

// function checkSections() {
//   sections.forEach((section) => {
//     if (isInViewport(section)) {
//       section.classList.add("content");
//     }
//   });
// }

// window.addEventListener("load", checkSections);

// window.addEventListener("scroll", checkSections);