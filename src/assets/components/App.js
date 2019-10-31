import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'reset-css';
import './../scss/index.scss';
import Home from './Home';
import TableLayout from './tableLayout/TableLayout';
import GraphicLayout from './graphicLayout/GraphicLayout';
import { store } from '../redux/storage';
import {
	getDailyForecasts,
	getHourlyForecasts,
	getDailyForecastsAPI,
	getHourlyForecastsAPI
} from '../redux/actions';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				dailyForecasts: null,
				hourlyForecasts: null
			}
		}
	}
	
	componentDidMount() {
		// Get forecasts from API
		store.dispatch(getDailyForecastsAPI());
		store.dispatch(getHourlyForecastsAPI());
		// Get forecasts from FILE
		// store.dispatch(getDailyForecasts());
		// store.dispatch(getHourlyForecasts());		
		store.subscribe(() => {
			this.setState({data: store.getState()});
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
								<Link to="/graphic-layout">Graphic Layout</Link>
							</li>
						</ul>
					</nav>				
					<section className="application__container">
						<Route exact path="/" component={Home} />
						<Route path="/table-layout" render={(props) => <TableLayout {...props} data={this.state.data} />} />
						<Route path="/graphic-layout" render={(props) => <GraphicLayout {...props} data={this.state.data} />} />
					</section>
				</div>
			</Router>
		)
	}
}

export default App;