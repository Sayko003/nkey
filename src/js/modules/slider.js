import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const slider = () =>{

    const headerSwiper = new Swiper('.header__swiper', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        autoplay: {
            delay: 5000,
        },
        crossFade: true,
        effect: 'fade',
        slidesPerView: 1,
        pagination: {
            el: '.header__swiper-pagination',
            clickable: true,
        },

        });
}

export default slider;