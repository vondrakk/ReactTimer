var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Controls = require('Controls');
describe('Controls', () => {

  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
      it('should render pause when started', () => {
        var onClickSpy = expect.createSpy();
        var controls = TestUtils.renderIntoDocument(<Controls onClick={onClickSpy} countdownStatus="run"/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        var btn = $el.find('button:contains(Pause)');
        expect(btn.length).toBe(1);
      });
      it('should render clear button when rendered', () => {
        var onClickSpy = expect.createSpy();
        var controls = TestUtils.renderIntoDocument(<Controls onClick={onClickSpy} countdownStatus="run"/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        var btn = $el.find('button:contains(Clear)');
        expect(btn.length).toBe(1);
      });
      it('should render start when paused', () => {
        var onClickSpy = expect.createSpy();
        var controls = TestUtils.renderIntoDocument(<Controls onClick={onClickSpy} countdownStatus=""/>);
        var $el = $(ReactDOM.findDOMNode(controls));
        var btn = $el.find('button:contains(Start)');
        expect(btn.length).toBe(1);
      });
  });

})
