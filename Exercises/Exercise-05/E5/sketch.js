var img1;
var x = 200;
var y = 300;
var xspeed = .5;
var yspeed = .5;
var angle1 = 0;
var scalar = 70;

function preload() {
    img1 = loadImage("assets/Asset1.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(2.0);
}
function draw() {
   background(255);

   //var ang1 = radians(angle1);
    imageMode(CENTER);
    image(img1, x, y, 300,310);
      // update location
  
    x = x + xspeed;
    y = y + yspeed;
    
    boundary();

    console.log(y);


}
function mousePressed(){
            yspeed *= 10;
            xspeed *= 10;
}
function mouseReleased (){
  xspeed *= 1/10;
  yspeed *= 1/10;
}


function boundary(){
    // boundary
    if (x < 100 || x > width-100) {
        xspeed = xspeed * -1;
    }
    if (y < 100 || y > height-100) {
        yspeed = yspeed * -1;
    }
   
}

