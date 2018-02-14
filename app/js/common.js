$(function() {
 /*=================
     equal heights for block
 =================*/

  $('.news__item').equalHeights();

/*=================
    slider news section
=================*/
  $('.features__slider').mySlider({
    buttons: false,
    autoSlide: true,
    duration: 3000
  });

/*=================
    accordeon features
=================*/
  $(".acco__title").on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        currentText = $this.next();

    $this.toggleClass('icon-up icon-down');
    currentText.stop(true, true).slideToggle();
  });

  /*=================
      mobile menu
  =================*/
  (function () {
    $('.hamburger').on('click', function (e) {
      e.preventDefault();
      var $this = $(this),
          menu = $this.attr('href'),
          elemMenu = $(menu);
      elemMenu.slideToggle(600, function () {
        if(elemMenu.css('display') === "none") {
          elemMenu.removeAttr('style');
        }
      });
      $this.toggleClass('is-active');
    })
  })();
/*=================
    smooth scroll to header
=================*/
  $('a[href^="#js"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 'slow', 'swing');
  });
/*=================
    slider footer
=================*/
  $('.footer__slider').mySlider({
    buttons: true,
    dots: false,
    btnArray: ['',''],
  });


});
















