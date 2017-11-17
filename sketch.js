var ellipseX, ellipseY, xSpeed;

var ySpeed = 5;

var paddleWidth = 80;
var paddleHeight = 15;
var bottomGap = 40;


function setup() {
  createCanvas(400, 600);
  ellipseX = width/2;
  ellipseY = height/2;
  xSpeed = random(-5, 5);
}


function draw() {
  background(250);

  fill(0);
  ellipse(ellipseX, ellipseY, 30, 30);

  rect(width/2 - paddleWidth/2, height - bottomGap - paddleHeight, paddleWidth, paddleHeight);

if ( y >  &&
    the ball x is greater than the left paddle edge &&
    the ball x is less that the right paddle edge ) {

      reverse the ball's direction
    }
  ellipseX += xSpeed;
  ellipseY += ySpeed;
}