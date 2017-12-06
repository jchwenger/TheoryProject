// Preparation for multiple sketches in one page, which I could not yet achieve.
// (The instances stacked horizontally instead of vertically...)
// The source for the method: http://www.joemckaystudio.com/multisketches/
// https://github.com/processing/p5.js/wiki/Global-and-instance-mode
// https://p5js.org/examples/instance-mode-instantiation.html

var sketch1 = function(p) {

  var font;
  var res;

  var poems = ["Be merry now, twat!", "Cut the smile, git!"];
  //var poems = ["How about a smile, dear?", "Haha OK enough already!];
  //var poems = ["Wow you look grim today...", "Haha you look so dumb!"];

  var index = 0;


  p.preload = function() {
    font = p.loadFont("fonts/EBGaramond-Regular.ttf");
  };

  p.setup = function() {
    p.createCanvas(848, 480);
    p.fill(0);

    p.textSize(100);
    p.textFont(font);
    p.textAlign = "center";

    res = 0;
  };

  p.draw = function() {
    p.background(255);

    if (res>=0.8) {
      index = 1;
    }
    if (res<0.8) {
      index = 0;
    }
    p.text(poems[index], 0, p.height/2, p.width, p.height);
  };

  p.mousePressed = function() {
    res = 1;
  };

  p.mouseReleased = function() {
    res = 0;
  };
};
var myp5One = new p5(sketch1, 'scold1');
