var React = require('react');
var ErrorMessage = React.createClass({
  render: function () {
    var {err} = this.props;
    return (
      <div className="callout alert large">
        <b>{err}</b>
      </div>
    );
  }
});

module.exports = ErrorMessage;
