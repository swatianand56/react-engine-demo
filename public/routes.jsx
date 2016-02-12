
'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var SPA = require('./views/spa.jsx');
var Section1 = require('./views/section1.jsx');
var Section2 = require('./views/section2.jsx');
var Section3 = require('./views/section3.jsx');

var routes = module.exports = (
  <Route path='/spa' handler={SPA}>
    <Route name='completed' handler={Section1} />
    <Route name='pending' handler={Section2} />
    <Route name='notstarted' handler={Section3} />
	<Router.DefaultRoute handler={Section1} />
  </Route>
);
