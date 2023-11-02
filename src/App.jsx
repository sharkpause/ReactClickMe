import React from 'react';

export default class Button extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state => ({
			counter: state.counter + 1
		}));
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.counter}</h1>
				<button onClick={this.handleClick}>Click me</button>
			</div>
		);
	}
}
