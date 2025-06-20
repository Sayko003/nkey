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

    const catalogSwiper = new Swiper('.catalog__swiper', {
            modules: [Pagination],
            direction: 'horizontal',
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 3,
            pagination: {
                el: '.catalog__swiper-pagination',
                clickable: true,
            },
            spaceBetween: 30,
            breakpoints: {
                320:{
                    slidesPerView: 1,
                },
                768: {
                slidesPerView: 2,
                },
                1350:{
                    slidesPerView: 3,
                },
            }
            
    });

    const reviewsSwiper = new Swiper('.reviews__swiper', {
            modules: [Navigation,Pagination],
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 5000,
            },
            slidesPerView: 2,
            pagination: {
                el: '.reviews__swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.reviews__swiper-button-next',
                prevEl: '.reviews__swiper-button-prev',
            },
            spaceBetween: 30,
            breakpoints: {
                360: {
                slidesPerView: 1,
                },
                1350:{
                    slidesPerView: 2,
                },
            }
    });
}

export default slider;