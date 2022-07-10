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
    document.getElementById("section-2").firstElementChild.innerHTML = "Get a global account for all your international transactions";
    document.getElementsByClassName("section-2-box-text1")[0].innerHTML = "<b>Get free foreign accounts and get paid by foreign employers & clients</b>"
    document.getElementsByClassName("section-2-box-text2")[0].innerHTML = "Freelancer or remote worker? We’ve got you. Receive USD, GBP and EUR with ease in Kenya with your free international bank account."
    document.getElementsByClassName("section-2-box-button")[0].innerHTML = "<b>Learn more →</b>"
    document.getElementsByClassName("section-2-box-text1")[1].innerHTML = "<b>Convert foreign currencies instantly</b>"
    document.getElementsByClassName("section-2-box-text2")[1].innerHTML = "Quickly convert your foreign earnings to KES on Grey at competitive market rates. Get your money’s full value every time."
    document.getElementsByClassName("section-2-box-button")[1].innerHTML = "<b>Learn more →</b>"
    document.getElementsByClassName("section-2-box-text1")[2].innerHTML = "<b>Transfer Money</b>"
    document.getElementsByClassName("section-2-box-text2")[2].innerHTML = "Send money to any foreign account directly from your Grey account. No stress. No delay. No hidden fees. It's that easy."
    document.getElementsByClassName("section-2-box-button")[2].innerHTML = "<b>Learn more →</b>"

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
    document.getElementById("section-2").firstElementChild.innerHTML = "Free USD, GBP and EUR accounts for all your international transactions"
    document.getElementsByClassName("section-2-box-text1")[0].innerHTML = "<b>Get paid by foreign employers and clients</b>"
    document.getElementsByClassName("section-2-box-text2")[0].innerHTML = "Use your account details to receive pounds, dollars and euros like a local and manage your earnings. Invoice like a local and manage your earnings."
    document.getElementsByClassName("section-2-box-button")[0].innerHTML = "<b>Open a virtual bank account</b>"
    document.getElementsByClassName("section-2-box-text1")[1].innerHTML = "<b>Instant currency exchange</b>"
    document.getElementsByClassName("section-2-box-text2")[1].innerHTML = "Enjoy quick and efficient online foreign exchange transactions. Say goodbye to bank queues and disappointments."
    document.getElementsByClassName("section-2-box-button")[1].innerHTML = "<b>Convert your foreign currency</b>"
    document.getElementsByClassName("section-2-box-text1")[2].innerHTML = "<b>Send and receive money quickly</b>"
    document.getElementsByClassName("section-2-box-text2")[2].innerHTML = "Enjoy fast global money transfer with your international bank account on Grey."
    document.getElementsByClassName("section-2-box-button")[2].innerHTML = "<b>Send Money Abroad</b>"
}
kenyaBtn.addEventListener("click", switchToKenya);
nigeriaBtn.addEventListener("click", switchToNigeria);



// Frequently asked question section
let dropBtn = document.querySelectorAll(".dropdown-btn");
dropBtn[0].addEventListener("click", function(){
    if(document.getElementById("kenya-anm-1").classList.contains('kenya-moved-anm')){
        document.getElementById("kenya-anm-1").classList.remove("kenya-moved-anm");
        document.getElementsByClassName("dropdown-img")[0].src = "images/Minus.svg";
    }
    else{
        document.getElementById("kenya-anm-1").classList.add("kenya-moved-anm");
        document.getElementsByClassName("dropdown-img")[0].src = "images/Add.svg";
    }
})

dropBtn[1].addEventListener("click", function(){
    if(document.getElementById("kenya-anm-2").classList.contains('kenya-moved-anm')){
        document.getElementById("kenya-anm-2").classList.remove("kenya-moved-anm");
        document.getElementsByClassName("dropdown-img")[1].src = "images/Minus.svg";
    }
    else{
        document.getElementById("kenya-anm-2").classList.add("kenya-moved-anm");
        document.getElementsByClassName("dropdown-img")[1].src = "images/Add.svg";
    }
})
dropBtn[2].addEventListener("click", function(){
    if(document.getElementById("kenya-anm-3").classList.contains('kenya-moved-anm')){
        document.getElementById("kenya-anm-3").classList.remove("kenya-moved-anm");
        document.getElementsByClassName("dropdown-img")[2].src = "images/Minus.svg";
    }
    else{
        document.getElementById("kenya-anm-3").classList.add("kenya-moved-anm");
        document.getElementsByClassName("dropdown-img")[2].src = "images/Add.svg";
    }
})