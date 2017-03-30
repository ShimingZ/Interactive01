var x=0;
var y=0;


function setup() {
	createCanvas(windowWidth,windowHeight);



}

function draw() {
		background(169, 179, 157);
	noStroke();
	fill(86, 101, 115);
	ellipse(x,y,50,50);
	x= x+10;

	if (x> width) {
		x=0
		y=y+50;
	}

	console.log(x);
	console.log(y);
  
}