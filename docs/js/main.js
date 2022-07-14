// Navigation arrows
const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  
  loop: true,

  autoHeight: false,

  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

$(function() {
  // Catalog tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  //in card button - more details link >< back
  function toggleSlide(item) {
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  }
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal
  $('[data-modal=consultation').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
  })

  //buttons - close popup
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  })

  // //buttons - buy now
  // $('.button_mini').on('click', function(){
  //   $('.overlay, #order').fadeIn('slow');
  // })

  //separate element in buy now card
  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  })

  //jquery validate form
  function validateForms(form){
    $(form).validate({
      rules:{
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Как к вам обращаться?",
        phone: "Введите свой номер телефона",
        email: {
          required: "Напишите свой емайл",
          email: "Введите правильно почтовый адрес"
        }
      }
    });
  }

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');
  
});