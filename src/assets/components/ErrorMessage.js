import React from 'react';

export default class ErrorMessage extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit() {
		this.props.callBack();
	}
	
	render() {
		if (this.props.text !== "") {
			return null;
		}
		return (
			<p>ERROR</p>
		)
	}
}