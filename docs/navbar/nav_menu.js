const doc = document;
const menuOpen = doc.querySelector(".menu");
const overlay = doc.querySelector(".overlay");
var menu_open = false;

menuOpen.addEventListener("click", () => {
  if (menu_open === false) {
    menu_open = true;
    overlay.classList.add("overlay--active");
    return
  } 
  else {
    menu_open = false;
    overlay.classList.remove("overlay--active");
    return
  }
});