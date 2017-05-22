var React = require('react');
var WeatherForm = require('WeatherForm');
var FA = require('react-fontawesome');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    if (this.refs.city && typeof(this.refs.city.value)==='string' && this.refs.city.value.length>0) {
      this.props.onSearch(this.refs.city.value);
      this.refs.city.value='';
    }
  },  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" placeholder="Search weather by city" ref="city"/><br/>
          <button className="button hollow expanded"><FA name="search"/> Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
