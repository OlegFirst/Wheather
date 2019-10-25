import React, { useState, useEffect } from 'react';
import { dailyForecast } from './GetForecasts';

export default function TableLayout() {
	//let [matrix, setMatrix] = useState({})
	
	useEffect(() => {
		dailyForecast();
	});
	
	return (
		<div className="table">
			<h1>
				TableLayout
			</h1>
		</div>
	)
}