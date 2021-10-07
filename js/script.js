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
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
iconMenu.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
});
document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('[name="scroll-link"]');

  scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const link = e.target.closest('[name="scroll-link"]');
      const scrollingSectionId = link.hash.split('#')[1];
      const scrollingSection = document.getElementById(scrollingSectionId);
      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }
      e.preventDefault();
      scrollingSection.scrollIntoView({block: 'start', behavior: 'smooth'});
    });
  });
});
