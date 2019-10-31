//import { fetchDailyForecastsAPI, fetchHourlyForecastsAPI } from '../components/API/forecastsAPI';
import fetchDailyForecasts from '../components/API/dailyForecastsData';
import fetchHourlyForecasts from '../components/API/hourlyForecastsData';
import { dailyParser, hourlyParser } from '../components/API/forecastsParsers';

const axios = require('axios');
const API_KEY = 'ct3yQyWGh3XvJ65VhxrmBblN0mESBu2l';

// Action types
export const INSERT_DAILY_FORECASTS = 'INSERT_DAILY_FORECASTS';
export const INSERT_HOURLY_FORECASTS = 'INSERT_HOURLY_FORECASTS';
export const READING_ERROR = 'READING_ERROR';

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

// - Get daily forecasts from FILE
export function getDailyForecasts() {
	return dispatch => {
		return fetchDailyForecasts()
			.then(res => {
				dispatch(insertDailyForecast(res));
			})
			.catch(err => {
				console.log('Can`t read data');
				dispatch(READING_ERROR);
			});
	}
}

// - Get hourly forecasts from FILE
export function getHourlyForecasts() {
	return dispatch => {
		return fetchHourlyForecasts()
			.then(res => {
				dispatch(insertHourlyForecast(res));
			})
			.catch(err => {
				alert('Can`t read data');
			});
	}
}

// - Get daily forecasts from API
export function getDailyForecastsAPI() {
	return (dispatch) => {
		axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/324505', {		
			params: {
				apikey: API_KEY
			}
		})
		.then(res => {
			dispatch(insertDailyForecast(dailyParser(res.data)));
		})
		.catch(err => {
			console.log('Can`t read data');
			dispatch(READING_ERROR);
		});
	}
}

// - Get hourly forecasts from API
export function getHourlyForecastsAPI() {
	return (dispatch) => {
		axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/324505', {
			params: {
				apikey: API_KEY
			}
		})
		.then(res => {
			dispatch(insertHourlyForecast(hourlyParser(res.data)));
		})
		.catch(err => {
			console.log('Can`t read data');
			dispatch(READING_ERROR);
		});
	}
}