const swiper = new Swiper('.review-slider', {
  loop: false,
  slidesPerView: 'auto',
  //   centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoHeight: true,
});
// const swiper = new Swiper('.review-slider', {
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });
window.onload = () => {
  window.onscroll = () => {
    if (window.scrollY < 500) {
      document.querySelector('.scroll').classList.add('hide');
    } else if (window.scrollY > 500) {
      document.querySelector('.scroll').classList.remove('hide');
    }
  };
};
