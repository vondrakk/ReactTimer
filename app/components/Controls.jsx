var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temperature, city, err} = this.props;
    return (
      <div className="callout success large">
        <h4>
          The current temperature in {city} is {temperature} degrees.
        </h4>
      </div>
    );
  }
});

module.exports = WeatherMessage;
