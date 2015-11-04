$(document).ready(function() {
  $('section#screenshots a').on('click', function() {
    console.log('test')
    $('div#modal img').attr('src', $(this).attr('data-image-url'));
  });

  var nav = $('.navbar-fixed-top');
  var distance = $('.navbar-fixed-top').offset();

  if(distance.top >= 300){
    if(scroll >= 300){
      nav.addClass('effect');
    }
    else{
      nav.removeClass('effect');
    }
  }

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if(scroll >= 300){
      nav.addClass('effect');
    }
    else{
      nav.removeClass('effect');
    }
  });
});

smoothScroll.init({
  speed: 700,
  easing: 'easeInOutCubic',
  updateURL: false,
  offset: 0
});
