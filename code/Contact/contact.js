//CODE FROM GOOGLE MAPS OFFICIAL DOCUMENTATION
//I let the API in the html document to facilitate the reading and testing of the page

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -34.6032962, lng: -58.3842347};    
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }