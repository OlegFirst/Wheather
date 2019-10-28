// I took this from the API response

import { dailyParser } from './forecastsParsers';

const data = {
  "Headline": {
    "EffectiveDate": "2019-10-30T08:00:00+03:00",
    "EffectiveEpochDate": 1572411600,
    "Severity": 7,
    "Text": "Wearing gloves, hat and scarf recommended to prevent frostbite and hypothermia Wednesday night",
    "Category": "cooler",
    "EndDate": "2019-10-30T20:00:00+03:00",
    "EndEpochDate": 1572454800,
    "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/extended-weather-forecast/324505?lang=en-us",
    "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2019-10-26T07:00:00+03:00",
      "EpochDate": 1572062400,
      "Temperature": {
        "Minimum": {
          "Value": 45,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 56,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=1&lang=en-us"
    },
    {
      "Date": "2019-10-27T07:00:00+03:00",
      "EpochDate": 1572148800,
      "Temperature": {
        "Minimum": {
          "Value": 46,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 63,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=2&lang=en-us"
    },
    {
      "Date": "2019-10-28T07:00:00+03:00",
      "EpochDate": 1572235200,
      "Temperature": {
        "Minimum": {
          "Value": 36,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 57,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 6,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 36,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=3&lang=en-us"
    },
    {
      "Date": "2019-10-29T07:00:00+03:00",
      "EpochDate": 1572321600,
      "Temperature": {
        "Minimum": {
          "Value": 35,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 50,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 6,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=4&lang=en-us"
    },
    {
      "Date": "2019-10-30T07:00:00+03:00",
      "EpochDate": 1572408000,
      "Temperature": {
        "Minimum": {
          "Value": 25,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 43,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 4,
        "IconPhrase": "Intermittent clouds",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=5&lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kyiv/324505/daily-weather-forecast/324505?day=5&lang=en-us"
    }
  ]
}

// Server emulates
export default function fetchDailyForecasts() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(dailyParser(data));
		}, 1000);
		//reject('Error occurred');
	});
}