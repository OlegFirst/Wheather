// Parsing daily and hourly forecasts data

export function dailyParser(res) {
	return res.DailyForecasts.map((item) => {
		return {
			date: item.Date.slice(0, 10),
			icon: item.Day.IconPhrase,
			temperature: {
				max: item.Temperature.Maximum.Value,
				min: item.Temperature.Minimum.Value,
				average: +((item.Temperature.Maximum.Value + item.Temperature.Minimum.Value) / 2).toFixed(1),
				unit: item.Temperature.Minimum.Unit
			}
		};
	});	
}

export function hourlyParser(res) {
	return res.map((item) => {		
		return {
			date: item.DateTime.slice(0, 10),
			time: getTime(item.DateTime),
			icon: item.IconPhrase,
			temperature: {
				value: item.Temperature.Value,
				unit: item.Temperature.Unit
			}
		}
	});
}

function getTime(arg) {
	const timePattern = /[T]{1}[\d\W]*[+]/g;
	let time = arg.match(timePattern)[0];
	time = time.replace('T', '');
	time = time.replace('+', '');
	return time;
}