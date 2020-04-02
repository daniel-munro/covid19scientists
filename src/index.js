// JS Goes here - ES6 supported

import "./css/main.css";

// Based on https://codepen.io/youfoundron/pen/eWpxzY

let menuIsOpen = false;
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn');

function closeMenu() {
    menu.classList.add('left-100');
    menu.classList.remove('left-50');
    menuIsOpen = false;
}

function openMenu() {
    menu.classList.add('left-50');
    menu.classList.remove('left-100');
    menuIsOpen = true;
}

window.onload = () => {
    menuBtn.onclick = (e) => {
	e.preventDefault();
	if (menuIsOpen) {
	    closeMenu();
	} else {
	    openMenu();
	}
    };
};
