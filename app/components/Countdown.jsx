var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Countdown = React.createClass({
  getInitialState: function () {
    return {
      seconds: 0
    };
  },
  handleCountdownComplete: function () {
    if (Notification.permission !== "denied") {
      new Notification("Countdown timer complete.");
    }
  },
  countdown: function() {
    this.setState({
      seconds: this.state.seconds-1
    });
    if (this.state.seconds>0) {
      setTimeout(this.countdown,1000);
    } else {
      this.handleCountdownComplete();
    }
  },
  handleSetCountdown: function (strSeconds) {
    if (strSeconds.match(/^[0-9]+$/)) {
      var seconds = parseInt(strSeconds,10);
      this.setState({
        seconds: seconds
      });
      setTimeout(this.countdown,1000);
    }
  },
  componentDidMount: function() {
    // check if we have notification permission
    if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
      });
    }
  },
  componentWillReceiveProps: function(newProps) {
  },
  render: function () {
    return (
      <div>
        <Clock totalSeconds={this.state.seconds}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
