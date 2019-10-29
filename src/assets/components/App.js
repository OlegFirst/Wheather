import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'reset-css';
import './../scss/index.scss';

import Home from './Home';
import TableLayout from './TableLayout';
import GraphicLayout from './GraphicLayout';
import ErrorMessage from './ErrorMessage';

import { store } from '../redux/storage';
import {
	getDailyForecasts,
	getHourlyForecasts
} from '../redux/actions';
import { probaAction } from '../redux/actions';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				dailyForecasts: null
			},
			errorMessage: null
		}
		this.messageHandler = this.messageHandler.bind(this);
	}
	
	componentDidMount() {
		store.dispatch(getDailyForecasts());
		store.dispatch(getHourlyForecasts());		
		store.subscribe(() => this.setState({data: store.getState()}));
	}
	
	messageHandler() {
		this.setState({
			errorMessage: null
		});
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
						<Route path="/table-layout" render={(props) => <TableLayout {...props} data={this.state.data.dailyForecasts} />} />
						<Route path="/graphic-layout" render={(props) => <GraphicLayout {...props} hourly={false} />} />
					</section>
					<ErrorMessage text={this.state.errorMessage} callBack={this.messageHandler} />
				</div>
			</Router>
		)
	}
}

export default App;