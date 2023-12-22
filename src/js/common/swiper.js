import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const initCatalogSlider = () => {
    new Swiper('.swiper', {
        direction: 'vertical',
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-slide-button-next',
            prevEl: '.swiper-slide-button-prev',
        },
    });
}
initCatalogSlider();