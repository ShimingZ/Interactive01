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
    moveC(250);
    console.log("drawing C");
  
    if(mouseIsPressed){
             moveC(600);

    }
}


function moveC(y){
   var ang1 = radians(angle1);
     var x1 = 10+(scalar*cos(ang1));
    
    image(img1, x1+400, y, 300,310);
      // update location
  
    x1 = x1 + xspeed;
    y = y + yspeed;
    
    // boundry
    if (x1 > 100 || x1 < 50) {
        xspeed = xspeed * 0;
    }
    if (y > 150 || y < 100) {
        yspeed = yspeed * -1;
    }
    angle1 += 0.3;
    
print(x1 + " "+ "x1 value");
   
}

