import React from 'react';
import GraphicComponent1 from './GraphicComponent1';
import GraphicComponent2 from './GraphicComponent2';

export default function GraphicLayout(props) {
	if (props.data.dailyForecasts == null || props.data.hourlyForecasts == null) {
		return <div className="wait-please"><h2>Wait, please</h2></div>;
	}
	
	return (
		<div className="graphic">
			<h1 className="graphic__title">
				Graphic Layout
			</h1>
			<h2 className="table__part">Daily forecasts</h2>
			<GraphicComponent1 data={props.data.dailyForecasts} />
			<h2 className="table__part">Hourly forecasts</h2>
			<GraphicComponent2 data={props.data.hourlyForecasts} />
		</div>		
	)
}