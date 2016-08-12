var React = require('react');

var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>
        Hi, this is a sample app built by developer <a href = "http://www.kevynquiros.com">Kevyn Quiros</a>.
        This app was built on top of React framework as a learning task
        and it's source is fully available <a href = "https://github.com/nyvek28/ReactWeather">here</a>.
      </p>
    </div>
  );
}

module.exports = About;
