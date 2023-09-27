const viewportHeight = window.innerHeight;
const heightOfsection1 = (viewportHeight-70);
document.getElementById("section-1").style.height = heightOfsection1+"px";

function mousehover() {
    document.getElementById("logo-img").src = "./img/logo2.jpg";
}

function mouseleave() {
    document.getElementById("logo-img").src = "./img/logo1.jpg";
}

function closeMenu() {
    document.getElementById("mini-menu").style.display = "none";
}

function openMenu() {
    document.getElementById("mini-menu").style.display = "flex";
}

function fixedNavBar(){
    const fixnav = document.getElementById("fixed-navbar");
    if(window.scrollY >= heightOfsection1+10){
        fixnav.style.display = "block";
    }
    else{
        fixnav.style.display = "none";
    }

}

window.addEventListener('scroll', fixedNavBar);


