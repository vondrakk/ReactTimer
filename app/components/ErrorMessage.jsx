var React = require('react');
var ErrorMessage = React.createClass({
  render: function () {
    return (
      <div className="callout alert large">
        <b>{this.props.err}</b>
      </div>
    );
  }
});

module.exports = ErrorMessage;
