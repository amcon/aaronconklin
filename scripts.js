$(function() {

$('.fa-bars').click(function(event) {
  $('.nav').toggleClass('nav-open');
});

$('.fa-angle-double-left').click(function(event) {
  $('.nav').toggleClass('nav-open');
});

$('.fa-angle-double-down').click(function(event) {
  const who = $('.who').position().top;

  $('body').animate({scrollTop: who}, 500)
});


});
