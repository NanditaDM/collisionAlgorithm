var sRect, mRect;

function setup() {
  createCanvas(1600,800);
  sRect= createSprite(400, 200, 50, 100);
  mRect= createSprite(600, 200, 100, 50);
}

function draw() {
  background(0,0,10); 

  mRect.x = World.mouseX;
  mRect.y = World.mouseY;

  if (mRect.x- sRect.x < mRect.width/2 + sRect.width/2 &&
    sRect.x- mRect.x < mRect.width/2 + sRect.width/2 &&
    mRect.y- sRect.y < mRect.height/2 + sRect.height/2 &&
    sRect.y- mRect.y < mRect.height/2 + sRect.height/2 ){
    mRect.shapeColor = "red";
    sRect.shapeColor = "red";
  } else {
    mRect.shapeColor = "green";
    sRect.shapeColor = "green";
  }
  drawSprites();
}