function initialize() {
  // Create an array of styles.
  var styles = [
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        { hue: '#cccccc' },
        { saturation: -100 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        { hue: '#dddddd' },
        { saturation: -100 },
        { lightness: -3 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { hue: '#000' },
        { saturation: -100 },
        { lightness: 20 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'road.arterial',
      elementType: 'labels',
      stylers: [
        { hue: '#cccccc' },
        { saturation: -100 },
        { lightness: 13 },
        { visibility: 'on' }
      ]
    },{
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        { hue: '#ffffff' },
        { saturation: -100 },
        { lightness: 100 },
        { visibility: 'off' }
      ]
    },{
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        { hue: '#ffffff' },
        { saturation: 0 },
        { lightness: 100 },
        { visibility: 'off' }
      ]
    },{
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: 0 },
        { visibility: 'on' }
      ]
    }
  ];
  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  var myLatlng = new google.maps.LatLng(-37.822001,144.966980);
  var offsetLat = new google.maps.LatLng(-37.820501,144.966980);

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 15,
    center: offsetLat,
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  var map = new google.maps.Map(document.getElementById('map_canvas'),
    mapOptions);

  var image = new google.maps.MarkerImage('../assets/images/marker@2x.png', null, null, null, new google.maps.Size(90,100));

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Move-in",
      icon: image,
      optimized: false
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    var latLng = marker.getPosition();
    map.setCenter(myLatlng);
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize";
  document.body.appendChild(script);
}
