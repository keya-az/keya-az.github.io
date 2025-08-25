function setup() {
  createCanvas(600, 600);
  cnv.parent("neverending-container");
}

let x = 0;
let y = 360;
let p = -330;
let l = 200;

function draw() {
  background(255, 255, 255, 50);
  
  /* sky background */
  noStroke();
  fill(0, 0, 50);
  ellipse(300, 28, 880, 1000);
  fill(10, 10, 60);
  ellipse(300, 26, 760, 900);
  fill(20, 20, 70);
  ellipse(300, 20, 650, 740);
  fill(30, 30, 80);
  ellipse(300, 20, 540, 600);
  fill(40, 40, 90);
  ellipse(300, 18, 440, 480);
  fill(50, 50, 100);
  ellipse(300, 14, 360, 380);
  fill(60, 60, 110);
  ellipse(300, 10, 300, 290);
  fill(70, 70, 120);
  ellipse(300, 6, 240, 200);
  fill(80, 80, 130);
  ellipse(300, 2, 180, 160);
  fill(90, 90, 140);
  ellipse(300, 2, 120, 100);
  fill(100, 100, 150);
  ellipse(300, 0, 80, 40);
  
  /* ground */
  fill(80, 130, 80);
  rect(0, 390, 600, 300);
  
  /* moon */
  f = random(110, 200)
  fill(240, 240, 240, 1000);
  circle(300, y, f);
  
  fill(255);
  circle(300, y, 100);
  
  y = y - 5
  
  if (y == -1250) {
    y = 360
  }
  
  //cloud
  fill(255, 255, 255, 200);
  ellipse(l, 100, 200, 100);
  ellipse(l+20, 120, 200, 100);
  ellipse(l+40, 100, 200, 100);
  
  l = l + 5
  
  if (l == 605) {
    l = 0
  }
  
  //sun
  j = random(200, 230)
  k = random(110, 600)
  fill(j+5, j, 0, 1000);
  circle(300, p, k);
  
  fill(255, 255, 0);
  circle(300, p, 100);
  
  p = p - 5
  
  if (p == -1250) {
    p = 360
  }
  
  //clouds//
  fill(255, 255, 255, 200);
  ellipse(x, 200, 200, 100);
  ellipse(x+20, 220, 200, 100);
  ellipse(x+40, 200, 200, 100);
  
  fill(255, 255, 255, 200);
  ellipse(x+60, 300, 150, 50);
  ellipse(x+80, 320, 150, 50);
  ellipse(x+100, 300, 200, 50);
  
  fill(255, 255, 255, 200);
  ellipse(l-220, 50, 150, 50);
  ellipse(l-200, 70, 150, 50);
  ellipse(l-180, 50, 200, 50);
  
  x = x + 5
  
  if (x == 605) {
    x = 0
  }
  
  //rain
  fill(200,200, 225, 200);
  s = random(50, 390)
  t = random(0, 600)
  
  triangle(t, s, t+5, s-10, t+10, s) 
  
  //house
  
  fill(255, 235, 235);
  rect(150, 340, 150, 50);
  
  fill(255, 100, 110);
  triangle(150, 340, 225, 300, 300, 340);
  
  fill(240, 200, 150)
  rect(230, 365, 15, 25);
  
  fill(0);
  circle(234, 380, 3)
  
  noFill();
  strokeWeight(1);
  stroke(0,0,0)
  rect(170, 360, 10, 10);
  rect(185, 360, 10, 10);
  rect(170, 375, 10, 10);
  rect(185, 375, 10, 10);
}
