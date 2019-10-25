import React from 'react';
import 'reset-css';
import './../scss/index.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Router>
				<div className="application">
					<header className="application__header">
						<h1>Wheather APP</h1>
					</header>
					<nav className="application__nav nav">
						Nav
					</nav>
					<section className="application__container container">
						Section
					</section>
				</div>
			</Router>
		)
	}
}

export default App;
