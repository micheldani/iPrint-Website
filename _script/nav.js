// navigation toggle
const x = document.getElementById("navMenu");
const y = document.getElementById("navContainer");

function navMenu() {
	'use strict';
	if (x.className === "nav-menu") {
		x.className += " responsive";
	} else {
		x.className = "nav-menu";
	}
	if (y.className === "nav-container") {
		y.className += " dropdown";
	} else {
		y.className = "nav-container";
	}
}