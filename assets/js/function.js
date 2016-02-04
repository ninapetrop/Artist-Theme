// Trigger top bar with post name after window reaches bottom of feature image
$(function() {
  $(window).scroll(function() {
    var scroll = $(this).scrollTop();

    if (scroll >= $('.topBarTrigger').offset().top) {
        $('.topBar').removeClass('hidden');
    } else {
        $('.topBar').addClass('hidden');
    }
  });
});

// Push out menu
$(document).ready(function() {
	$('.toggle-button').click(function(){
    $('.slideout-menu').toggleClass('slideout-open');
    $('main').toggleClass('pushLeft');
    $('.bar').toggleClass('open');
  });
});
