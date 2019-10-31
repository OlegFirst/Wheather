import React from 'react';
import DailyCard from './DailyCard';
import HourlyCard from './HourlyCard';

export default function TableLayout(props) {	
	if (props.data.dailyForecasts == null || props.data.hourlyForecasts == null) {
		return <div className="wait-please"><h2>Wait, please</h2></div>;
	}
	
	let average = {
		dailyForecasts: null,
		hourlyForecasts: null
	}
	
	average.dailyForecasts = props.data.dailyForecasts.reduce((total, item) => {
		return total + item.temperature.average;
	}, 0);
	average.dailyForecasts = (average.dailyForecasts / props.data.dailyForecasts.length).toFixed(2);
	
	average.hourlyForecasts = props.data.hourlyForecasts.reduce((total, item) => {		
		return total + item.temperature.value;
	}, 0);
	average.hourlyForecasts = (average.hourlyForecasts / props.data.hourlyForecasts.length).toFixed(2);
	
	return (
		<div className="table">
			<h1 className="table__title">
				Table Layout
			</h1>
			<h2 className="table__part">Daily forecasts</h2>
			<section className="table__box-wrapper">			
				<ul className="table__box">
					{
						props.data.dailyForecasts.map((item, index) => {
							return (
								<li key={index}>
									<DailyCard data={item} />
								</li>
							)
						})
					}
				</ul>
				<h3>Average temperature during {props.data.dailyForecasts.length} days = {average.dailyForecasts} F</h3>
			</section>
			<h2 className="table__part">Hourly forecasts. {props.data.hourlyForecasts[0].date}</h2>
			<section className="table__box-wrapper">			
				<ul className="table__box">
					{
						props.data.hourlyForecasts.map((item, index) => {
							return (
								<li key={index}>
									<HourlyCard data={item} />
								</li>
							)
						})
					}
				</ul>
				<h3>Average temperature during {props.data.hourlyForecasts.length} hours = {average.hourlyForecasts} F</h3>
			</section>
		</div>
	)
}