(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    new WOW().init();

    $('body > .overlay').fadeIn().delay(2000).queue(function(){
        $(this).addClass("slideOutLeft").dequeue();
    });
    // .addClass('slideOutLeft');
  }); // end of document ready
})(jQuery); // end of jQuery name space