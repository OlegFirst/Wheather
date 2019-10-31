import {
	INSERT_DAILY_FORECASTS,
	INSERT_HOURLY_FORECASTS,
	READING_ERROR
} from './actions';

const initialState = {
	dailyForecasts: null,
	hourlyForecasts: null,
	isReadingError: false
}

export default function forecast(state = initialState, action) {
	switch (action.type) {
		case INSERT_DAILY_FORECASTS:		
			return {
				...state,
				dailyForecasts: action.data
			}
		case INSERT_HOURLY_FORECASTS:
			return {
				...state,
				hourlyForecasts: action.data
			}
		case READING_ERROR:
			return {
				...state,
				isReadingError: true
			}
		default: return state;
	}
}