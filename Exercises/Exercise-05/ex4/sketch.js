
var canvas01;

function setup() {

	canvas01 = createCanvas(700,700);
	canvas01.class('square');
	//canvas01.class('square');
	//canvas01.id('lemon')

}

function draw() {

	fill('pink');
	rect(random(0,1000),random(0,1000),50,50);

}