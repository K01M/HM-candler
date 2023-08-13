const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=>{
    menuMobile.classList.toggle('menu--open');
})

const swiperOne = new Swiper('.rews__slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        570: {
            slidesPerView: 3,
        },
    },
});