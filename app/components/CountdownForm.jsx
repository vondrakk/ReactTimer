var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownForm = React.createClass({
  handleClick: function (action) {
    if (this.refs.seconds) {
      // why is this event firing on load?
      this.props.onSetCountdown(this.refs.seconds.value, action);
      this.refs.seconds.value='';
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" className="countdown-form">
          <input className="seconds-input" type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <Controls onClick={this.handleClick} countdownStatus={this.props.countdownStatus}/>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
