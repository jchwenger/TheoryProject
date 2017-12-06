// Random word generator pilfered and adapted from Lior Ben-Gai, November 2017

var font;
var res;

var God1 = "In the beginning God smiled.";
var God2 = "...and there was gibberish. ";
var God3 = "And God saw that it was good.";

var scold = "(Come on, smile for me, please. \n We haven't got all day.)";

var word;

var index = 0;

var theyAreSmiling;
var theySmiled;

var  frame;

function preload() {
  font = loadFont("fonts/EBGaramond-Regular.ttf");
}

function setup() {
  createCanvas(848, 480);
  frameRate(8);

  fill(0);

  textSize(40);
  textFont(font);
  textAlign(LEFT);

  res = 0;
  theyAreSmiling = false;
  theySmiled = false;

  word = "";
}

function draw() {
  background(255);

  if (res>=0.8) {
    if (theyAreSmiling == false) {
      frame = 0;
    }
    theyAreSmiling = true;
  }
  if (res<0.8) {
    if (theyAreSmiling == true) {
      theySmiled = true;
      frame = 0;
    }
    theyAreSmiling = false;
  }

  text(God1, 40, 40, width, height);

  if (theyAreSmiling == false && theySmiled == false) {
    if (frame > 30) {
      text(scold, 40, 100, width-40, height);
    }
  }
  if (theyAreSmiling == true) {
    newWord();
    text("\""+word+"\"", 40, 100, width, height);
    if (frame > 10) {
      text(God2, 300, 160, width, height);
    }
  }

  if (theySmiled == true) {
    text("\""+word+"\"", 40, 100, width, height);
    text(God2, 300, 160, width, height);
    if (frame > 20) {
      text(God3, 40, 220, width, height);
    }
  }
  frame++;
}

function mousePressed() {
  res = 1;
}

function mouseReleased() {
  res = 0;
}

function newWord() {
  word = ""; // clear out the word variable
  word += char(floor(random(65, 90)));
  var len = round(random(2, 15)); // random word length
  for (var i = 0; i < len; i++) {
    // add characters to the word
    word += char(floor(random(97, 122)));
  }
}
