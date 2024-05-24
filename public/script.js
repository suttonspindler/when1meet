export function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.POLYLINE,
          google.maps.drawing.OverlayType.RECTANGLE,
        ],
      },
      markerOptions: {
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      },
      circleOptions: {
        fillColor: '#ffff00',
        fillOpacity: 0.8,
        strokeWeight: 2,
        clickable: false,
        editable: true,
        zIndex: 1,
      },
    });
  
    drawingManager.setMap(map);
  }
  
  window.initMap = initMap;