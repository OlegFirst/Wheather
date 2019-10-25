import React, { useState, useEffect } from 'react';
import { dailyForecast, hourlyForecast } from './GetForecasts';

export default function TableLayout() {
	//let [matrix, setMatrix] = useState({})
	
	useEffect(() => {
		dailyForecast();
		//hourlyForecast();
	});
	
	return (
		<div className="table">
			<h1>
				TableLayout
			</h1>
		</div>
	)
}