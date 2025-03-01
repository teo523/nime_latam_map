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
    { name: "Teo Dannemann", coords: [51.509865, -0.118092], info: "Hacking musical instrument",url:"https://teodannemann.wordpress.com/" ,photo: 'teodannemann.png'},
    { name: "Byron Remache", coords: [-0.22000, -78.51250], info: "Musical Haptics",url:"https://www.researchgate.net/profile/Byron-Remache-Vinueza" ,photo: 'byronremache.png'},
    { name: "Alvaro Lopez", coords: [33.95335, -117.39616], info: "Algorithmuc Generative Music",url:"https://teodannemann.wordpress.com/",photo: 'alvarolopez.jpeg' },
    { name: "Jimena Arruti", coords: [-34.901112, -56.164532], info: "Music Composer",url:"https://www.linkedin.com/in/jimena-arruti/",photo: 'jimenaarruti.jpeg' },
    { name: "Patricia Cadavid", coords: [51.454514, -2.587910], info: "Decolonial Aesthetics",url:"https://www.patriciacadavid.net/",photo: 'patriciacadavid.jpg' },
    { name: "Juan Pablo Martinez", coords: [52.950001, -1.150000], info: "Instruments Design",url:"https://sites.google.com/view/pszjm3/",photo: 'juanpablomartinez.jpg' },
    { name: "Joao Tragtenberg", coords: [-8.050000, -34.900002], info: "Participatory design of instruments",url:"https://www.linkedin.com/in/jo%C3%A3o-tragtenberg-23240859/?originalSubdomain=br",photo: 'joaotragtenberg.jpeg' },
    { name: "Fabian Sguiglia", coords: [-34.603722,-58.381592], info: "Interactive audiovisual installations",url:"https://www.sguiglia.com.ar/",photo: 'fabiansguiglia.jpeg' },
    { name: "Juan Ramos", coords: [-34.603722,-58.381592], info: "Digital Musical Instruments design",url:"https://bandoneon.ar/",photo: 'juanramos.png' },
    { name: "Ximena Alarcón", coords: [6.230833, -75.590553], info: "Relational Listening Interfaces",url:"https://www.ximenaalarcon.net/",photo: 'ximenaalarcon.jpeg' },

];

// Add markers to the map with popups
locations.forEach(location => {
    var greenIcon = L.icon({
    iconUrl: location.photo,

    iconSize:     [30,30], // size of the icon
});
    var marker = L.marker(location.coords,{icon: greenIcon}).addTo(map);
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

