var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(700, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameObject1 = createSprite(400,800,50,60);
  gameObject1.shapeColor = "red";
  gameObject1.velocityY = -5;

  gameObject2 = createSprite(200,500,60,50);
  gameObject2.shapeColor = "red";
}

function draw() {
  background(0,0,0);  

  bounceOff(gameObject1, fixedRect);
  drawSprites();
}

