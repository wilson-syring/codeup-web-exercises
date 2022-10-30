'use strict'
let weatherIt = {
    initialize: function () {
        document.getElementById('btnWeather').addEventListener('click', weatherIt.weatherFind);
        document.getElementById('btnLocation').addEventListener('click', weatherIt.location);
    },
    weatherFind: function () {
        var lat = document.getElementById('latitude').value;
        var lon = document.getElementById('longitude').value;
        var cnt = 5;
        var key = weatherKey;
        var units = 'imperial';
        var url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${key}&units=${units}`;
        $.ajax(url).done(function (data) {
            console.log(data);
            weatherIt.weatherShow(data);
            return data.json;
        })

    },
    location: function () {
        var opts = {
            enableHighAccuracy: true,
            timeout: 1000 * 10,
            maximumAge: 1000 * 60 * 5,
        };
        navigator.geolocation.getCurrentPosition(weatherIt.gotLoc, weatherIt.failLoc, opts);

    },
    gotLoc: function (position) {
        document.getElementById('latitude').value = position.coords.latitude;
        document.getElementById('longitude').value = position.coords.longitude;
    },
    failLoc: function (error) {
        console.error(error);
    },
    weatherShow: function (data) {
        console.log(data);
        let row = document.querySelector('.weather.row');
        row.innerHTML = data.daily.map((day, idx) => {
            if (idx <= 4) {
                var dateTime = new Date(day.dt * 1000)
                return `<div class="row ">
                            <div class="col-auto">
                                <div class="card">
                                     <h5 class="card-title text-center p-2">${dateTime.toDateString()}</h5>
                                     <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" class="card-img-top" alt="${day.weather[0].description}"
                                    <div class="card-body">
                                        <h3 class="card-title">${day.weather[0].main}</h3>
                                        <p class="card-text">High:${day.temp.max.toFixed(0)}°F</p>
                                        <p class="card-text">Low:${day.temp.min.toFixed(0)}°F</p>
                                        <p class="card-text">Feels like:${day.feels_like.day.toFixed(0)}°F</p>
                                        <p class="card-text">Pressure:${day.pressure}</p>
                                        <p class="card-text">Humidity:${day.humidity}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>`;

            }
        }).join('');

    },
};

weatherIt.initialize();
mapboxgl.accessToken = mapKey;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.401411, 29.492467],
    zoom: 1,
    projection: 'globe'
});

map.on('style.load', () => {
    map.setFog({});
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
    })
);
map.addControl(new mapboxgl.NavigationControl());