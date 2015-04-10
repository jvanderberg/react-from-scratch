"use strict";
import React from 'react';
import Hello from './hello.js';

function render(dummy) {
	React.render(
		<Hello/>,
		document.getElementById('content')
	);
}

document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('resize', render);
	render();
});



