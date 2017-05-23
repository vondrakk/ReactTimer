var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Countdown = require('Countdown');
describe('Countdown', () => {

  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('spy tests', () => {
      it('should update seconds if valid seconds are submitted', () => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        var $el = $(ReactDOM.findDOMNode(countdown));

        countdown.handleSetCountdown('109');
        expect(countdown.state.seconds).toBe(109);
      });

      it('should not update seconds if empty seconds are submitted', () => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        var $el = $(ReactDOM.findDOMNode(countdown));

        countdown.handleSetCountdown('109');
        countdown.handleSetCountdown('');
        expect(countdown.state.seconds).toBe(109);
      });

      it('should not update seconds if invalid seconds are submitted', () => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        var $el = $(ReactDOM.findDOMNode(countdown));

        countdown.handleSetCountdown('109');
        countdown.handleSetCountdown('qwerty');
        expect(countdown.state.seconds).toBe(109);
      });

      it('should countdown seconds if seconds is greater than zero', () => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        var $el = $(ReactDOM.findDOMNode(countdown));

        countdown.handleSetCountdown('109');
        expect(countdown.state.seconds).toBe(109);
        setTimeout(() => {
          expect(countdown.state.seconds).toBe(108);
        }, 1050);
      });
  });

})
