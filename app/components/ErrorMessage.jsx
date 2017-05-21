var React = require('react');
var ErrorMessage = React.createClass({
  render: function () {
    var {err} = this.props;
    return (
      <div>
        <b style="font-color:red">{err}</b>
      </div>
    );
  }
});

module.exports = ErrorMessage;
