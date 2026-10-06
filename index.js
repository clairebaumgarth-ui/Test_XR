
//calls the map in 
const map = L.map('map').setView([59.919325, 10.752303], 13);

//creates the tile layer to add in markers
var layer = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
map.addLayer(layer);


//activist group icon options
var activist-iconOptions = {
   iconUrl: 'icons/activist-group-icon.webp',
   iconSize: [50, 50]
} ;

// Creating a custom icon
var customIcon = L.icon(activist-iconOptions);

//options for the marker
var markerOptions = {
   clickable: true,
   icon: customIcon
} ;

//add a marker to the map
var hausmania_marker = L.marker([59.919325, 10.752303],markerOptions);
hausmania_marker.addTo(map);
hausmania_marker.bindPopup("<b>Hausmania</b><br>XR, Hackeriet, Folkekjøkken"); 



