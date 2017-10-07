<div id="map" style="width:100%;height:100%;background:yellow"></div>

<script>
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(8.7563524, 80.4943286), zoom: 16
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBk3JUfLswH2ontBj7R5HIoBdzS6N_0EyE&callback=myMap"></script>
