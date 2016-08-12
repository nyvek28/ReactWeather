var axios = require('axios');

//APPID: 2b203ae1388a342732a54c5d680900d5
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=2b203ae1388a342732a54c5d680900d5&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location),
        requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
