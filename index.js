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
    { name: "Joao Tragtenberg", coords: [-8.050000, -34.900002], info: "Participatory design of instruments",url:"https://www.instagram.com/jtragtenberg",photo: 'joaotragtenberg.jpeg' },
    { name: "Fabian Sguiglia", coords: [-34.603722,-58.381592], info: "Interactive audiovisual installations",url:"https://www.sguiglia.com.ar/",photo: 'fabiansguiglia.jpeg' },
    { name: "Juan Ramos", coords: [-34.73722,-58.381592], info: "Digital Musical Instruments design",url:"https://bandoneon.ar/",photo: 'juanramos.png' },
    { name: "Ximena Alarcón", coords: [6.230833, -75.590553], info: "Relational Listening Interfaces",url:"https://www.ximenaalarcon.net/",photo: 'ximenaalarcon.jpeg' },
    { name: "Tiago Brizolara", coords: [-27.026, -48.651], info: "Body Expressivity",url:"https://www.instagram.com/tiago.brizolara",photo: 'tiagobrizolara.jpg' },
    { name: "Edu Meneses", coords: [45.508888, -73.561668], info: "Digital Luthier",url:"https://www.edumeneses.com/",photo: 'edumeneses.jpeg' },
    { name: "Gustavo Guzmán", coords: [-33.947487, -70.673676], info: "Gestures in music interaction",url:"https://teo523.github.io/nime_latam_map/",photo: 'gustavoguzman.png' },
    { name: "María José Rios", coords: [-33.447487, -70.673676], info: "Audiovisual Textile Interfaces",url:"https://vestibles.cl/",photo: 'mariajoserios.jpg' },
    { name: "Luam Clarindo", coords: [-25.441105, -49.276855], info: "Free improvisation",url:"https://luamclarindo.com/",photo: 'luamclarindo.png' },
    { name: "Cristohper Ramos Flores", coords: [19.7028,-101.1920], info: "Hyper-instruments",url:"https://www.kuturani.com.mx/",photo: 'cristohperramos.png' },
    { name: "Vitor Pinheiro", coords: [-25.941105, -49.276855], info: "Immersive audio",url:"https://www.instagram.com/vitorpinheiroprod/",photo: 'vitorpinheiro.jpeg' },
    { name: "Daniel Escobar Vázquez", coords: [3.420556, -76.522224], info: "Interactive Audiovisual Installations",url:"https://www.danielescobar.co/",photo: 'danielescobar.png' },
    { name: "Flavio Luiz Schiavoni", coords: [-21.13583, -44.26000], info: "Music Computing",url:"https://alice.ufsj.edu.br/",photo: 'flavioluiz.jpeg' },
    { name: "Isabela Corintha Almeida", coords: [-8.050000, -34.900002], info: "Music Improvisation and Machine Learning",url:"https://scholar.google.com/citations?user=gdej3wIAAAAJ&hl=en/",photo: 'isabelacorintha.jpeg' },
    { name: "Leandro Souza", coords: [-8.150000, -34.900002], info: "Experimental Digital Technologies",url:"https://teo523.github.io/nime_latam_map/",photo: 'gustavoguzman.png' },
    { name: "Cristiano Figueiro", coords: [-12.974722,-38.476665], info: "Experimental Digital Lutherie",url:"https://teo523.github.io/nime_latam_map/",photo: 'gustavoguzman.png' },
    { name: "Rodrigo Diaz", coords: [ 52.517,13.400], info: "Physical Modelling and AI",url:"https://rodrigodzf.com/",photo: 'rodrigodiaz.png' },
    { name: "Felipe Otondo", coords: [-39.819588,-73.245209], info: "Immersive Audio",url:"https://otondo.net/",photo: 'felipeotondo.jpeg' }








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

