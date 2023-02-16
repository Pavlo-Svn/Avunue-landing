const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        990: {
          slidesPerView: 3,
          loop: false,
        },
        640: {
          slidesPerView: 2,
          loop: true,
        },
        320: {
            slidesPerView: 1,
          },
      },
});


const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');

const body = document.body; 

if (menu && menuBtn){
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })  
}
