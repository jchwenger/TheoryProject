var font;
var res, fontSize;

var start = "gr";
var ends = ["ump...", "it!"];

var index = 0;

function preload() {
  font = loadFont("fonts/EBGaramond-Regular.ttf");
}

function setup() {
  createCanvas(750, 520);
  fill(0);

  textFont(font);
  textSize(220);

  res = 0;
}

function draw() {
  background(255);
  if (res>=0.8) {
    index = 1;
  }
  if (res<0.8) {
    index = 0;
  }

  textAlign(LEFT);
  text(start+ends[index], 30, height/2);
}

function mousePressed() {
  res = 1;
}

function mouseReleased() {
  res = 0;
}
