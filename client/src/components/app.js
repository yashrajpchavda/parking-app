import { h, Component } from 'preact';
import { Router, Route } from 'preact-router';

import AuthRoute from './../util/AuthRoute';
import Header from './header';

// Code-splitting is automated for routes
import Login from '../routes/login';
import Home from '../routes/home';


const App = () => {
	return (
		<div id="app">
			<Header />
			<Router>
				<Route path="/" component={Home} />
				<AuthRoute path="/login" component={Login} />
			</Router>
		</div>
	);
	
}

export default App;