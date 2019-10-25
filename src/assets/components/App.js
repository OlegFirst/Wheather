import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'reset-css';
import './../scss/index.scss';

import Home from './Home';
import TableLayout from './TableLayout';
import GraphicLayout from './GraphicLayout';
import ErrorMessage from './ErrorMessage';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Router>
				<div className="application">
					<header className="application__header">
						<Link to="/">Weather APP</Link>
					</header>
					<nav className="application__nav nav">
						<ul className="nav__items">
							<li className="nav__item">
								<Link to="/">Home</Link>
							</li>
							<li className="nav__item">
								<Link to="/table-layout">Table Layout</Link>
							</li>
							<li className="nav__item">
								<Link to="/graphic-layout">Graphic layout</Link>
							</li>
						</ul>
					</nav>				
					<section className="application__container">
						<Route exact path="/" component={Home} />
						<Route path="/table-layout" component={TableLayout} />
						<Route path="/graphic-layout" component={GraphicLayout} />
					</section>
					<ErrorMessage />
				</div>
			</Router>
		)
	}
}

export default App;