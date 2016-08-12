var React = require('react'),
    ReactDOM = require('react-dom'),
    Main = require('Main'),
    Weather = require('Weather'),
    About = require ('About'),
    Examples = require ('Examples'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = "/" component = {Main}>
      <Route path = "examples" component = {Examples}/>
      <Route path = "about" component = {About}/>
      <IndexRoute component = {Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
