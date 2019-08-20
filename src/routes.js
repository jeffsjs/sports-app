import React, { Component, Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import Home from './pages/home';
import './styles/app.css'

class Routes extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Switch>
						<Route exact path='/' component={() => <Home />} />
						<Redirect from='*' to='/' />
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

export default Routes;
