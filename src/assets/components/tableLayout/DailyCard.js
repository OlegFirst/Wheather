import React from 'react';

export default function DailyCard(props) {	
	if (props.data == null) {
		return;
	}
	
	return (
		<div className="card">
			<div className="card__date">{props.data.date}</div>
			<div className="card_caption">{props.data.icon}</div>
			<h4 className="card__temperature">
				<span>{props.data.temperature.max} {props.data.temperature.unit}</span>/
				<span>{props.data.temperature.min} {props.data.temperature.unit}</span>
			</h4>
			<div className="card__average-temperature">Aver.temp.: {props.data.temperature.average} F</div>
		</div>
	)
}