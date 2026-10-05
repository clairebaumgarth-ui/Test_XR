const map = L.map('map').setView([59.919325, 10.752303], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const Hausmania = L.marker([59.919325, 10.752303], { icon: customIcon }).addTo(map);


const customIcon = L.icon({
    iconUrl: 'https://www.pngmart.com/image/713626', // Path to your image
    iconSize: [38, 38], // Size of the icon (width, height)
    iconAnchor: [19, 38], // Point of the icon that corresponds to marker's location
    popupAnchor: [0, -38] // Point from which the popup should open relative to the iconAnchor
});
