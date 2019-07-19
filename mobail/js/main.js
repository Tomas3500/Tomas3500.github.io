;(function($){
   $ (function(){
      $('i').on('click',function () {
         $('html, body').animate({scrollTop: 0},500);
      });
      $('.fade-1').slick({
         arrows: false,
         autoplay: true,
         dots:true,
         speed: 500,
         fade: true,
         asNavFor: '.fade-2'
      });
      $('.fade-2').slick({
         arrows: false,
         autoplay: true,
         speed: 500,
         fade: true,
         asNavFor: '.fade-1',
         centerMode: true,
         focusOnSelect: true
      });



   });
})(jQuery);