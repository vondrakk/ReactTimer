var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Countdown = React.createClass({
  getInitialState: function () {
    return {
      seconds: 0,
      state: 'stop'
    };
  },
  handleCountdownComplete: function () {
    if (Notification.permission !== "denied") {
      new Notification("Countdown timer complete.");
    }
  },
  countdown: function() {
    if (this.state.state=='run') {
      this.setState({
        seconds: this.state.seconds-1
      });
      if (this.state.seconds>0) {
        setTimeout(this.countdown,1000);
      } else {
        this.handleCountdownComplete();
      }
    }
  },
  handleSetCountdown: function (strSeconds, action) {
    if (action==='start') {
      if (strSeconds.match(/^[0-9]+$/)) {
        var seconds = parseInt(strSeconds,10);
        this.setState({
          seconds: seconds,
          state: 'run'
        });
        setTimeout(this.countdown,1000);
      } else if (this.state.seconds>0) {
        this.setState({
          state: 'run'
        });
        setTimeout(this.countdown,1000);
      }
    } else if (action==='clear') {
      this.setState({
        seconds:0,
        state: 'stop'
      });
    } else if (action==='pause') {
      this.setState({
        state: 'pause'
      });
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
        <CountdownForm countdownStatus={this.state.state} onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
