var React = require('react');
var Clock = require('Clock');
var CountdownForm = React.createClass({
  getInitialState: function () {
    return {
      isRunning: false
    };
  },
  onSubmit: function (e) {
    e.preventDefault();
    this.props.onSetCountdown(this.refs.seconds.value);
    this.refs.seconds.value='';
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onSubmit} ref="form" className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
