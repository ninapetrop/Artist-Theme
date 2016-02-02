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
