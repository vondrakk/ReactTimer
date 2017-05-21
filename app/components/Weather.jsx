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
        if (weather.success === true) {
          that.setState({
            isLoading: false,
            city: city,
            temperature: weather.temp
          });
        } else {
          if (typeof(weather.data) === 'string') {
            that.setState({err: weather.data,isLoading: false});
          } else {
            that.setState({err: weather.data.message,isLoading: false});
          }
        }
      },
      function(err) {
        that.setState({err: err.message,isLoading: false});
      }
    );
  },
  render: function () {
    function renderMessage(state) {
      if (state.isLoading) {
        return <Loading/>;
      } else if (state.err) {
        return <ErrorMessage err={state.err}/>;
      } else if (state.temperature && state.city) {
        return <WeatherMessage temperature={state.temperature} city={state.city}/>;
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage(this.state)}
      </div>
    );
  }
});

module.exports = Weather;
