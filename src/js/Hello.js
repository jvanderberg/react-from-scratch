"use strict";
import React from 'react';
import HelloHeader from './HelloHeader.js';

class Hello extends React.Component {
	
	constructor(props) {
		super(props);
    	this.state = {headerMessage: props.headerMessage};
  	}

	handleChange(event) {
		let value = event.target.value;
		this.setState({headerMessage: value});
	}

  	render() {
    	return <div>
    				<input type="text" ref="textInput" value={this.state.headerMessage} onChange={this.handleChange.bind(this)} />
    				<HelloHeader header={this.state.headerMessage}>
    				</HelloHeader>
    			</div>;
  	} 
}
export default Hello;
