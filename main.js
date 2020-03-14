const imageSources = [
	'bomberman.png',
	'bomberman.png',
	'bomberman.png',
	'solitaire.png',
	'ratscrew.png',
];

let selectedIndex = 0;

function selectProject(index) {
	let projects = document.getElementsByClassName("buttons")[0];
	let prev = projects.getElementsByTagName("button")[selectedIndex];
	let next = projects.getElementsByTagName("button")[index];
	prev.classList.remove("selected");
	next.classList.add("selected");

	moveCursor(index);

	let img = document.getElementById("preview");
	img.style.backgroundImage = "url('" + imageSources[index] + "')";

	selectedIndex = index;
}

function killCursor(index) {
	let cursor = document.getElementById("cursor");
	let top = 80 * index + 40;
	cursor.style.top = top.toString() + "px";
	cursor.style.height = "0px";
}

function moveCursor(index) {
	let cursor = document.getElementById("cursor");
	let top = 80 * index;
	cursor.style.top = top.toString() + "px";
}


$(document).ready(function() {
	selectProject(0);
});
