var backgroundImg;
var frogImg;
var rect1,rect2;

function preload(){

    backgroundImg= loadImage("sky.png");
    frogImg=loadImage("frog.png")
}

function setup() {
    
    createCanvas(1000,500);

    background = createSprite(200,180,400,20);
    background.addImage("bg",backgroundImg);
    background.scale=1.2

    frog = createSprite(100,450)
    frog.addImage("fr",frogImg)
    frog.scale=0.2


    rect1 = createSprite(300,380,100,10)
    rect1.shapeColor="darkred";
    
    rect2 = createSprite(600,380,100,10)
    rect2.shapeColor="darkred";
    rect2.velocityY = random(-1,1)
    rect2.velocityX = random(-1,1)
    rect1.debug = true;
    frog.debug = true;
}


function draw() {

    if(keyDown("space")){
    frog.velocityY = -5;
 }
 
 //gravityforfrog
 frog.velocityY = frog.velocityY+0.5

 if(keyDown("right_arrow")){
    frog.velocityX = +2
 }
frog.collide(rect1)
if(frog.isTouching(rect1)){
    frog.velocityY = 0;
    frog.velocityX = 0;
}

    drawSprites();
}