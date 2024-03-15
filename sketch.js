let e;
let G2;
let Tiny;
let intervalID;
let pos;
let row;
let col;
let d;
let img1;
let img2;
let img_hand;
// let v1; let v2; let v3; let v4;let v5;let v6;let v7;
let videos = [];
let letters = ["e", "x", "p", "e", "r", "i", "m", "e", "n", "t", "a", "l"];

let scene1;
let scene2;
let scenes = [scene3, scene4, scene5, scene6];
let currentScene;

function preload() {
  G2 = loadFont("G2-Erika-Regular.otf");
  Tiny = loadFont("TINY5x3-160.otf");
  img1 = loadImage("yehwan.png");
  img2 = loadImage("template.png");
  img_hand = loadImage("hand.png");
}

function mouseWheel(event) {
  pos -= event.delta;
  console.log(pos);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  e = 0;
  pos = 25;
  scene1 = true;
  scene2 = false;
  currentScene = 0;

  for (let i = 0; i < 7; i++) {
    videos[i] = createVideo("v" + i + ".mov");
    videos[i].volume(0);
    videos[i].loop();
    // videos[i].position(50, 30);
    videos[i].hide(); // hides the html video loader
  }

}

function draw() {
  if (scene1 == true) {
    image(img1, width / 2 - 300, 100);

    fill("blue");
    textFont(Tiny);
    textSize(200);
    rectMode(CENTER);
    let tw = textWidth("Yehwan Song");
    text("Yehwan Song", width / 2 - tw / 2, height / 2);
    noLoop();

    intervalID = setInterval(dots, 500);
  } else if (scene2 == true) {
    if (e == 3) {
      image(img2, 0, 0, 200, 200);
      clearInterval(intervalID);
    } else if (e == 4) {
      for (row = 0; row < height; row = row + 200) {
        for (col = 0; col < width; col = col + 200) {
          image(img2, col, row, 200, 200);
          d = dist(mouseX, mouseY, col, row);
        }
      }
      e++;
    } else if (e == 6) {
      background(0);
      scenes[currentScene](); //scene3
    } else if (e == 7) {
      scenes[currentScene](); //scene4
    } else if (e == 8) {
      scenes[currentScene](); //scene5
    } else if (e == 9) {
      scenes[currentScene](); //scene6
    }
  }
} //end of draw

function scene3() {
  for (row = 0; row < height; row = row + 200) {
    for (col = 0; col < width; col = col + 200) {
      push();
      d = dist(mouseX, mouseY, col, row);
      if (d <= 300) {
        row = row + d / 3;
        col = col + d / 3;
      }
      // image(img2, col,row, 200, 200);
      colorMode(HSB);
      fill(d / 3, 90, 90);
      circle(col + 100, row + 100, 200);
      pop();
    }
  }
}

//anti user friendly
function scene4() {
  background(255);
  noCursor();
  rectMode(CENTER);
  textFont(Tiny);
  fill(255);
  stroke("blue");
  strokeWeight(3);
  textSize(300);
  text("anti-user", width / 2 - 400, height / 2 + 150, 50, 300);
  text("friendly", width / 2 - 350, height / 2 + 330, 50, 300);
  image(img_hand, mouseX - 50, mouseY - 60, 100, 133);
  print("444");
}

//video1
function scene5() {
  background(255);
  text("anti-user", width / 2 - 400, height / 2 + 150, 50, 300);
  text("friendly", width / 2 - 350, height / 2 + 330, 50, 300);

  let vid = videos[0].get();
  image(vid, 30, 0);

  image(img_hand, mouseX - 50, mouseY - 60, 100, 133);
  print("555");
}

//video2+scrolling
function scene6() {
  background(255);
  text("anti-user", width / 2 - 400, height / 2 + 150, 50, 300);
  text("friendly", width / 2 - 350, height / 2 + 330, 50, 300);

  let vid0 = videos[0].get();
  image(vid0, 30, 0 + pos);

  //description for vid0
  let vid0_pos = 0 + pos;
  if (vid0_pos > height / 2 - 250 && vid0_pos < height / 2 - 50) {
    push();
    stroke(0);
    strokeWeight(2);
    fill("yellow");
    textFont(G2);
    textSize(32);
    rectMode(CORNERS);
    text(
      '"Today I walked"',
      width / 2 - 40,
      height / 2 - 150 + pos,
      width / 2 + 40,
      height / 2 - 50 + pos
    );
    pop();
  }

  let vid1 = videos[1].get();
  image(vid1, width / 2, height / 2 + pos);

  //description for vid1
  let vid1_pos = height / 2 + pos;
  if (vid1_pos > height / 2 + pos * 2 && vid1_pos < height / 2 - pos) {
    push();
    stroke(0);
    strokeWeight(2);
    fill("yellow");
    textFont(G2);
    textSize(32);
    rectMode(CORNERS);
    text(
      '"The Way We Touch Each Other In 2020"',
      160,
      height / 2 + pos * 0.85 + 180,
      300,
      height / 2 - pos + 200
    );
    pop();
  }

  let vid2 = videos[2].get();
  image(vid2, 30, height + pos);

  //description for vid2
  let vid2_pos = height + pos;
  if (vid2_pos > height + pos * 1.5 && vid2_pos < height - pos * 2) {
    push();
    stroke(0);
    strokeWeight(2);
    fill("yellow");
    textFont(G2);
    textSize(32);
    rectMode(CORNERS);
    text(
      '"Very Responsive" Responsive website based on few standard screen ratio(eg. mobile, desktop, ipad) is not anymore useful nor sustainable. How can we design long lasting website in this constantly changing environment?',
      width / 2 - 40,
      height + pos * 0.75 + 80,
      width / 2 + 40,
      height - pos + 200
    );
    pop();
  }

  let vid3 = videos[3].get();
  image(vid3, width / 2, height + height / 2 + pos);

  //description for vid3
  let vid3_pos = height + height / 2 + pos;
  if (
    vid3_pos > height + height / 2 + pos * 1.5 &&
    vid3_pos < height + height / 2 - pos * 2
  ) {
    push();
    stroke(0);
    strokeWeight(2);
    fill("yellow");
    textFont(G2);
    textSize(32);
    rectMode(CORNERS);
    text(
      '"Disorganized Scroll Speed"',
      160,
      height + height / 2 + pos * 0.85 + 120,
      400,
      height + height / 2 - pos * 2 + 200
    );
    pop();
  }

  let vid5 = videos[5].get();
  image(vid5, 30, height + height + pos);

  //description for vid5
  let vid5_pos = height + height + pos;
  if (
    vid5_pos > height + height + pos &&
    vid5_pos < height + height + pos - 200
  ) {
    push();
    stroke(0);
    strokeWeight(2);
    fill("yellow");
    textFont(G2);
    textSize(32);
    rectMode(CORNERS);
    text(
      '"Speak Dont Speak"',
      width / 2,
      height + height + pos * 0.85 + 500,
      width / 2 + 80,
      height + height + pos * 2 + 200
    );
    pop();
  }

  let vid6 = videos[6].get();
  image(vid6, width / 3, height + height + height / 2 + height / 4 + pos);

  //description for vid6
  let vid6_pos = height + height + pos;
  if (
    vid6_pos > height + height + pos &&
    vid6_pos < height + height + pos - 200
  ) {
    push();
    stroke(0);
    strokeWeight(2);
    fill("yellow");
    textFont(G2);
    textSize(32);
    rectMode(CORNERS);
    text(
      '"Fountain"',
      width / 2 - 40,
      height + height + height / 2 + height / 4 + pos * 0.85 + 200,
      width / 2 + 80,
      height + height + height / 2 + height / 4 + pos * 2 + 200
    );
    pop();
  }
  
  push();
  noStroke();
  fill('red');
text('webtools',width / 6, height + height + height / 2 + height / 4 + height* 2+ pos)
  pop();

  image(img_hand, mouseX - 50, mouseY - 60, 100, 133);
  print("666");
}

function mousePressed() {
  //scene1
  if (scene1 == true) {
    if (e < 2) {
      for (let i = 0; i < 300; i++) {
        dots();
      }
      e++;
    } else if (e == 2) {
      background("blue");
      e++;
    } else if (e == 3) {
      scene2 = true;
      scene1 = false;
      loop();
    }
  }
  //scene2
  else if (scene2 == true) {
    if (e >= 3 && e <= 5) {
      print(e);
      e++;
      print(e);
    } else if (e == 6) {
      currentScene++;
      e++;
    } else if (e == 7) {
      currentScene++;
      e++;
    } else if (e == 8) {
      currentScene++;
      e++;
    } else if (e == 9){
         if (pos < -2985){
        window.open('https://yhsong.com/detail.html#Web_Tool_Overview', '_blank');
           print(can);
      }
    }
  }
} //end of mousePressed

function dots() {
  fill("blue");
  noStroke();
  circle(random(0, width), random(0, height), 50);
}
