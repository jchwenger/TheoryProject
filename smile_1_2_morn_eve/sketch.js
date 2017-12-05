var font;
var res, fontSize;

var locations = {"New Cross,\n", "Dalston,\n"};
var and = "this ";
var zeitgeist = {"drab grey mor", "cock-a-hoop eve"};
var end = "ning";

var index = 0;

function preload() {
  font = loadFont("fonts/EBGaramond-Regular.ttf");
}

function setup() {
  createCanvas(750, 520);
  background(255);
  fill(0);

  textFont(font);
  textSize(110);
  textAlign(CENTER);
  res = 1;
}

function draw() {
  if (res>=0.8) {
    index = 1;
  }
  if (res<0.8) {
    index = 0;
  }
  text(locations[index]+and+zeitgeist[index]+end, 0, 0, width, height);

}

function mousePressed() {
    res = 1;
}

function mouseReleased() {
  res = 0;
}
