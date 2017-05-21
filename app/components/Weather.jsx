var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var Loading = require('Loading');
var ErrorMessage = require('ErrorMessage');
var openWeatherMapApi = require('openWeatherMapApi');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (city) {
    var that = this;
    this.setState({isLoading: true});
    openWeatherMapApi.getCurrentWeather(city).then(
      function(weather) {
        that.setState({
          isLoading: false,
          city: city,
          temperature: weather.temp
        })
      },
      function(err) {
        that.setState({err: err,isLoading: false});
      }
    );
  },
  render: function () {
    var {isLoading, city, temperature, err} = this.state;
    function renderMessage() {
      if (isLoading) {
        return <Loading/>;
      } else if (err) {
        return <ErrorMessage err={err}/>;
      } else if (temperature && city) {
        return <WeatherMessage temperature={temperature} city={city}/>;
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
