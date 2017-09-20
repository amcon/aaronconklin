$(function() {

window.sr = ScrollReveal();
sr.reveal('.scroll-item', {origin: 'bottom', distance: '500px', duration: 1100, delay: 200});

$('.fa-bars').click(function(event) {
  $('.nav').toggleClass('nav-open');
});

$('.fa-angle-double-left').click(function(event) {
  $('.nav').toggleClass('nav-open');
});

$('.fa-angle-double-down').click(function(event) {
  $('body, html').animate({scrollTop: 635}, 500)
});


$('.logo').click(function(event) {
  window.location.href = "index.html";
});

setTimeout(function() {
  if (typeof google === 'object' && typeof google.maps === 'object') {
      myMap();
      console.log('map loaded');
    } else {
      $('#map').css('background-color', 'white');
      console.log('map did not load');
    };
}, 1000);

var mapOptions;
var map;
var marker;

function myMap() {
  mapOptions = {
      center: new google.maps.LatLng(40.695062, -73.949799),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  marker = new google.maps.Marker({position: new google.maps.LatLng(40.695062, -73.949799)});

  marker.setMap(map);
};

$('#theaterengine').click(function(event) {
  window.location.href = "theaterengine.html";
});

$('#nissan').click(function(event) {
  window.location.href = "nissan.html";
});

$('#goodsantiques').click(function(event) {
  window.location.href = "goodsantiques.html";
});

$('#theaterengine-title').click(function(event) {
  window.location.href = "theaterengine.html";
});

$('#nissan-title').click(function(event) {
  window.location.href = "nissan.html";
});

$('#goodsantiques-title').click(function(event) {
  window.location.href = "goodsantiques.html";
});

});
