//to declare the variables
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime;

//to load images and animations
function preload(){
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}


function setup() {
  //to create the monkey
  monkey = createSprite(60, 320, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.105;
  
  //to create the ground
  ground = createSprite(200, 355, 800, 8);
  ground.velocityX = -5;
  
  //to declare the survival time
  survivalTime = 0;
  
  //to create groups
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
}


function draw() {
  //to add the background
  background("white");
  
  //jump when the space key is pressed
  if(keyDown("space")  && monkey.y >= 318) {
    monkey.velocityY = -13;
  }
  
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.5;
  
  //to create scrolling ground
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //to stop the monkey from falling
  monkey.collide(ground);
  
  //to draw all objects
  obstacles();
  food();
  drawSprites();
  
  //to display the survival Time
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = World.seconds;
  text("Survival Time: " + survivalTime, 140, 50);
}

//to create the bananas
function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,100,20,20);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4 ;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
}

//to create the obstacles
function obstacles(){
    if (frameCount % 300 === 0) {
    obstacle = createSprite(400,335,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -8;
    obstacle.lifetime = 50;
    obstacle.scale = 0.1;
  }
}
