var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  if(windowWidth > 1500) {
    if(scroll_pos > 253) {
      $('.chart-row.header').css('top', (scroll_pos - 261) + 'px');
    }
  } else {
    console.log(scroll_pos);
    if(scroll_pos > 340) {
      $('.chart-row.header').css('top', (scroll_pos - 348) + 'px');
    }
  }
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;

  }

});