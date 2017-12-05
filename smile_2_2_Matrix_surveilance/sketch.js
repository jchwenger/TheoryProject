// Found this solution for the blinking cursor here:
// https://forum.processing.org/two/discussion/11790/does-anybody-know-how-to-create-a-blinking-cursor

// Found the typewriter effect here:
// https://forum.processing.org/two/discussion/1823/typewrite-effect-typing-one-by-one-with-delay-on-the-strings

var font;
var res, detail, underscore;

var poems = ["Smile, you are being watched...", "See? You can't say I hadn't warned you!"];

var index = 0;

var blinkTime;
var blinkOn;

var  counter;

var theyAreSmiling;
var theySmiled;

var  frame;

function preload() {
  font = loadFont("fonts/cour.ttf");
}

function setup() {
  createCanvas(848, 480);
  frameRate(7);

  fill(57, 255, 20);

  detail = ">> ";
  underscore = "_";

  textSize(20);
  textFont(font);
  textAlign(LEFT);

  res = 0;
  theyAreSmiling = false;
  theySmiled = false;

  counter = 0;

  blinkTime = millis();
  blinkOn = true;
}

function draw() {
  background(0);

  if (res>=0.8) {
    if (theyAreSmiling == false) {
      frame = 0;
    }
    theyAreSmiling = true;
  }
  if (res<0.8) {
    if (theyAreSmiling == true) {
      //theySmiled = true;
      frame = 0;
    }
    theyAreSmiling = false;
  }

  if (blinkOn) {
    underscore = "_";
  } else {
    underscore = "";
  }

  if (millis() - 500 > blinkTime) {
    blinkTime = millis();
    blinkOn = !blinkOn;
  }

  typewriteText();

  if (theyAreSmiling == false) {
    if (frame == 0) {
      counter = 0;
      index = 0;
    }
  }

  if (theyAreSmiling == true) {
    if (frame == 0) {
      counter = 0;
      index = 1;
    }
  }
  frame++
}

function typewriteText() {
  if (counter < poems[index].length) {
    counter++;
  }
  text(detail+poems[index].substring(0, counter)+underscore, 40, 40, width, height);
}

function mousePressed() {
  res = 1;
}

function mouseReleased() {
  res = 0;
}
