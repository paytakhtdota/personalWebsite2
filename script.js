const desiredHeightPercentage = 96;
const viewportHeight = window.innerHeight;
const desiredHeightInPixels = (desiredHeightPercentage / 100) * viewportHeight;

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
    if(window.scrollY >= desiredHeightInPixels){
        fixnav.style.display = "block";
    }
    else{
        fixnav.style.display = "none";
    }

}

window.addEventListener('scroll', fixedNavBar);