const theMap = L.map('mapped').setView([38.9860, -76.9451], 13);
        const library = L.marker([38.9860, -76.9451]).addTo(theMap); 
        library.bindPopup("<b>McKeldin Library</b>");

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoib2FkZXdvbGUiLCJhIjoiY2s4a3F4NWV6MDA5djNmcHNoMjNhcDFiaSJ9.9StZnVwblvcflkIBrfAKmQ'
        }).addTo(theMap);