const map = L.map('map').setView([59.919325, 10.752303], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const Hausmania = L.marker([59.919325, 10.752303]).addTo(map);
