// Main JavaScript File

// Toggle Mobile Navigation Menu

var mobileMenu = document.getElementById("mobile-navigation-wrapper").classList;

function toggleMenu() {
  mobileMenu.toggle("open");
}

// Function to display Google Maps location
function initMap() {
  var myLatLng = {lat: 44.025341, lng: -88.537153};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Dr. Kirtida N. Ringwala M.D.'
  });
}