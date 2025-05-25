import slider from "./modules/slider";
import responsiveMenu from "./modules/responsive-menu";
import mobileMenu from "./modules/mobile-menu";
import WOW from './libs/wow.min';

document.addEventListener(`DOMContentLoaded`, () =>{
    try{
        slider();
        responsiveMenu();
        mobileMenu();
        new WOW().init();
    } catch(e){
        console.log("Что то не находит на странице");
    }
    
});
