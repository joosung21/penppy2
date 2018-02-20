// Init Bootstrap Tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


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

  if ($('body').hasClass('two-depth')) {
    $('#main-nav').addClass('two-depth');
  }


});