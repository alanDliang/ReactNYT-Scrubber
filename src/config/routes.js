var React = require('react');

var Main = require('../components/Main');
var Search = require('../components/Search');
var Saved = require('../components/Saved');


var Router = require('react-router');
var Route = Router.Route;


var IndexRoute	= Router.IndexRoute

module.exports = (
	<Route path="/" component={Main}>

		<Route path="Search" component={Search} />
		<Route path="Saved" component={Saved} />

		<IndexRoute component={Search} />
	</Route>

);
