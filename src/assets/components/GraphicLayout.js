import React, { useState, useEffect } from 'react';

function GraphicLayout() {
	let ctx = null;
	
	useEffect(() => {
		ctx = document.querySelector('.graphic__canvas').getContext('2d');
		preparation();
	});
	
	let preparation = () => {
		ctx.beginPath();
		ctx.moveTo(0, 75);
		ctx.lineTo(300, 75);
		ctx.strokeStyle = '#286090';
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(3, 0);
		ctx.lineTo(3, 300);
		ctx.strokeStyle = '#286090';
		ctx.stroke();
	}
	
	return (
		<div className="graphic">
			<h1 className="graphic__title">
				GraphicLayout
			</h1>
			<canvas className="graphic__canvas">
				
			</canvas>
		</div>
	)
}

export default GraphicLayout;