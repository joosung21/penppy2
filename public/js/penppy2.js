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

});