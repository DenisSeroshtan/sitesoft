$(function() {
  $('.news__item').equalHeights();

  $('.features__slider').mySlider({
    buttons: false,
    autoSlide: true,
    duration: 3000
  });

     /*=================
      accordeon
      =================*/
  $(".acco__title").on('click', function (e) {
    e.preventDefault();

    var
        $this = $(this),
        currentText = $this.next();

    $this.toggleClass('icon-up icon-down');
    currentText.stop(true, true).slideToggle();
  });

});
