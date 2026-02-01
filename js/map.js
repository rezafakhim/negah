var Center=new google.maps.LatLng(38.075980,46.278968);

function initialize() {
    var map_options = {
        center:Center,
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

	var map=new google.maps.Map(document.getElementById("googleMap"),map_options);

    var marker=new google.maps.Marker({
        position:Center,
        icon:'images/map-marker.png'
    });
 
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize); 