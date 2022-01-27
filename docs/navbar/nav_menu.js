const doc = document;
const menu = doc.querySelector(".menu");
const overlay = doc.querySelector(".overlay");
var menu_open = false;

menu.addEventListener("click", () => {
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

// Show & Hide navbar

const navbar = doc.getElementById("navbar");
var LastScrollTop;
var Timeout
Timeout = setTimeout(function() {
  HideNavbar()
}, 1000);

ShowNavbar = function(){
  navbar.style.top = '0';
  window.clearTimeout(Timeout);
}
HideNavbar = function(){
    navbar.style.top = '-75px';
    menu_open = false;
    overlay.classList.remove("overlay--active");
}

//// Scroll
window.addEventListener('scroll',function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > LastScrollTop){
    HideNavbar()
  }
  else{
    ShowNavbar()
    Timeout = setTimeout(function() {
      HideNavbar()
    }, 1000);
  }
  LastScrollTop = scrollTop;
});

//// Mouse hover
var config = {    
  sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)    
  interval: 200, // number = milliseconds for onMouseOver polling interval    
  over: ShowNavbar, // function = onMouseOver callback (REQUIRED)    
  timeout: 1000, // number = milliseconds delay before onMouseOut    
  out: HideNavbar // function = onMouseOut callback (REQUIRED)
 };
$("html #navbar").hoverIntent( config );
navbar.onmouseover = function(){
  ShowNavbar()
  Timeout = setTimeout(function() {
    HideNavbar()
  }, 1000);
};

