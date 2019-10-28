// I took this from the API response

import { hourlyParser } from './forecastsParsers';

const data = [
  {
    "DateTime": "2019-10-26T19:00:00+03:00",
    "EpochDateTime": 1572105600,
    "WeatherIcon": 36,
    "IconPhrase": "Intermittent clouds",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 50,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=19&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=19&lang=en-us"
  },
  {
    "DateTime": "2019-10-26T20:00:00+03:00",
    "EpochDateTime": 1572109200,
    "WeatherIcon": 36,
    "IconPhrase": "Intermittent clouds",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 49,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=20&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=20&lang=en-us"
  },
  {
    "DateTime": "2019-10-26T21:00:00+03:00",
    "EpochDateTime": 1572112800,
    "WeatherIcon": 36,
    "IconPhrase": "Intermittent clouds",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 49,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=21&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=21&lang=en-us"
  },
  {
    "DateTime": "2019-10-26T22:00:00+03:00",
    "EpochDateTime": 1572116400,
    "WeatherIcon": 36,
    "IconPhrase": "Intermittent clouds",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 49,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=22&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=22&lang=en-us"
  },
  {
    "DateTime": "2019-10-26T23:00:00+03:00",
    "EpochDateTime": 1572120000,
    "WeatherIcon": 35,
    "IconPhrase": "Partly cloudy",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 48,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=23&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=1&hbhhour=23&lang=en-us"
  },
  {
    "DateTime": "2019-10-27T00:00:00+03:00",
    "EpochDateTime": 1572123600,
    "WeatherIcon": 35,
    "IconPhrase": "Partly cloudy",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 47,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=0&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=0&lang=en-us"
  },
  {
    "DateTime": "2019-10-27T01:00:00+03:00",
    "EpochDateTime": 1572127200,
    "WeatherIcon": 35,
    "IconPhrase": "Partly cloudy",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 47,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=1&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=1&lang=en-us"
  },
  {
    "DateTime": "2019-10-27T02:00:00+03:00",
    "EpochDateTime": 1572130800,
    "WeatherIcon": 35,
    "IconPhrase": "Partly cloudy",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 47,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=2&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=2&lang=en-us"
  },
  {
    "DateTime": "2019-10-27T03:00:00+03:00",
    "EpochDateTime": 1572134400,
    "WeatherIcon": 35,
    "IconPhrase": "Partly cloudy",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 46,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=3&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=3&lang=en-us"
  },
  {
    "DateTime": "2019-10-27T04:00:00+03:00",
    "EpochDateTime": 1572138000,
    "WeatherIcon": 35,
    "IconPhrase": "Partly cloudy",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 46,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=4&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=4&lang=en-us"
  },
  {
    "DateTime": "2019-10-27T05:00:00+03:00",
    "EpochDateTime": 1572141600,
    "WeatherIcon": 36,
    "IconPhrase": "Intermittent clouds",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 47,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=5&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=5&lang=en-us"
  },
  {
    "DateTime": "2019-10-27T06:00:00+03:00",
    "EpochDateTime": 1572145200,
    "WeatherIcon": 36,
    "IconPhrase": "Intermittent clouds",
    "HasPrecipitation": false,
    "IsDaylight": false,
    "Temperature": {
      "Value": 47,
      "Unit": "F",
      "UnitType": 18
    },
    "PrecipitationProbability": 0,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=6&lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/hourly-weather-forecast/324505?day=2&hbhhour=6&lang=en-us"
  }
]

// Server emulates
export default function hourlyForecasts() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(hourlyParser(data));
		}, 1000);
		//reject('Error occurred');
	});
}