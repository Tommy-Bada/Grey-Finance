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
    document.getElementById("main-image").src = "images/kenya-hero-image.png";
    document.querySelector("main").style.backgroundImage = 'url("images/kenya-homepage-gradient.svg")';
    document.querySelector("main").style.backgroundPositionX = 0;
    document.querySelector("main").style.backgroundPositionY = 0;
    document.getElementById("section-2-image").src = "images/Kenya-img.png";
    document.getElementById("flagholder").src ="images/KenyaFlag.svg";
    document.getElementById("main-left").children[0].innerHTML = "Instant foreign bank accounts for Kenyans";
    document.getElementById("main-left").children[1].innerHTML = "Open a foreign currency account to receive payments from anywhere in the world, make international payments or convert foreign currencies to Kenyan Shillings."
    document.getElementById("section-4").style.display = "none";
    document.getElementById("section-5").style.display = "none";
    document.getElementById("Kenya-section").style.display = "block";


}
function switchToNigeria(){
    document.getElementById("main-image").src = "images/main-image.png";
    document.querySelector("main").style.backgroundImage = 'url("images/homepage-gradient.svg")';
    document.querySelector("main").style.backgroundPositionX = "-80rem";
    document.querySelector("main").style.backgroundPositionY = "-70rem";
    document.getElementById("section-2-image").src = "images/woman-on-laptop.jpeg";
    document.getElementById("flagholder").src ="images/NigeriaFlag.svg";
    document.getElementById("main-left").children[0].innerHTML = "Foreign accounts for Africans"
    document.getElementById("main-left").children[1].innerHTML = "Open a global bank account for free to receive and make foreign payments or convert currencies, all in one place"
    document.getElementById("section-4").style.display = "block";
    document.getElementById("section-5").style.display = "block";
    document.getElementById("Kenya-section").style.display = "none";

}
kenyaBtn.addEventListener("click", switchToKenya);
nigeriaBtn.addEventListener("click", switchToNigeria);