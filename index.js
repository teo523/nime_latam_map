// Include Leaflet.js in your HTML file:
// <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
// <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

// Create a map and set its initial view to a world overview
var map = L.map('map',{
                center: [20, 10],
                zoom: 1.5,
                
                rotate: true,

       
                }).setView([20, 0], 2);


// Add a tile layer (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define points of interest
var locations = [
    { name: "Teo Dannemann", coords: [40.7128, -74.0060], info: "Hacking musical instrument",url:"https://teodannemann.wordpress.com/" },
    { name: "Juan Martinez", coords: [48.8566, 2.3522], info: "Soma design",url:"https://teodannemann.wordpress.com/" },
    { name: "Patricia Cadavid", coords: [35.6895, 139.6917], info: "Kiphu and ancestral musical instruments",url:"https://teodannemann.wordpress.com/" },
    { name: "Ximena Alarcon", coords: [-33.8688, 151.2093], info: "Virtual collaboration",url:"https://teodannemann.wordpress.com/" }
];

// Add markers to the map with popups
locations.forEach(location => {
    var marker = L.marker(location.coords).addTo(map);
    marker.bindPopup(`<b>${location.name}</b><br>${location.info}`);
    
    // Show popup on hover
    marker.on('mouseover', function (e) {
        this.openPopup();
    });
    
    marker.on('click', function() {
                window.open(location.url, '_blank').focus()});

    marker.on('mouseout', function (e) {
        this.closePopup();
    });
});

map.setBearing(180)

