var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center page-title">About</h1>
        <div className="row">
          <div className="column small-centered">
            <img src="https://www.udemy.com/staticx/udemy/images/v5/logo-green.svg" width="80" height="26"/>
            <p>
              <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview">Complete React Web App Developer Course</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="column small-3 shrink">
            <div className="callout secondary">
              <h4>Overview</h4>
            </div>
            <div className="callout">
              <ul>
                <li>159 Lectures</li>
                <li>29.6 hours</li>
                <li>Certificate of Completion</li>
              </ul>
            </div>
          </div>

          <div className="column">
            <div className="callout secondary">
              <h4>Details</h4>
            </div>
            <div className="callout">
              <p>This course is project-based. You're responsible for writing code in every video as well as completing challenges I've designed to help test and reinforce what you've learned. This course is about creating, not watching!</p>
              <p>You'll be programming and deploying three React apps:</p>
              <ol>
                <li>A weather application</li>
                <li>A countdown/timer app</li>
                <li>A todo application with social login and Firebase integration</li>
              </ol>
            </div>
          </div>

          <div className="column">
            <div className="callout secondary">
              <h4>Technologies</h4>
            </div>
            <div className="callout">
              <p>This course covers more than just React. You'll learn about the rich ecosystem of 3rd-party tools, such as:</p>
              <ol>
                <li>React v15</li>
                <li>Redux</li><li>Webpack v1</li>
                <li>Firebase</li>
                <li>Git/GitHub</li>
                <li>Heroku</li>
                <li>Chrome developer tools</li>
                <li>React and Redux developer tools</li>
                <li>Karma</li>
                <li>Mocha</li>
                <li>Foundation</li>
                <li>Axios</li>
                <li>And more!</li>
              </ol>
            </div>
          </div>

          <div className="column">
            <div className="callout secondary">
              <h4>Certificate of Completion</h4>
            </div>
            <div className="callout">
              <p>Coming Soon</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = About;
