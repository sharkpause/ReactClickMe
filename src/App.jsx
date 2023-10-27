import React from 'react';

export default class Button extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: 'Click me!'
		};

		this.num = 1;

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			text: 'Count: ' + this.num
		});

		++this.num;
	}

	render() {
		return (
			<div>
				<h1>{this.state.text}</h1>
				<button onClick={this.handleClick}>Click me</button>
			</div>
		);
	}
}
