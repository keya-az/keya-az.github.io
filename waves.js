//sketch created on Aug 25, 2025
//Using ChatGPT AI Prompts:...can you add a subtle wave animation in the background using p5.js; can you make it multiple small waves

let yoffs = []; // store offsets for multiple waves
  let waveCount = 3; // number of waves

  function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1"); // background layer
    canvas.style("position", "fixed");

    // Initialize y-offsets (different starting positions)
    for (let i = 0; i < waveCount; i++) {
      yoffs.push(random(1000));
    }
  }

  function draw() {
    clear();

    for (let i = 0; i < waveCount; i++) {
      drawWave(yoffs[i], i);
      yoffs[i] += 0.01 + i * 0.003; // different speeds
    }
  }

  function drawWave(yoff, index) {
    noStroke();

    // Different shades of blue with transparency
    let colors = [
      [100, 150, 200, 70],
      [80, 120, 180, 60],
      [60, 100, 160, 50]
    ];
    fill(...colors[index % colors.length]);

    beginShape();
    let xoff = 0;

    for (let x = 0; x <= width; x += 15) {
      let y = map(
        noise(xoff, yoff),
        0,
        1,
        height * 0.3 + index * 40,
        height * 0.6 + index * 40
      );
      vertex(x, y);
      xoff += 0.05;
    }

    vertex(width, height);
    vertex(0, height);
    endShape(CLOSE);
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
