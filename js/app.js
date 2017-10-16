$(document).ready(function(){
  $('.slideshow').slick({
    autoplay: true,
    autoplaySpeed:3000
  });
});

$( ".accordian" ).click(function() {
  $( this ).toggleClass( "active" );
});

$( "p" ).click(function() {
  $( this ).toggleClass( "highlight" );
});
