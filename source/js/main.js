$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  rows:1,
  dots:false,
  prevArrow: '<div class="slider-left slider__button"><img src="img/arrow-prev.png" alt="предъидущий"></div>',
  nextArrow: '<div class="slider-right slider__button"><img src="img/arrow-next.png" alt="следующий"></div>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows:1,
      }
    }
  ]
});


$(".slidss").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  rows:1,
  dots:false,
  prevArrow: '<div class="slidss-left slidss__button"><img src="img/arrow-prev.png" alt="предъидущий"></div>',
  nextArrow: '<div class="slidss-right slidss__button"><img src="img/arrow-next.png" alt="следующий"></div>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows:1,
      }
    }
  ]
});

$('.slids__btn').click(function(){
  $(this).parent().find('.hidden').slideToggle(300);
})


// $('.details__text-b').on('click', function(){
//   $('.details__text-right').removeClass('details__text-right--active');
//   $(this).parent().addClass('details__text-right--active');
// });




$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
  e.preventDefault();
});






$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.menu').toggleClass('menu--visible');
  });

  $('.menu__close ').click(function(event) {
    $('.menu').toggleClass('menu--visible');
  });
});



$(function(){
  $('.menu').on('click', function(){
    $('.burger__header_menu').slideToggle(500, function(){

    });
  });
  $('.logo__items').on('click', function(){
    $('.menu').hide();
  });
});










$('[data-modal=get_start]').on('click', function(){
  $('.overlay, #get__start').fadeIn('slow');
});
$('.info__close, .overlay').on('click', function(){
  $('.overlay, #get__start').fadeOut('slow');
});
