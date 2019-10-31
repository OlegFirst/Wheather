const axios = require('axios');
const API_KEY = 'ct3yQyWGh3XvJ65VhxrmBblN0mESBu2l';

function fetchDailyForecastsAPI() {
	axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/324505', {		
		params: {
			apikey: API_KEY
		}
	})
	.then((res) => {
		console.log(res.data.DailyForecasts);
	})
	.catch((err) => {
		console.log(err);
	})
}

function fetchHourlyForecastsAPI() {
	axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/324505', {
		params: {
			apikey: API_KEY
		}
	})
	.then((res) => {
		console.log(res.data.DateTime);
	})
	.catch((err) => {
		console.log(err);
	})
}

export { fetchDailyForecastsAPI, fetchHourlyForecastsAPI };