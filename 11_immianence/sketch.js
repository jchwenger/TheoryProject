var font;
var res, fontSize, frame;

var start = "imm";
var ai = ["a", "i"];
var end = "nence";

var index = 0;

function preload() {
  font = loadFont("fonts/EBGaramond-Regular.ttf");
}

function setup() {
  createCanvas(750, 520);
  fill(0);

  textFont(font);
  textSize(150);

  res = 0;

  frame = 0;
}

function draw() {
  background(255);

  frame++;

  // if (res>=0.8) {
  //   index = 1;
  // }
  // if (res<0.8) {
  //   index = 0;
  // }

  push();
  translate(0, height/2);
  textAlign(LEFT);
  text(start, 30, 0);
  angleMode(DEGREES);
  var aiHeight = sin(frame)*height*0.3;
  print(aiHeight);
  if (aiHeight > 0) {
    index = 0;
  } else {
    index = 1;
  }
  text(ai[index], 305, aiHeight);
  text(end, 360, 0);
}

function mousePressed() {
  res = 1;
}

function mouseReleased() {
  res = 0;
}
