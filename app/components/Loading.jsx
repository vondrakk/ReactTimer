var React = require('react');
var FA = require('react-fontawesome');

var Loading = React.createClass({
  render: function () {
    return (
      <h3 className="callout large">
        <FA size="2x" name="spinner" pulse />
      </h3>
    );
  }
});

module.exports = Loading;
