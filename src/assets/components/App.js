import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'reset-css';
import './../scss/index.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Router>
				<div className="application">
					<header className="application__header">
						Weather APP
					</header>
					<nav className="application__nav nav">
						<ul className="nav__items">
							<li className="nav__items">Home</li>
							<li className="nav__items">Table Layout</li>
							<li className="nav__items">Graph layout</li>
						</ul>
					</nav>
				</div>
			</Router>
		)
	}
}

export default App;