var font;
var res, fontSize;

var locations = ["New Cross,", "Dalston,"];
var and = "this\n";
var zeitgeist = ["drab grey", "cock-a-hoop"];
var chronos = ["mor", "eve"];
var end = "ning";

var index = 0;

function preload() {
  font = loadFont("fonts/EBGaramond-Regular.ttf");
  //font = loadFont("../fonts/EBGaramond-Regular.ttf");
}

function setup() {
  createCanvas(750, 520);
  fill(0);

  textFont(font);
  textSize(110);

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
  text(locations[index], 10, 0, width, height);
  textAlign(RIGHT);
  text(and, -60, 0, width, height);
  textAlign(CENTER);
  text(zeitgeist[index], 0, 100, width, height);
  textAlign(RIGHT);
  text(chronos[index], -180, 200, width, height);
  text(end, 10, 200, width, height);


}

function mousePressed() {
  res = 1;
}

function mouseReleased() {
  res = 0;
}
