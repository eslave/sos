let bodyToggle = true;

document.getElementById("hamburger-menu").addEventListener("click",function (){

    this.classList.toggle("hamburger-menu_active")
    document.getElementById("hamburger-opened-menu").classList.toggle("hamburger-opened-menu_active")
    let hamburgerElement = document.getElementsByClassName("hamburger-opened-menu__element");
    let accelerator = 0.95;
    if(bodyToggle){
        document.body.style.overflow="hidden"
        bodyToggle =! bodyToggle

        for( let i =0;i<hamburgerElement.length;i++){
            accelerator *= 1.02;
            hamburgerElement[i].style.transition= accelerator + "s";
            hamburgerElement[i].style.opacity= "1"
            hamburgerElement[i].style.marginRight= "0"

        }

    }
    else{
        document.body.style.overflow="auto"
        bodyToggle =! bodyToggle
        for( let i =0;i<hamburgerElement.length;i++){
            hamburgerElement[i].style.transition=  "0s";
            hamburgerElement[i].style.opacity= "0"
            hamburgerElement[i].style.marginRight= "65px"

        }


    }








})
var swiper = new Swiper('.main-swiper-container', {

    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: {
        invert: false,
    },
    allowTouchMove: false,

    speed: 800,
});

