import {
	INSERT_DAILY_FORECASTS,
	DAILY_FORECASTS_PASSED,
	INSERT_HOURLY_FORECASTS
} from './actions';

const initialState = {
	dailyForecasts: null,
	isDailyForecastsPassed: false,
	hourlyForecasts: []
}

export default function forecast(state = initialState, action) {
	switch (action.type) {
		case 'INSERT_DAILY_FORECASTS':		
			return {
				...state,
				dailyForecasts: action.data
			}
		case 'INSERT_HOURLY_FORECASTS':
			return {
				...state,
				hourlyForecasts: action.data
			}
		case 'DAILY_FORECASTS_PASSED': {
			return state.hourlyForecasts = Object.assign({}, state, {
				isDailyForecastsPassed: true
			});
		}
		default: return state;
	}
}