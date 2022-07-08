// Open Menu Bar
let hamburgerIcon = document.getElementById("hamburger-menu");
function openMobileMenu() {
    let mobileMenu = document.getElementById("hamburger-open");
    mobileMenu.style.opacity = 1;
    mobileMenu.style.zIndex = 2;
}
hamburgerIcon.addEventListener("click", openMobileMenu);


//Close Menu Bar
let closeIcon = document.getElementById("close-btn");
function closeMobileMenu(){
    let mobileMenu = document.getElementById("hamburger-open");
    mobileMenu.style.opacity = 0;
    mobileMenu.style.zIndex = 0;
}
closeIcon.addEventListener("click", closeMobileMenu);