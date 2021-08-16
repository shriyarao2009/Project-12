var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg;
var leafImg;
var orangeLeafImg;
var apple;
var orange;
var leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  var num = Math.round(random(1,3)) 
  if(frameCount%80 == 0) {
    if(num == 1) {
      createApples();
    }
    else if(num == 2) {
      createOranges();
    }
    else{
      createLeaves();
    }
  }

  drawSprites();
}

function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createOranges() {
  orange = createSprite(random(50, 350), 40, 10, 10);
  orange.addImage(orangeLeafImg);
  orange.scale = 0.07;
  orange.velocityY = 3;
  orange.lifetime = 150;
}

function createLeaves() {
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.07;
  leaf.velocityY = 3;
  leaf.lifetime = 150;
}