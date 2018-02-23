// Init Bootstrap Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Slider Open and Close
function openSlider(){
  $('.slider-ui').removeClass('hidden');
  $('.slider-ui').addClass('show');
}
function closeSlider(){
  $('.slider-ui').removeClass('show');
  $('.slider-ui').addClass('hidden');
  $('.room-line.assign-ui').removeClass('show')
}



// Document Ready
$( document ).ready(function() {

  // Left Nav Active Class
  $('#main-nav a').each(function(){
    var thisPage = $('body').attr('name');
    if ($(this).hasClass(thisPage)) {
      $(this).addClass('active');
    }
  });

  // Left Nav Second depth Active
  $('.second-depth a').each(function(){
    var thisPage = $('body').attr('page');
    if ($(this).hasClass(thisPage)) {
      $(this).addClass('active');
    }
  });

  // Show Second Depth Nav
  if ($('body').hasClass('two-depth')) {
    $('#main-nav').addClass('two-depth');
    var thisPage = $('body').attr('name');
    switch(thisPage) {
      case 'setting':
        $('#nav-setting').show();
        break;
      case 'rateplan':
        $('#nav-rateplan').show();
        break;
      default:
        break;
    }
  }

  // Responsive: Second Depth Show
  var windowWidth = $(window).width();

  // Resize Detect
  $(window).resize(function() {
    windowWidth = $(window).width();
    if( windowWidth >= 1200 ) {
      var thisPage = $('body').attr('name');
      switch(thisPage) {
        case 'setting':
          $('#main-nav').addClass('two-depth');
          $('#nav-setting').show();
          break;
        case 'rateplan':
          $('#main-nav').addClass('two-depth');
          $('#nav-rateplan').show();
          break;
        default:
          break;
      }
    }
    if( windowWidth <= 1199 ) {
      slideSecondNav();
    }
  });

  // Slide Second Nav
  if( windowWidth <= 1199 ) {
    slideSecondNav();
  }

});

slideSecondNav = function(){
  $('#main-nav.two-depth .second-depth').hide();
    var isOpend1 = false;
    var isOpend2 = false;

    $('#main-nav.two-depth .first-depth a').mouseover(function(){
      if($(this).hasClass('setting')) {
        if(isOpend1 == false) {
          $('#main-nav.two-depth .second-depth').hide();
          $('#main-nav.two-depth #nav-setting').slideDown(300);
          isOpend2 = false;
          isOpend1 = true;
        }
      }
      if($(this).hasClass('rateplan')) {
        if(isOpend2 == false) {
          $('#main-nav.two-depth .second-depth').hide();
          $('#main-nav.two-depth #nav-rateplan').slideDown(300);
          isOpend1 = false;
          isOpend2 = true;
        }
      }
    });
    $('#main-nav').mouseleave(function(){
      $('#main-nav.two-depth .second-depth').slideUp(300);
      isOpend1 = false;
      isOpend2 = false;
    });
}
