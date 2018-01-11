// Load navigation from one location
$(document).ready(function(){
  // $('.site-header').load('/partials/site-header.html .heading');
  $('.site-footer').load('/partials/site-footer.html .content__para');
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
// Toggle functions
$(document).ready(function(){
  // var tickTock = 600;
  // $('[data-toggle-trigger]').mouseenter(function(){
  //   $(this).click();
  // });
  $('[data-toggle-trigger]').click(
    function(){
      var ToggleTrigger = $(this).attr('data-toggle-trigger');
      var ToggleTarget = $('[data-toggle-target="'+ToggleTrigger+'"]');
      if ($(this).hasClass('target-is-open')) {
        if ($(this).hasClass('icon--close')) {
          $(this).removeClass('icon--close').addClass('icon--menu-toggle')
        }
        $(this).removeClass('target-is-open');
        $(ToggleTarget).removeClass('is-open');
      } else {
        if ($(this).hasClass('icon--menu-toggle')) {
          $(this).removeClass('icon--menu-toggle').addClass('icon--close')
        }
        $('[data-toggle-trigger].target-is-open').removeClass('target-is-open');
        $('[data-toggle-target].is-open').removeClass('is-open');
        $(this).addClass('target-is-open');
        $(ToggleTarget).addClass('is-open');
      }
    }
  );
  $('[data-tab-trigger]').click(
    function(){
      var TabTrigger = $(this).attr('data-tab-trigger');
      var TabTarget = $('[data-tab-target="'+TabTrigger+'"]');
      $('[data-tab-trigger].tab-is-open').removeClass('tab-is-open');
      $('[data-tab-target].tab-open').removeClass('tab-open');
      $(this).addClass('tab-is-open');
      $(TabTarget).addClass('tab-open');
      // if ($(this).hasClass('tab-is-open')) {
      //   $(this).removeClass('tab-is-open');
      //   $(TabTarget).removeClass('tab-open');
      // } else {
      //   $('[data-tab-trigger].tab-is-open').removeClass('tab-is-open');
      //   $('[data-tab-target].tab-open').removeClass('tab-open');
      //   $(this).addClass('tab-is-open');
      //   $(TabTarget).addClass('tab-open');
      // }
    }
  );
});

  // $('[data-slide-trigger]').click(
  //   function(){
  //     var clickTrigger = $(this).attr("data-slide-trigger");
  //     var clickTarget = $('[data-slide-target="'+clickTrigger+'"]');
  //     if ($(this).parent().index() === 0 && $( "[data-js-section='false']" ).first()) {
  //       if ($( "[data-js-section='false']" ).first().find("[data-js-error]").is(":visible")) {
  //           $( "[data-js-section='false']" ).first().find("[data-js-error]").slideToggle();
  //       }
  //       $(clickTarget).addClass('active');
  //       $('.page:not(.slide)').removeClass('page--slide-closed').addClass('page--slide-opening').delay(tickTock).queue(
  //         function(next){
  //           $(this).removeClass('page--slide-opening').addClass('page--slide-open');
  //           next();
  //       }
  //     );
  //   }
