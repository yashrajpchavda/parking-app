import { h, Component } from 'preact';
import { Router, Route } from 'preact-router';

import AuthRoute from './../util/AuthRoute';
import Header from './header';

// Code-splitting is automated for routes
import Login from '../routes/login';
import Home from '../routes/home';


const App = () => {

	let currentUrl;
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	const handleRoute = e => {
		currentUrl = e.url;
	};

	
	return (
		<div id="app">
			<Header />
			<Router onChange={handleRoute}>
				<Route path="/" component={Home} />
				<AuthRoute path="/login" component={Login} />
			</Router>
		</div>
	);
	
}

export default App;