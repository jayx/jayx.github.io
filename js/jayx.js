// Load navigation from one location
$(document).ready(function(){
  $('#main-nav').load('nav.html #nav-main');
});
// Adjust header
$(document).scroll(function(e){
  var fromTop = $(window).scrollTop();
  console.log(fromTop);
  if (fromTop > 200) {
    $('header.box').addClass('zoom--out');
  } else {
    $('header.box').removeClass('zoom--out');
  }
});
