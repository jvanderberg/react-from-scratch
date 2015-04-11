"use strict";
import React from 'react';
import Hello from './Hello.js';

function render(dummy) {
	React.render(
		<Hello headerMessage="Hello World"/>,
		document.getElementById('content')
	);
}

document.addEventListener('DOMContentLoaded', function () {
	render();
});



