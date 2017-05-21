var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temperature, city, err} = this.props;
    return (
      <div>
        <p>
          The current temperature in {city} is {temperature} degrees.
        </p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
