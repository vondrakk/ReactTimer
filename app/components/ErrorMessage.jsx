var React = require('react');
var FA = require('react-fontawesome');

var ErrorMessage = React.createClass({
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function () {
    return (
      <div className="reveal text-center" id="error-modal" data-reveal>
        <h4><FA name="exclamation-circle"/> An Error has occurred.</h4>
        <p>{this.props.err}</p>
        <p>
          <button className="close-button hollow" data-close="" data-reveal="" aria-label="Close modal">
            <span aria-hidden="true">&times;</span>
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorMessage;
