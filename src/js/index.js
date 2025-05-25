import slider from "./modules/slider";
import WOW from './libs/wow.min';
document.addEventListener(`DOMContentLoaded`, () =>{
    slider();
    new WOW().init();
});
