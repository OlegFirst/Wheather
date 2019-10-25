const axios = require('axios');
const API_KEY = 'ct3yQyWGh3XvJ65VhxrmBblN0mESBu2l';

// Get 5 days of daily forecast for Kyiv
function dailyForecast() {
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

export { dailyForecast }