var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e857dd230b174e89511d4e6875704590&units=imperial';
module.exports = {
  getCurrentWeather: function(city) {
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;
    return axios.get(requestUrl).then(
      function(response) {
        debugger;
        if (response.data.cod && response.data.name!==city) {
          // error
          var msg = 'Sorry! The OpenWeatherMap API did not recognize that location.';
          if (response.data.name) {
              msg+=` Did you mean ${response.data.name}?`;
          }
          return {success: false, data: msg};
        }
        return {success: true, data: response.data.main};
      },
      function(response) {
        return {success: false, data: response};
      }
    );
  }
};
