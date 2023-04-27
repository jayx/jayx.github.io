// Load navigation from one location
// $(document).ready(function(){
//   $('#site-header').load('partials/site-header.html');
//   $('#site-footer').load('partials/site-footer.html');
//   $('#main-nav').load('partials/nav.html nav');
// });

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

// Check localstorage for theme, else set theme and localstorage
var html = document.getElementsByTagName("html")[0];
html.setAttribute("theme", localStorage.getItem('theme') || 'light');

$(document).ready(function(){
  // switch between light/dark themes
  toggleTheme = function () {
    var theme = localStorage.getItem('theme') !== 'dark' ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyTheme(theme);
  };

  // change css href to apply a theme
  applyTheme = function (theme) {
    if (theme === 'dark') {
      $('html').attr('theme', 'dark');
    } else {
      $('html').attr('theme', 'light');
    }
    $(document).trigger('themeChanged.bc.themeToggle', theme);
  };

  // listen for theme change in any other tab
  window.addEventListener('storage', function (e) {
    if (e.key === 'theme') {
      applyTheme(e.newValue);
    }
  });

  // theme toggler functionality
  $('[data-toggle-theme]').on('click', function () {
    toggleTheme();
    return false;
  });

});

// Check overflow for gallery component
$(window).on("load resize", function() {
  $sliderWidth = $('[data-gallery-slider]').get(0).scrollWidth;
  $galleryWidth = $('[data-gallery]').width();
  if ($sliderWidth > $galleryWidth) {
    $('[data-gallery-slider]').addClass('slider--scrolling');
  } else {
    $('[data-gallery-slider]').removeClass('slider--scrolling');
  }
});
