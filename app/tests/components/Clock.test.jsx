var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');
describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
      it('should render clock to output', () => {
        var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
        var $el = $(ReactDOM.findDOMNode(clock));
        var actualText = $el.find(".clock-text").text();
        expect(actualText).toBe('01:02');
      });
  });

  describe('formatSeconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    it('should format seconds', () => {
      expect(clock.formatSeconds(615)).toBe('10:15');
    })

    it('should format seconds', () => {
      expect(clock.formatSeconds(61)).toBe('01:01');
    })
  });

})
