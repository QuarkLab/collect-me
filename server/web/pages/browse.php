


<div id="map" style="width:100%;height:100%;background:yellow"></div>

<script>
function initMap() {

  window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat:8.7563524, lng: 80.4943286}
  });

  setMarkers(map);

}

function setMarkers(){
  clearMarkers(markers);
  var markers = [];
  markers.push({name: 'Marker 1', lat: 8.7563524, lng: 80.4943286, type:'paper'});
  markers.push({name: 'Marker 2', lat: 8.7560028, lng: 80.4919929, type:'metal'});
  markers.push({name: 'Marker 3', lat: 8.7588532, lng: 80.4927693, type:'plastic'});
  markers.push({name: 'Marker 4', lat: 8.7585297, lng: 80.4938946, type:'glass'});
  markers.push({name: 'Marker 5', lat: 8.7575661, lng: 80.4923844, type:'plastic'});
  markers.push({name: 'Marker 6', lat: 8.762289, lng: 80.489012, type:'metal'});
  markers.push({name: 'Marker 7', lat: 8.759274, lng: 80.500069, type:'paper'});
  markers.push({name: 'Marker 8', lat: 8.752112, lng: 80.495436, type:'glass'});

  for (m in markers){
    if (document.getElementById('chk-'.concat(markers[m]['type'])).checked){
      markers[m] = new google.maps.Marker({
        position: {lat:markers[m]['lat'], lng:markers[m]['lng']},
        map: window.map,
        title: markers[m]['name'],
        icon: 'images/bin-'.concat(markers[m]['type'], '.png')
      });
    }
  }
}

function clearMarkers(markers){
  if (typeof markers !== 'undefined'){
    for (m in markers) {
      markers[m].setMap(null);
    }
  }
}

</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBk3JUfLswH2ontBj7R5HIoBdzS6N_0EyE&callback=initMap"></script>
