

//always creaet variables here
var bg, bg_img;
var redb,blueb,greenb,pinkb,bow;
var red_img, blue_img, green_img, pink_img;
var bow , bow_img,arrow,arrow_img, select_balloon;
var score= 0;
function preload(){
 //load your images here 
  bg_img = loadImage("background0.png");
  red_img = loadImage("red_balloon0.png");
  blue_img = loadImage("blue_balloon0.png");
  green_img = loadImage("green_balloon0.png");
  pink_img = loadImage("pink_balloon0.png");
  bow_img = loadImage("bow0.png");
  arrow_img = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 500);
  //add code here
  //create bg sprite
  bg = createSprite(300, 80, 600, 500);
  bg.addImage("bg", bg_img);
  bg.scale = 2.5;
  bg.velocityX = -2;

  bow=createSprite(550,200,20,20);
  bow.addImage("bow",bow_img)
  
  redballoon();
  blueballoon();
  pinkballoon();
  greenballoon();
}

function draw() {

  background("skyblue");

  
  //add code here
  //conditional programming
  if (bg.x < 100) {
    bg.x = width/2
  }
 
  //move the bow with the mouse 
  bow.y=mouseY;
 //condition to generate arrows
  if(keyDown("space")){
    createarrow();
    arrow.y = bow.y;
  }

  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)

  if (World.frameCount % 100 == 0){
    if (select_balloon == 1){
      redballoon();
    }else if (select_balloon == 2){
      blueballoon();
    }else if(select_balloon == 3){
      pinkballoon();
    }else {
      greenballoon();
    }
  }
  
  drawSprites();
  textSize = 20;
  text("Score: "+score, 270, 30);
}

function redballoon() {
  
    redb = createSprite(0, Math.round(random(20, 370)), 20,
    20);
    redb.addImage("red", red_img);
    redb.velocityX=3;
    redb.lifetime = 200;
    redb.scale = 0.1;

}

function blueballoon(){
  
    blueb = createSprite(0,Math.round(random(20,370)),20, 20);
    blueb.addImage("blue",blue_img);
    blueb.velocityX=3;
    blueb.lifetime = 200;
    blueb.scale = 0.1;
  
}

function pinkballoon(){
  
    pinkb = createSprite(0,Math.round(random(20,370)),20,
    20);
    pinkb.addImage("pink",pink_img);
    pinkb.velocityX=3;
    pinkb.lifetime = 200;
    pinkb.scale = 1.2;
  
}

function greenballoon(){
  
    greenb = createSprite(0,Math.round(random(20,370)),20,
    20);
    greenb.addImage("green",green_img);
    greenb.velocityX=3;
    greenb.lifetime = 200;
    greenb.scale = 0.09;
  
}

//function to create arrows

function createarrow(){
  arrow=createSprite(550,100,10,10);
  arrow.velocityX= -6;
  arrow.addImage("arrow",arrow_img);
  arrow.lifetime=250;
  arrow.scale=0.3;
}