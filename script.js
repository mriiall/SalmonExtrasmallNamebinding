var g = 0.45;
var squares = [];

var bg;
var uy;
var hk;

class Raven {

  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.img = img;
  }
  
  draw() {
    var fly = this.isFlying();

    if (fly) {
      this.vy += g;
      this.y += this.vy;
    }
    
    image(this.img, this.x, this.y);
  }

  isFlying() {
    var fly = true;

    for (var i = 0; i < squares.length; i++) {
      if (this.x+8 >= squares[i].x && this.x+8 <= squares[i].x + LINE_WIDTH) {
        if (this.y >= squares[i].y - 18 && this.y <= squares[i].y+1) {
          fly = false;
        }
      }
    }

    return fly;
  }
}

class Square {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    image(uy, this.x, this.y, LINE_WIDTH, LINE_HEIGHT);
  }
}

var c1;



function preload() {
  bg = loadImage("bg.jpg");
  uy = loadImage("uy.jpg");
  hk = loadImage("hk.jpg");
}


function setup() {
  createCanvas(600, 400);
  background(255);

  c1 = new Raven(200, 180, hk);

  setupSquares();
}

var MAX_LINES = 7;
var MAX_BLOCKS = 25;
var LINE_HEIGHT = 30;
var LINE_WIDTH = 20;

function setupSquares() {
  // for (var i = 0; i < 10; i++) {
  //   var x = round(random(0, MAX_BLOCKS));
  //   var y = round(random(0, MAX_LINES));

  //   for (var j = 0; j < random(0, 5); j++) {
  //     var square = new Square((x+j)*LINE_WIDTH, y*LINE_HEIGHT);
  //     squares.push(square);
  //   }
  // }
//карта 1
  
  for (var j = 0; j < 4; j++) {
    var square = new Square((1+j)*LINE_WIDTH, 5*LINE_HEIGHT);
    squares.push(square);
  }

  for (var j = 0; j < 10; j++) {
    var square = new Square((5+j)*LINE_WIDTH, 7*LINE_HEIGHT);
    squares.push(square);
  }
  for (var j = 0; j < 5; j++) {
    var square = new Square((15+j)*LINE_WIDTH, (7-j)*LINE_HEIGHT);
    squares.push(square);
  }
  for (var j = 0; j < 5; j++) {
    var square = new Square((24+j)*LINE_WIDTH, 3*LINE_HEIGHT);
    squares.push(square);
  }
  for (var j = 0; j < 2; j++) {
    var square = new Square((20+j)*LINE_WIDTH, (7+j)*LINE_HEIGHT);
    squares.push(square);
  }
  for (var j = 0; j < 4; j++) {
    var square = new Square((22+j)*LINE_WIDTH, 7*LINE_HEIGHT);
    squares.push(square);
  }
  for (var j = 0; j < 1; j++) {
    var square = new Square((29+j)*LINE_WIDTH, 6*LINE_HEIGHT);
    squares.push(square);
  }
  
}

function draw() {
  background(bg);
  c1.draw();

  for (var i = 0; i < squares.length; i++) {
    squares[i].draw();
  }

   if (keyIsPressed === true) {
  if (keyCode === LEFT_ARROW) {
    c1.x -= 4;
  } else if (keyCode === RIGHT_ARROW) {
    c1.x += 4;
  }
   }


}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (c1.isFlying()) {
      
    } else {
      c1.vy -= 12;
      c1.y -= 25;
    }
  }
  
}