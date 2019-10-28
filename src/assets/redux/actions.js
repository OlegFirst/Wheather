import fetchDailyForecasts from '../components/API/dailyForecastsData';
import fetchHourlyForecasts from '../components/API/hourlyForecastsData';

// Action types
export const INSERT_DAILY_FORECASTS = 'INSERT_DAILY_FORECASTS';
export const DAILY_FORECASTS_PASSED = 'DAILY_FORECASTS_PASSED';
export const INSERT_HOURLY_FORECASTS = 'INSERT_HOURLY_FORECASTS';

// Action creators
// - Daily
export function insertDailyForecast(data) {
	return {
		type: INSERT_DAILY_FORECASTS,
		data
	}
}

// - Hourly
export function insertHourlyForecast(data) {
	return {
		type: INSERT_HOURLY_FORECASTS,
		data
	}
}

// - Get daily forecasts from API
export function getDailyForecasts() {
	return dispatch => {
		return fetchDailyForecasts()
			.then(res => {
				dispatch(insertDailyForecast(res));
			})
			.catch(err => {
				console.log(err);
			});
	}
}

// - Get hourly forecasts from API
export function getHourlyForecasts() {
	return dispatch => {
		return fetchHourlyForecasts()
			.then(res => {
				dispatch(insertHourlyForecast(res));
			})
			.catch(err => {
				console.log(err);
			});
	}
}