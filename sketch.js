var noiseScale = 0.02;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(0);

    for (var x=0; x < width; x++) {
    var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    strokeWeight(1);
    stroke(noiseVal*255);
    line(x, 0, x, mouseY+noiseVal*80);
  }
}