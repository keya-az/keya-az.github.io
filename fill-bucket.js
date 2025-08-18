let z = 0;
let move = true;
let img;
let sound;
let font;

function preload(){
  img = loadImage('park-bench-1503483.jpg');
  sound = loadSound('Musical, Toy, Music Box, Christmas, Jingle, Jingle Bells SND31198 1.wav');
  font = loadFont('BaksoSapi.otf');
}


function setup() {
  let cnv = createCanvas(600, 600);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
}
//added
function windowResized() {
  let Width = select('#fill-bucket').width;
  resizeCanvas(Width, Width / 2);
  // Keep original aspect; if you prefer responsive, replace with resizeCanvas(windowWidth, windowHeight);
  // Here we intentionally keep size stable for composition integrity.
}

function setup() {
  let Width = select('#fill-bucket').width;
  let canvas = createCanvas(Width, Width / 2); 
  canvas.style('display', 'block');
  canvas.style('margin', '0 auto');
  canvas.parent('#fill-bucket');
  noLoop();
  pixelDensity(1);
}

function turn_on(pixels, index) {
  pixels[index * 4 + 0] = 255;
  pixels[index * 4 + 1] = 255;
  pixels[index * 4 + 2] = 255;
  pixels[index * 4 + 3] = 255;
}

function turn_off(pixels, index) {
  pixels[index * 4 + 0] = 0;
  pixels[index * 4 + 1] = 0;
  pixels[index * 4 + 2] = 0;
  pixels[index * 4 + 3] = 255;
}

let which = 30;

function draw() {
  background(255);

  loadPixels();

  for (let column = 0; column < width; column++) {
    pixels[column * 4 + 0] = 255;
    pixels[column * 4 + 1] = 255;
    pixels[column * 4 + 2] = 255;
    pixels[column * 4 + 3] = 255;
  }
  pixels[(width / 2) * 4 + 0] = 0;
  pixels[(width / 2) * 4 + 1] = 0;
  pixels[(width / 2) * 4 + 2] = 0;
  pixels[(width / 2) * 4 + 3] = 255;

  let pixel = 0;
  for (let row = 0; row < height; row++) {
    pixel += 4;
    for (let column = 1; column < width - 1; column++) {
      const v =
        (pixels[pixel - 4] == 0 ? 4 : 0) |
        (pixels[pixel] == 0 ? 2 : 0) |
        (pixels[pixel + 4] == 0 ? 1 : 0);
      const o = ((which >> v) & 1) == 1 ? 0 : 255;
      pixels[pixel + width * 4 + 0] = o;
      pixels[pixel + width * 4 + 1] = o;
      pixels[pixel + width * 4 + 2] = o;
      pixels[pixel + width * 4 + 3] = 255;
      pixel += 4;
    }
    pixel += 4;
  }
  updatePixels();  
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW) {
    which = (which + 1) & 255;
  } else if (keyCode == LEFT_ARROW) {
    which = (which - 1) & 255;
  } else if (key == " ") {
    saveCanvas();
  }
  redraw();
  print(which);
}

function windowResized() {
  resizeCanvas(windowWidth, 200);
  redraw();
}
//added

function draw() {
  background(150, 200, 255, 200);
  
  //background
  image(img, 0, 0, 600, 600);
  filter(POSTERIZE, 4);
  
  //bucket #1 and 2
  drawBucket(350, 400, 100, 100);
  
  drawBucket(50, 400, 100, 100);
  
function drawBucket(x, y, bucketWidth, bucketHeight) {
  stroke(0);
  strokeWeight(2);
  noFill();
  circle(x + bucketWidth/2, y, bucketWidth - 5);
  
  stroke(255, 230, 235);
  fill(255, 240, 240);
  quad(x, y, x+bucketWidth, y, x+3*(bucketWidth/4), y+bucketHeight, x+ bucketWidth/4, y+bucketHeight);
  
  stroke(190, 190, 250);
  strokeWeight(2);
  fill(200,200,250);
  ellipse(x + bucketWidth/2, y, bucketWidth, 20);
  
}
  //smiley faces
  
  
  function smile(s, d){
    stroke(0);
    strokeWeight(2);
    fill(random(155, 255), random(155, 255), random(155, 255));
    circle(s, d, 40);
    
    noStroke();
    fill(0);
    circle(s-6, d-4, 5);
    
    circle(s+6, d-4, 5);
    
    fill(0);
    arc(s, d+4, 20, 20, 2*PI, PI, CHORD);
    
  }
  
  let level = amplitude.getLevel();
  let z = map(level, 0, 1, 50, 100);
  
  
  
  smile(75, 390);
  smile(115, 390);
  smile(60, 395);
  smile(130, 395);
  smile(100, 400);
  
  if (move) {
    smile(map(mouseX, 0, 600, 100, 400), map(mouseY, 0, 600, 350, 400));
  } else {
    smile(400, 400);
    arc(400, 450, 25, 25, 2*PI, PI, CHORD);
    fill(255, 255, 50, 200);
    circle(100, 450, z)
    
    fill('white');
    textFont(font);
    textSize(z);
    text('You filled a bucket!', 0, 60);
    
  }
  noStroke();
  //smiley 1
  fill(0);
  circle(90, 440, 5);
    
  circle(110, 440, 5);
    
  arc(100, 450, 25, 25, 2*PI, PI, CHORD);
  
  //smiley 2
  fill(0);
  circle(390, 440, 5);
    
  circle(410, 440, 5);
  arc(400, 455, 10, 10, PI, 2*PI, CHORD);
  
  
}

 function mousePressed() {
    move = !move;
  }

function toggleSound(){
  if (sound.isPlaying()) {
    sound.stop();
  } else {
    sound.play();
  }
}
