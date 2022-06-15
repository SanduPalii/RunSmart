const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: true,
  
  loop: true,

  zoom: true,

  autoHeight: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }

});