var React = require('react');
var WeatherForm = require('WeatherForm');
var FA = require('react-fontawesome');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    if (typeof(this.refs.city.value)==='string' && this.refs.city.value.length>0) {
      this.props.onSearch(this.refs.city.value);
      this.refs.city.value='';
    }
  },  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="city"/><br/>
          <button className="button hollow expanded"><FA name="search"/> Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
