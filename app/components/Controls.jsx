var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired
  },
  start: function () {
    this.props.onClick('start');
  },
  pause: function () {
    this.props.onClick('pause');
  },
  clear: function () {
    this.props.onClick('clear');
  },
  render: function () {
    var {countdownStatus} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'run') {
        return <button className="button alert" onClick={this.pause}>Pause</button>;
      } else {
        return <button className="button primary" onClick={this.start}>Start</button>;
      }
    };
    var renderClearButton = () => {
      var {countdownStatus} = this.props;
      if (countdownStatus!=='stop') {
        return <button className="button alert hollow" onClick={this.clear}>Clear</button>;
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        {renderClearButton()}
      </div>
    );
  }
});

module.exports = Controls;
