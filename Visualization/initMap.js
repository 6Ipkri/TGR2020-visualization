
    var position44 = {
        lat: 19.166391,
        lng: 99.901908
    };
    var position45 = {
        lat: 19.177149,
        lng: 99.812571
    }
    var position46 = {
        lat: 19.176477,
        lng: 99.88926
    }
    var position47 = {
        lat: 19.021294,
        lng: 99.897926
    }
    var pmArr = [position44,position45,position46,position47];

    var map;
    var infowindow;
    var contentString =
  '<div><h3>0</h3></div>';

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: position44,
        zoom: 16,
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeId: "roadmap"
    });
    infowindow = new google.maps.InfoWindow({
        content: contentString
      });
    createMarker()
    markerBLE()
    run();
}
//https://media.giphy.com/media/rXw2mSDlLUEgM/giphy.gif
function createMarker(){
    var bounds = new google.maps.LatLngBounds();
    var icon = {
        url: "images/antenna.png", // url
        scaledSize: new google.maps.Size(80, 80), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    var iconH = {
        url: "images/house.png", // url
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    for (var i = 0; i < pmArr.length; i++){
        var marker = new google.maps.Marker({
            position: pmArr[i],
            title: "Hello World!",
            icon: icon,
            map: map
          });
          google.maps.event.addListener(
            marker,
            "click",
            (function(marker, i) {
              return function() {
                var context =
                  '<div><h3>'+i+'</h3></div>';
                infowindow.setContent(context);
                infowindow.open(map, marker);
              };
            })(marker, i)
          );
          markerArr.push(marker);
      
        //   var marker2 = new google.maps.Marker({
        //     position: houseArr[i],
        //     title: "Hello World!",
        //     icon: iconH,
        //     map: map
        //   });
          bounds.extend(pmArr[i]);
    }
    map.fitBounds(bounds);
    map.setZoom(16);
  
}

function markerBLE(){
    var ble = {
        lat: 19.011284,
        lng: 99.897956
    }
    var icon = {
        url: "https://media.giphy.com/media/rXw2mSDlLUEgM/giphy.gif", // url
        scaledSize: new google.maps.Size(100, 100), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
    var markerBLE = new google.maps.Marker({
        position: ble,
        title: "Hello World!",
        icon: icon,
        map: map
      });
}