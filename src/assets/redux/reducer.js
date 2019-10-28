import {
	INSERT_DAILY_FORECASTS,
	DAILY_FORECASTS_PASSED,
	INSERT_HOURLY_FORECASTS
} from './actions';

const initialState = {
	dailyForecasts: null,
	isDailyForecastsPassed: false,
	hourlyForecasts: null
}

export default function forecast(state = {}, action) {
	switch (action.type) {
		case 'INSERT_DAILY_FORECASTS':
			return {
				...state,
				dailyForecasts: '1',
				hourlyForecasts: '2'
			}
		case 'INSERT_DAILY_FORECASTS1':
			return Object.assign({}, state, {
				dailyForecasts: action.data
			});
		case 'INSERT_HOURLY_FORECASTS':
			return state.hourlyForecasts = Object.assign({}, state, {
				hourlyForecasts: action.data
			});
		case 'DAILY_FORECASTS_PASSED': {
			return state.hourlyForecasts = Object.assign({}, state, {
				isDailyForecastsPassed: true
			});
		}
		default: return state;
	}
}