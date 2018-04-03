// Init Bootstrap Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Bottom Slider Open & Close
function openSlider(){
  $('.slider-ui').removeClass('hidden');
  $('.slider-ui').addClass('show');
}
function closeSlider(){
  $('.slider-ui').removeClass('show');
  $('.slider-ui').addClass('hidden');
  $('.room-line.assign-ui').removeClass('show')
}

// PMS Slider Open & Close
function openPmsSlider(type){
  if(type === 'edit'){
    $('.pms-slider#edit').fadeIn(300);
  } else if(type === 'create'){
    $('.pms-slider#create').fadeIn(300, function() {
      $('#name').focus();
    });
  } else if(type === 'canceled'){
    $('.pms-slider#canceled').fadeIn(300);
  }
}
function closePmsSlider(){
  $('.pms-slider').fadeOut(300);
}

var windowWidth = $(window).width();

// Document Ready
$( document ).ready(function() {

  // Tootip at Folded Nav
  $('#main-nav').mouseover(function(){
    if($(this).hasClass('folded')) {
      $('#main-nav nav a').tooltip({ placement: 'right' });
    } else {
      $('#main-nav nav a').tooltip('hide');
    }
  });

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
      case 'payment':
        $('#nav-payment').show();
        break;
      default:
        break;
    }
  }

  // Dashboard Weather Expend
  $('.dashboard-weather').mouseover(function(){
    $('.dashboard-weather-expend').show();
  });
  $('.dashboard-weather').mouseout(function(){
    $('.dashboard-weather-expend').hide();
  });

  // DEMO 지울 것: 할인설정 저장버튼 슬라이더
  $('.chart-row .form-control').click(function(){
    openSlider();
  });

  // Responsive: Second Depth Show

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
        case 'payment':
          $('#main-nav').addClass('two-depth');
          $('#nav-payment').show();
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

  // Hide PMS Slider
  $('.pms-slider').hide();

  // Chart-base Create Reservation
  $('.chart-base .dd').click(function(){
    openPmsSlider('create');
  });

});

// Slide Down Nav
slideSecondNav = function(){
  $('#main-nav.two-depth .second-depth').hide();
    var isOpend1 = false;
    var isOpend2 = false;
    var isOpend3 = false;

  $('#main-nav.two-depth .first-depth a').mouseover(function(){
    if(windowWidth <= 1199) {
      if($(this).hasClass('setting')) {
        if(isOpend1 == false) {
          $('#main-nav.two-depth .second-depth').hide();
          $('#main-nav.two-depth #nav-setting').slideDown(300);
          isOpend2 = false;
          isOpend3 = false;
          isOpend1 = true;
        }
      }
      if($(this).hasClass('rateplan')) {
        if(isOpend2 == false) {
          $('#main-nav.two-depth .second-depth').hide();
          $('#main-nav.two-depth #nav-rateplan').slideDown(300);
          isOpend1 = false;
          isOpend3 = false;
          isOpend2 = true;
        }
      }
      if($(this).hasClass('payment')) {
        if(isOpend2 == false) {
          $('#main-nav.two-depth .second-depth').hide();
          $('#main-nav.two-depth #nav-payment').slideDown(300);
          isOpend1 = false;
          isOpend2 = false;
          isOpend3 = true;
        }
      }
    }
  });
  $('#main-nav').mouseleave(function(){
    // console.log(windowWidth)
    if(windowWidth <= 1199) {
      $('#main-nav.two-depth .second-depth').slideUp(300);
      isOpend1 = false;
      isOpend2 = false;
      isOpend3 = false;
    }
  });
}

// Fold Nav
foldNav = function(){
  $('#main-nav').toggleClass('folded');
  $('#sub-nav').toggleClass('folded');
  $('.content-container').toggleClass('folded');
}
