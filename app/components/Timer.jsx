var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      isRunning: false
    };
  },
  handleSearch: function (city) {
    var that = this;
    this.setState({
      isRunning: true
    });
  },
  componentDidMount: function() {
  },
  componentWillReceiveProps: function(newProps) {
  },
  render: function () {
    return (
      <div>
        <h1 className="text-center page-title">Timer</h1>
      <Clock/>
      </div>
    );
  }
});

module.exports = Timer;
