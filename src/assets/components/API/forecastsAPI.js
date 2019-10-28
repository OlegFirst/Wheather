const axios = require('axios');
const API_KEY = 'ct3yQyWGh3XvJ65VhxrmBblN0mESBu2l';

function dailyForecasts(callBack) {
	axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/324505', {
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		params: {
			apikey: API_KEY
		}
	})
	.then((res) => {
		return callBack({isSuccess: true, data: res});
	})
	.catch((err) => {
		return callBack({isSuccess:false, data: null});
	})
}

function hourlyForecasts() {
	axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/324505', {
		params: {
			apikey: API_KEY
		}
	})
	.then((res) => {
		return callBack({isSuccess:true, data: res});
	})
	.catch((err) => {
		return callBack({isSuccess:false, data: res});
	})
}

export { dailyForecasts, hourlyForecasts };