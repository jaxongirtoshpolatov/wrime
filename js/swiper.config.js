// buy slider configure js code
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            centeredSlides: false,

        },
        780: {
            slidesPerView: 3,
        },
        730: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        430: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        360: {
            slidesPerView: 1,
            spaceBetween:  10,
        },
        200: {
            spaceBetween: 10,
        }
    },
  });