var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var CountdownForm = require('CountdownForm');
describe('CountdownForm', () => {

  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  describe('spy tests', () => {
      it('should call onSubmit if form submitted', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);
        expect(spy).toHaveBeenCalledWith('109');
      });
  });

})
