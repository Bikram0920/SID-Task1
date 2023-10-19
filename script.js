//TO top
let btnClick=document.getElementById('scroll-top');
window.onscroll=function(){scrollFunction()}
    function scrollFunction() {
    if (document.documentElement.scrollTop > document.querySelector('#intro').style.height) {
    btnClick.style.display = "block";
    } else {
    btnClick.style.display = "none";
    }
}
function topFunction() {
document.documentElement.scrollTop = 0;
}
console.log(document.querySelector('#intro').style.height);

//For Hamburger Menu
let navbar=document.querySelector(".navbar");
navbar.style.maxHeight="0px";

function toggle(){
if(navbar.style.maxHeight=="0px"){
    navbar.style.maxHeight="530px";
    }
else{
    navbar.style.maxHeight="0px";
    }
}

   //Form Validation
function formValidation(){
let fname=document.querySelector(".fname").value;
let mail=document.querySelector('.mail').value;
let regName = /\d+$/g;
let regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

if (email == "" || !regEmail.test(email)) {
    window.alert("Please enter a valid e-mail address.");
    email.focus();
    return false;
}
if (fname == "" || regName.test(fname)) {
    window.alert("Please enter your name properly.");
    fname.focus();
    return false;
}
return true;
}
   //Swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
