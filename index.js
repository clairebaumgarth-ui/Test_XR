const map = L.map('map').setView([59.919325, 10.752303], 13);

var layer = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

map.addLayer(layer);

var hausmania_marker = L.marker([59.919325, 10.752303]);
hausmania_marker.addTo(map);
hausmania_marker.bindPopup("<b>Hausmania</b><br>XR, Hackeriet, Folkekjøkken").openPopup();  



