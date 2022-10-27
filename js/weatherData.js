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
        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${key}&units=${units}`;
        $.ajax(url).done(function(data){
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
    failLoc: function(error){
        console.error(error);
    },
    weatherShow: function(response){
        console.log(response);
    },
};

weatherIt.initialize();