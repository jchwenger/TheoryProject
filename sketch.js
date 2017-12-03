var spacer, rand, index, x, y;
var word, punct, title;
var words;
var punctuation = [",", ".", " - ", "?", "", "", "", "", "", "" ];
var leadIn = ["The ", "A ", "Day of ", "Yesterday's ", "Tomorrow's ", "We are ", "Look "];
var leadOut = [" with us", " of course", " once", " at last", " over", " underneath" ];

function preload() {
    words = loadStrings("assets/dictionary.txt");

}

function setup() {
    createCanvas(600, 600);
    spacer = 20;
    y = 20;
    word = "";
    var tindex = int(random(words.length));
    var lindex = int(random(leadIn.length));
    var oindex = int(random(leadOut.length));
    title = leadIn[lindex] + words[tindex] + leadOut[oindex];
    print(title+"\n");
    noLoop();  // Run once and stop
}

function draw() {
    background(0);
    fill(255);

  for (var x = spacer*2; x <= 100; x+= spacer) {
    for (var y = spacer*2; y <= 100; y += spacer) {
      var index = int(random(words.length));
      var pindex = int(random(punctuation.length));
      word = words[index];
      punct = punctuation[pindex];

      text(word+punct, x, y);
      x += spacer;
      print(index + " " + word + "\n");
    }
  }

  text("\""+title+"\", 2017", width*0.3, height*0.8);
   
}

function mousePressed() {
    var tindex = int(random(words.length));
    var lindex = int(random(leadIn.length));
    var oindex = int(random(leadOut.length));
    title = leadIn[lindex] + words[tindex] + leadOut[oindex];
    print(title+"\n");
          
  // prevent default
  return false;
}
