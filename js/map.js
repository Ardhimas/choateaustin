function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 30.2774063, lng: -97.8115344},
    zoom: 8
  });
}
