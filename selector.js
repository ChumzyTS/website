// JavaScript Document

// CONSTANTS
var circleColor = "#6B0059";

// CLASSES
var circleLinks = [];
class circleLink {
	constructor(_color, _link) {
		this.color = _color;
		this.link = _link;
		circleLinks.push(this);
	}
}

new circleLink("#ffff1c", "google.com");
new circleLink("#00ff00", "/testpage.html");
new circleLink("#ff00ff", "/testpage.html");

// Get canvas 
var canvas = document.getElementById("selector");
var ctx = canvas.getContext("2d");

//var windowSize = {x: $(window).height(), y: $(window).width()};

updateCanvasSize();
function updateCanvasSize() {
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	updateCanvasSize();
	
	var circleSizePerc = 0.4;
	var circleDiameter = canvas.width < canvas.height ? canvas.width * circleSizePerc : canvas.height * circleSizePerc;
	
	drawTheArcs(circleDiameter);
	drawTheCircle(circleDiameter);
	
	requestAnimationFrame(draw);
}

function drawTheArcs(circleDiameter) {
	if (circleLinks.length > 0) {
		var fullCircleArc = 2 * Math.PI;
		var eachArcLength = fullCircleArc / circleLinks.length;
		
		for (var i = 0; i < circleLinks.length; i++) {
			ctx.beginPath();
			var currentArc = circleLinks[i];
			ctx.arc(canvas.width / 2, canvas.height / 2, 1.02 * (circleDiameter / 2), (i - 1) * eachArcLength, i * eachArcLength);
			ctx.fillStyle = currentArc.color;
			ctx.fill();
		ctx.closePath();
		}
	}
}

function drawTheCircle(circleDiameter) {
	
	
	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 2, circleDiameter / 2, 0, 2 * Math.PI);
	ctx.fillStyle = circleColor;
	ctx.fill();
	ctx.closePath();
}

draw();
