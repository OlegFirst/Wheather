import React, { useEffect } from 'react';

export default function GraphicComponent2(props) {	
	useEffect(() => {	
		const CTX = document.querySelector('#hourly').getContext('2d');
		preparation(CTX, props.data.length);
		canvasBuild(CTX, {xMax: props.data.length, yMax: 70}, 'green', props.data.map(item => item.temperature.value));
	});
	
	// Get canvas` size
	let canvasSize = ((ctx) => { return {xMax: ctx.canvas.width, yMax: ctx.canvas.height} });
	
	// Preparations
	let preparation = (ctx, xMax) => {
		const CANVAS_SIZE = canvasSize(ctx);
		// - OX
		ctx.beginPath();
		ctx.moveTo(0, CANVAS_SIZE.yMax / 2);
		ctx.lineTo(CANVAS_SIZE.xMax, CANVAS_SIZE.yMax / 2);
		ctx.strokeStyle = '#286090';
		ctx.stroke();
		// - OY
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, CANVAS_SIZE.yMax);		
		ctx.stroke();
		// - X
		const KX = CANVAS_SIZE.xMax / xMax;
		let index = 0;
		let y = CANVAS_SIZE.yMax / 2;
		while (index < xMax) {
			ctx.beginPath();
			ctx.moveTo(index * KX, y - 5);
			ctx.lineTo(index * KX, y + 5);
			ctx.stroke();
			ctx.fillText(index + 1, index * KX, y + 15);
			index ++;
		}
	}
	
	let canvasBuild = (ctx, dataSize, color, data) => {
		const CANVAS_SIZE = canvasSize(ctx);
		const KX = CANVAS_SIZE.xMax / dataSize.xMax;
		const KY = CANVAS_SIZE.yMax / ( dataSize.yMax * 2);		
		ctx.beginPath();
		ctx.strokeStyle = color;		
		let prev = {x: 0, y: calculateY(data[0])};
		ctx.moveTo(prev.x, prev.y);
		ctx.fillText(data[0], prev.x, prev.y + 10);
		data.forEach((item, index) => {
			if (index == 0 )
				return;			
			prev.x = index * KX;
			prev.y = calculateY(item);
			ctx.lineTo(prev.x, prev.y);
			ctx.fillText(item, prev.x, prev.y + 10);
			ctx.stroke();			
			ctx.beginPath();
			ctx.moveTo(prev.x, prev.y);
		});
		
		function calculateY(y) {			
			return CANVAS_SIZE.yMax / 2 - y * KY;
		}
	}
	
	return (		
		<div className="canvas__wrapper">
			<canvas id="hourly" className="canvas__container" width='200' height='100'></canvas>
			<span className="canvas__message-temperature">Temperature, F</span>
			<span className="canvas__message-time">time</span>
		</div>
	)
}