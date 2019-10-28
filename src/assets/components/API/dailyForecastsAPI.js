const axios = require('axios');
const API_KEY = 'ct3yQyWGh3XvJ65VhxrmBblN0mESBu2l';

function dailyForecast() {
	axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/324505', {
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
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

function hourlyForecast() {
	axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/324505', {
		params: {
			apikey: API_KEY
		}
	})
	.then((res) => {
		console.log(res.data);
		console.log(res.data.DateTime);
	})
	.catch((err) => {
		console.log(err);
	})
}

export { dailyForecast, hourlyForecast };