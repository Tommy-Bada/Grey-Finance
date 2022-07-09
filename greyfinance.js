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

//Change header color based on scroll
function changeHeaderColor(){
let navigationBar = document.querySelector("header");
if (window.scrollY >= 32 ){
    navigationBar.classList.add("header-2");
}
else{
    navigationBar.classList.remove("header-2");
}
}
window.addEventListener("scroll", changeHeaderColor);


//Flag option drop down
let flagBtn = document.getElementById("flag-options")
function dropFlagOption(){
   let nigeriaKenya = document.getElementById("ng-ky");
   if( nigeriaKenya.style.opacity == 0){
    nigeriaKenya.style.opacity = 1 ;
   }
   else{
    nigeriaKenya.style.opacity = 0;
   }
}
flagBtn.addEventListener('click', dropFlagOption);

//Change Nigeria content to Kenya content and vice-versa
let kenyaBtn = document.getElementById("kenya-btn");
let nigeriaBtn = document.getElementById("nigeria-btn");
function switchToKenya(){
    let mainImage = document.getElementById("main-image");
    let mainBackground = document.querySelector("main");
    let secondImage = document.getElementById("section-2-image");
    mainImage.src = "images/kenya-hero-image.png";
    mainBackground.style.backgroundImage = 'url("images/kenya-homepage-gradient.svg")';
    mainBackground.style.backgroundPositionX = 0;
    mainBackground.style.backgroundPositionY = 0;
    secondImage.src = "images/Kenya-img.png";
    document.getElementById("flagholder").src ="images/KenyaFlag.svg";
}
kenyaBtn.addEventListener("click", switchToKenya);