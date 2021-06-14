const findMyGeolocation = () => {

    const status = document.querySelector('.status');

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const geoApiUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='.concat(latitude ,'&longitude=', longitude,'&localityLanguage=en');
        fetch(geoApiUrl)
        .then(result => result.json())
        .then(data => {
            //const city = data.city;
            status.textContent = data.city;
            document.getElementById('button1').addEventListener('click', retrieveToday(data.city));
            //document.getElementById("button2").addEventListener('click', retrieveThreeDays(data.city));
            //document.getElementById("button3").addEventListener('click', retrieveSevenDays(data.city));
        })     
    }

    const error = (error) => {
        alert('Unable to get your location');
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

    const retrieveToday = (city) => 
    {
    const apiKey = '55f2f7d7ccdf3ac608e24a5fe2f7993e';
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q='.concat(city,'&appid=', apiKey, '&units=metric');
    
    fetch(weatherUrl)
    .then(result => result.json())
    .then(data => {
        //document.getElementById('temperature').append(' ', data.main.temp, '°C');
        document.getElementById('temperature').innerHTML += ' ' + data.main.temp + '°C';
        document.getElementById('humidity').append(' ', data.main.humidity, '%');
        document.getElementById('rainChance').append(' ', data.clouds.all, '%');
        document.getElementById('windSpeed').append(' ', data.wind.speed, 'm/s');
        document.getElementById('cloudness').append(' ', data.clouds.all, '%');  
    })
}

/* const retrieveThreeDays = (city) => {

} 
*/

/* const retrieveSevenDays = (city) = > {

}
*/

addEventListener('load', findMyGeolocation());