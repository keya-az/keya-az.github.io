// sketch.js
// Animated abstract composition inspired by Wassily Kandinsky
// Uses moving shapes, rotating elements, and vibrant colors
//Aug 11, 2025
//Write a p5js sketch that draws a painting in the abstract and colorful style of Wassily Kandinsky. Add animation. Give the just me the javascript.

let shapes = [];

function setup() {
  createCanvas(900, 600);
  angleMode(DEGREES);
  noStroke();
  
  // create random shapes with parameters
  for (let i = 0; i < 30; i++) {
    shapes.push({
      type: random(["circle", "rect", "triangle", "lineArc"]),
      x: random(width),
      y: random(height),
      size: random(40, 120),
      col: color(random(50, 255), random(50, 255), random(50, 255), 200),
      rotSpeed: random(-1, 1),
      dx: random(-1, 1),
      dy: random(-1, 1),
      angle: random(360),
      extra: random(20, 80)
    });
  }
}

function draw() {
  background(240, 230, 220);
  
  // subtle moving background lines
  push();
  stroke(180, 120, 150, 50);
  strokeWeight(3);
  for (let i = 0; i < width; i += 60) {
    let offset = sin(frameCount * 0.5 + i) * 20;
    line(i, 0, i + offset, height);
  }
  pop();
  
  // draw and update shapes
  for (let s of shapes) {
    push();
    translate(s.x, s.y);
    rotate(s.angle);
    fill(s.col);
    
    if (s.type === "circle") {
      ellipse(0, 0, s.size);
    } else if (s.type === "rect") {
      rectMode(CENTER);
      rect(0, 0, s.size, s.extra);
    } else if (s.type === "triangle") {
      triangle(
        -s.size / 2, s.size / 2,
        s.size / 2, s.size / 2,
        0, -s.extra
      );
    } else if (s.type === "lineArc") {
      noFill();
      stroke(s.col);
      strokeWeight(4);
      arc(0, 0, s.size, s.size, 0, s.extra * 4);
      noStroke();
    }
    
    pop();
    
    // update movement
    s.x += s.dx;
    s.y += s.dy;
    s.angle += s.rotSpeed;
    
    // bounce at edges
    if (s.x < 0 || s.x > width) s.dx *= -1;
    if (s.y < 0 || s.y > height) s.dy *= -1;
  }
  
  // overlay dynamic thin lines
  strokeWeight(2);
  for (let i = 0; i < 8; i++) {
    stroke(random(255), random(255), random(255), 150);
    let x1 = noise(frameCount * 0.01 + i) * width;
    let y1 = noise(frameCount * 0.01 + i + 100) * height;
    let x2 = x1 + sin(frameCount + i * 20) * 150;
    let y2 = y1 + cos(frameCount + i * 20) * 150;
    line(x1, y1, x2, y2);
  }
  
  noStroke();
  
  // occasional flashing circles
  if (frameCount % 60 < 15) {
    fill(random(255), random(255), random(255), 180);
    ellipse(random(width), random(height), random(20, 60));
  }
}
