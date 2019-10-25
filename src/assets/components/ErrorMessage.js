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
		console.log(this.props.text);
		if (this.props.text === null) {
			return null;
		}
		return (
			<div className="error-message">
				<div className="error-message__container">
					<h2>{this.props.text}</h2>
					<button type="button" onClick={this.handleSubmit}>OK</button>
				</div>
			</div>
		)
	}
}