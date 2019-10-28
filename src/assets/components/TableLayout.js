import React, { useState, useEffect } from 'react';
import { store } from '../redux/storage';

export default function TableLayout(props) {
	//console.log(props);
	
	
	let [matrix, setMatrix] = useState({})
	
	useEffect(() => {
		//console.log(store.getState().items);
	});
	
	return (
		<div className="table">
			<h1>
				TableLayout
			</h1>
		</div>
	)
}