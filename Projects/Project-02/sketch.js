var img0, img1, img2, img3, img4, img5, img6;
var song;
var x = 150;
var y = 250;
var xspeed = .3;
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

    //var ang1 = radians(angle1);
    

    image(img6, 0, 0, width, height);
  
    image(img0, 30, 70, 419,600);
    image(img1, x+335, y+60, 50,52);
    image(img2, x+450, y+100, 34, 100);
    image(img3, x+550, y+140, 142, 150 );
    image(img4, x+710, y+20, 238, 200 );
    image(img5, x+1000, y-80, 300, 250 );

    x = x + xspeed;
    y = y + yspeed;


    
    boundary();

    console.log(y);

}



function mousePressed() {
     yspeed *= 10;
     xspeed *= 10;

 if ( song.isPlaying() ) { 
   song.stop();
    background(255);
     } else {
  song.play();

   }
}

function mouseReleased (){
  xspeed *= 1/10;
  yspeed *= 1/10;
}


function boundary(){
    if (x < 100 || x > width-100) {
        xspeed = xspeed * -1;
    }
    if (y < 100 || y > height-100) {
        yspeed = yspeed * -1;
    }
   
}