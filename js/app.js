$(document).ready(function(){
  $('.slideshow').slick({
    autoplay: true,
    autoplaySpeed:3000
  });


  $( '#mobile-menu' ).click(function() {
    $( 'nav' ).toggleClass( "active" );
  });

$( ".mobile-only" ).click(function() {
  $(this).parent().toggleClass( "active" );
});


});
