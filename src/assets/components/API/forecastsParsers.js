// Parsing daily and hourly forecasts data

export function dailyParser(res) {
	return res.DailyForecasts.map((item) => {
		return {
			date: item.Date.slice(0, 10),
			icon: item.Day.IconPhrase,
			temperature: {
				max: item.Temperature.Maximum.Value,
				min: item.Temperature.Minimum.Value,
				unit: item.Temperature.Minimum.Unit
			}
		};
	});	
}

export function hourlyParser(res) {
	return res.map((item) => {
		return {
			date: item.DateTime.slice(0, 10),
			icon: item.IconPhrase,
			temperature: {
				value: item.Temperature.Value,
				unit: item.Temperature.Unit
			}
		}
	});
}