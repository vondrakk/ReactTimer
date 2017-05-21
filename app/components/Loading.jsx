var React = require('react');
var FA = require('react-fontawesome');

var Loading = React.createClass({
  render: function () {
    return (
      <div>
        <FA name="spinner" pulse />
      </div>
    );
  }
});

module.exports = Loading;
