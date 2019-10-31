import React from 'react';

export default function HourlyCard(props) {	
	if (props.data == null) {
		return;
	}
	
	return (
		<div className="card">
			<div className="card__date">{props.data.time}</div>
			<div className="card_caption">{props.data.icon}</div>
			<h4 className="card__temperature">
				<span>{props.data.temperature.value} {props.data.temperature.unit}</span>				
			</h4>
		</div>
	)
}