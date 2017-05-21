var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=e857dd230b174e89511d4e6875704590&units=imperial';
module.exports = {
  getCurrentWeather: function(city) {
    var encodedCity = encodeURIComponent(city);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedCity}`;
    return axios.get(requestUrl).then(
      function(response) {
        if (response.data.cod && response.data.message) {
          // error
          throw new Error(response.data.message);
        }
        return response.data.main;
      },
      function(response) {
        throw new Error(response.data.message);
      }
    );
  }
};
