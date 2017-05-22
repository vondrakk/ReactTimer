var React = require('react');
var {Link, IndexLink} = require('react-router');
var Timer = require('Timer');
var Countdown = require('Countdown');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();
      var city = encodeURIComponent(this.refs.city.value);
    if (city.length>0) {
      this.refs.city.value='';
      window.location.hash = '#/?q='+city;
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="https://github.com/vondrakk" target="_blank">V</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
