var img0, img1, img2, img3, img4, img5, img6;
var song;
var x = 200;
var y = 300;
var xspeed = .5;
var yspeed = .5;
var angle1 = 0;
var scalar = 70;



function preload() {
    img0 = loadImage("assets/Asset0.png");
    img1 = loadImage("assets/Asset1.png");
    img2 = loadImage("assets/Asset2.png");
    img3 = loadImage("assets/Asset3.png");
    img4 = loadImage("assets/Asset4.png");
    img5 = loadImage("assets/Asset5.png");
    img6 = loadImage("assets/Asset6.png");
    song = loadSound('assets/sound.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(2.0);
}
function draw() {
    background(255);

    var ang1 = radians(angle1);
    var x1 = 10+(scalar*cos(ang1));
    
    
    
    // create a varible for scaling image
    var imgScale = 0.1;
    
    // display image 1 at a scaled size with the original propotion
    image(img6, x-205, y-300, windowWidth, windowHeight);
  
    image(img0, x1-30, y-190, 419,600);
    image(img1, x1+335, y+60, 50,52);
    image(img2, x1+450, y+100, 34, 100);
    image(img3, x1+550, y+140, 142, 150 );
    image(img4, x1+710, y+20, 238, 200 );
    image(img5, x1+1000, y-80, 300, 250 );

    
    
    // update location
    x = x + xspeed;
    y = y + yspeed;
    
    // boundry
    if (x > 100 || x < 50) {
        xspeed = xspeed * -1;
    }
    if (y > 150 || y < 100) {
        yspeed = yspeed * -1;
    }
    angle1 += 0.3;
}



function mousePressed() {
 if ( song.isPlaying() ) { // .is Playing() returns a boolean
   song.stop();
    background(255);
     } else {
  song.play();
background(255);
   }
}