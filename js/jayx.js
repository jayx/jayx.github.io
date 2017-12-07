// Load navigation from one location
$(document).ready(function(){
  $('.site-header').load('partials/site-header.html .heading');
  $('#main-nav').load('partials/nav.html #nav-main');
});
// Adjust header
var headerHeight = $('header').height() / 2;
$(document).scroll(function(e){
  var fromTop = $(window).scrollTop();
  // console.log(fromTop);
  if (fromTop > headerHeight) {
    $('html').addClass('zoom--out');
  } else {
    $('html').removeClass('zoom--out');
  }
});
