let lm = document.querySelector(".lightmode");

var toggled = true;

/*Toggle navbar backgroundColor and menu text btw white/black*/
function toggle() {
  if (!toggled) {
    toggled = true;
    document.querySelector(".navbar-container").style.backgroundColor = "white";
    document.querySelector(".fa-car-side").style.color = "black";
    document.querySelector(".menu-text-1").style.color = "black";
    document.querySelector(".menu-text-2").style.color = "black";
    document.querySelector(".menu-text-3").style.color = "black";
    document.querySelector(".menu-text-4").style.color = "black";
    document.querySelector(".menu-text-5").style.color = "black";
    return;
  } else {
    toggled = false;
    document.querySelector(".navbar-container").style.backgroundColor = "black";
    document.querySelector(".fa-car-side").style.color = "white";
    document.querySelector(".menu-text-1").style.color = "white";
    document.querySelector(".menu-text-2").style.color = "white";
    document.querySelector(".menu-text-3").style.color = "white";
    document.querySelector(".menu-text-4").style.color = "white";
    document.querySelector(".menu-text-5").style.color = "white";
    return;
  }
}

lm.addEventListener("click", toggle);
