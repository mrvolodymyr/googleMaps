    var myCenter = new google.maps.LatLng(48.919621,24.711522);

    function initialize() {
        var xmlUrl = 'map.xml';
        var mapProp = {
          center:myCenter,
          zoom:14,
          url:xmlUrl,
          dataType: "xml",
          success: parseXML,
          error: onXMLLoadFailed,
          mapTypeId:google.maps.MapTypeId.ROADMAP
          };

    function onXMLLoadFailed(){
        alert("You have some isssues with your browser");
    }

        var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

        var marker = new google.maps.Marker({
        position:myCenter,
        map: map,
        icon: 'img/Icon.ico',
        animation: google.maps.Animation.DROP
        });
         marker.setMap(map);
    
       function parseXML(xml){
            var bounds = new google.maps.LatLngBounds();
            $(xml).find("items").each(function(){
            //Read the name, address, latitude and longitude for each Marker
            var name1 = $(this).find('name').text();
            var lat = $(this).find('lat').text();
            var lng = $(this).find('lng').text();
            var markerCoords = new google.maps.LatLng(parseFloat(lat), 
                                                      parseFloat(lng));
            bounds.extend(markerCoords);
            var marker = new google.maps.Marker({position: markerCoords, map:map});
        });

      };
}
    google.maps.event.addDomListener(window, 'load', initialize);