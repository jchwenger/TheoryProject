var spacer, rand, index, x, y, titlePos, frame;
var word, punct, title;
var words;
var punctuation = [",", ".", " – ", "?", "", "", "", "", "", "" ];
var leadIn = ["The ", "A ", "Day of ", "Yesterday's ", "Tomorrow's ", "We are ", "Look ", "Open "];
var leadOut = [" with us", " of course", " once", " at last", " over", " underneath", " in the park", " without you", " in bliss"];
var tindex, lindex, oindex;

function preload() {
    words = loadStrings("data/dictionary.txt");
}

function setup() {
    createCanvas(400, 400);
    background(0);
    frameRate(8);
    spacer = 20;
    y = 20;
    word = "";
    tindex = int(random(words.length));
    lindex = int(random(leadIn.length));
    oindex = int(random(leadOut.length));
    title = leadIn[lindex] + words[tindex] + leadOut[oindex];
    // print(title+"\n");

    // video = createCapture(VIDEO);
    // video.size(640/2, 480/2);
    //
    // opencv = new OpenCV(this, 640/2, 480/2);
    // opencv.loadCascade(OpenCV.CASCADE_FRONTALFACE);

    // video.start();
}

function draw() {

  // opencv.loadImage(video);

  //  image(video, 0, 0 );

  noFill();

  // var faces = opencv.detect();

  // if you want to check the face on/off: text(faces.length, width-100, 100);

  // if (faces.length == 1) {
  //   frameRate = 0;
  // } else if (faces.length == 0) {
  //   frameRate = 30;
       poem();
    // }

  /*
  for (int i = 0; i < faces.length; i++) {
  println(faces[i].x + "," + faces[i].y);
  rect(faces[i].x, faces[i].y, faces[i].width, faces[i].height);
}
*/
}


function poem () {

  var tindex = int(random(words.length));
  var lindex = int(random(leadIn.length));
  var oindex = int(random(leadOut.length));
  title = leadIn[lindex] + words[tindex] + leadOut[oindex];

  fill(0);
  rect(0, 0, width, height);
  for (var x = spacer*2; x <= 100; x+= spacer) {
    for (var y = spacer*2; y <= 100; y += spacer) {
      var index = int(random(words.length));
      var pindex = int(random(punctuation.length));
      word = words[index];
      punct = punctuation[pindex];

      fill(255);
      text(word+punct, x, y);
      x += spacer;
      // print(index + " " + word + "\n");
    }
  }
  textAlign(RIGHT);
  text("\""+title+"\", 2017",  width/1.1, height*0.8);
  textAlign(LEFT);

}


function staticPoem () {
  fill(0);
  rect(0, 0, width, height);
  for (var x = spacer*2; x <= 100; x+= spacer) {
    for (var y = spacer*2; y <= 100; y += spacer) {
      var index = int(random(words.length));
      var pindex = int(random(punctuation.length));
      word = words[index];
      punct = punctuation[pindex];

      fill(255);
      text(word+punct, x, y);
      x += spacer;
    }
  }

  textAlign(CENTER);
  text("\""+title+"\", 2017", height, width);
}

// function captureEvent(Capture c) {
//   c.read();
// }

function mousePressed() {
  noLoop();
  saveCanvas();
}

function mouseReleased() {
    loop();
}
