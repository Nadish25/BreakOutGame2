var playerPaddle;
var ball;
var bot1;
var bot2;
var bot3;
var bot4;
var bot5;
var bot6;
var bot7;
var bot8;
var bot9;
var bot10;
var bot11;
var bot12;
var lives=3;
var score=0;
var gameState=0;
var ballImg;
var beepSound;
var gameOver;
function preload(){
  ballImg=loadImage("ballImg.png")
  beepSound=loadSound("beep-07.mp3")
  gameOver=loadSound("game-over.mp3")
}
function setup() {
  createCanvas(1000,600);
//PLAYER
  playerPaddle=createSprite(300,500,155,20)
//BALL
  ball=createSprite(350,400,25,25)
  ball.addImage(ballImg)
  ball.scale=0.05;
//BORDERS
  border1=createSprite(700,300,10,600)
  border1.shapeColor="red"

  border2=createSprite(2,300,10,600)
  border2.shapeColor="red"

  border3=createSprite(320,5,750,10)
  border3.shapeColor="red"; 

//BOTS
  bot1=createSprite(100,50,110,60);
  bot1.shapeColor="green";
  bot2=createSprite(220,50,110,60);
  bot2.shapeColor="green";
  bot3=createSprite(340,50,110,60);
  bot3.shapeColor="green";
  bot4=createSprite(460,50,110,60);
  bot4.shapeColor="green";
  bot5=createSprite(580,50,110,60);
  bot5.shapeColor="green";
  bot6=createSprite(100,120,110,60);
  bot6.shapeColor="green";
  bot7=createSprite(220,120,110,60);
  bot7.shapeColor="green";
  bot8=createSprite(340,120,110,60);
  bot8.shapeColor="green";
  bot9=createSprite(460,120,110,60);
  bot9.shapeColor="green";
  bot10=createSprite(580,120,110,60);
  bot10.shapeColor="green";
  bot11=createSprite(100,190,110,60);
  bot11.shapeColor="green";
  bot12=createSprite(220,190,110,60);
  bot12.shapeColor="green";
  bot13=createSprite(340,190,110,60);
  bot13.shapeColor="green";
  bot14=createSprite(460,190,110,60);
  bot14.shapeColor="green";
  bot15=createSprite(580,190,110,60);
  bot15.shapeColor="green";
  bot16=createSprite(100,260,110,60);
  bot16.shapeColor="green";
  bot17=createSprite(220,260,110,60);
  bot17.shapeColor="green";
  bot18=createSprite(340,260,110,60);
  bot18.shapeColor="green";
  bot19=createSprite(460,260,110,60);
  bot19.shapeColor="green";
  bot20=createSprite(580,260,110,60);
  bot20.shapeColor="green";
}

function draw() {
  background(0);
  playerPaddle.x=mouseX;

  


//START THE GAME
   


  if(gameState==0 && lives>0){
    fill(255)
    textSize(20);
    text("Press Space to Strike",350,378);
    ball.x=350;
    ball.y=400;
    
    if (keyDown("space")) {


     
      ball.velocityY = ball.velocityY +6;
      ball.y=400;
      ball.x=350;
      gameState=1;
    }
  }

  if(gameState==1){
  
    
//LIVES
if(ball.y>600){
  lives=lives-1
  gameState=0;
}

if(lives<1){
  ball.destroy();
}

//SCORE
if(ball.isTouching(bot1)){
  score++;
  ball.velocity+3;
}

if(ball.isTouching(bot2)){
  score++;
  ball.velocity+3;
} 

if(ball.isTouching(bot3)){
  score++;
  ball.velocity+3;
} 

if(ball.isTouching(bot4)){
  score++;
  ball.velocity+3;
} 

if(ball.isTouching(bot5)){
  score++;
  ball.velocity+3;
} 

if(ball.isTouching(bot6)){
  score++;
  ball.velocity+3;
} 

if(ball.isTouching(bot7)){
  score++;
  ball.velocity+3;
} 

if(ball.isTouching(bot8)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot9)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot10)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot11)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot12)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot13)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot14)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot15)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot16)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot17)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot18)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot19)){
  score++;
  ball.velocity+1;
} 

if(ball.isTouching(bot20)){
  score++;
  ball.velocity+1;
} 




/*
for (var i = 90; i < 650; i=i+120) {
  var bots = createSprite(i,100, 110, 50);
// bots.setAnimation();
}

for (var i = 90; i < 650; i=i+120) {
  var bots2 = createSprite(i,40, 110, 50);
// bots.setAnimation();
}

for (var i = 90; i < 650; i=i+120) {
  var bots3 = createSprite(i,160, 110, 50);
// bots.setAnimation();
}

for (var i = 90; i < 650; i=i+120) {
  var bots4 = createSprite(i,220, 110, 50);
// bots.setAnimation();
}

for (var i = 90; i < 650; i=i+120) {
  var bots5 = createSprite(i,280, 110, 50);
// bots.setAnimation();
}

*/

//ROTATIONS
if(keyDown("LEFT_ARROW")){
  playerPaddle.rotation=-35;
}
if(keyWentUp("LEFT_ARROW")){
  playerPaddle.rotation=0;
}

if(keyDown("RIGHT_ARROW")){
  playerPaddle.rotation=35;
}
if(keyWentUp("RIGHT_ARROW")){
  playerPaddle.rotation=0;
}




//BALL BOUNCE OFF PLAYER PADLE
if(ball.isTouching(playerPaddle)){
ball.bounceOff(playerPaddle);
}




//BALL BOUNCE OFF BORDERS
if(ball.isTouching(border2)){
ball.bounceOff(border2);
}


if(ball.isTouching(border1)){
ball.bounceOff(border1);
}

if(ball.isTouching(border3)){
ball.bounceOff(border3);
}









//BALL BOUNCE OFF ALL BOTS
if(ball.isTouching(bot1)){
ball.bounceOff(bot1)
beepSound.play();
bot1.destroy();
}

if(ball.isTouching(bot2)){
ball.bounceOff(bot2)
beepSound.play();
bot2.destroy();
}

if(ball.isTouching(bot3)){
ball.bounceOff(bot3)
beepSound.play();
bot3.destroy();
}

if(ball.isTouching(bot4)){
ball.bounceOff(bot4)
beepSound.play();
bot4.destroy();
}

if(ball.isTouching(bot5)){
ball.bounceOff(bot5)
beepSound.play();
bot5.destroy();
}

if(ball.isTouching(bot6)){
ball.bounceOff(bot6)
beepSound.play();
bot6.destroy();
}

if(ball.isTouching(bot7)){
ball.bounceOff(bot7)
beepSound.play();
bot7.destroy();
}

if(ball.isTouching(bot8)){
ball.bounceOff(bot8)
beepSound.play();
bot8.destroy();
}

if(ball.isTouching(bot9)){
ball.bounceOff(bot9)
beepSound.play();
bot9.destroy();
}

if(ball.isTouching(bot10)){
ball.bounceOff(bot10)
beepSound.play();
bot10.destroy();
}

if(ball.isTouching(bot11)){
ball.bounceOff(bot11)
beepSound.play();
bot11.destroy();
}

if(ball.isTouching(bot12)){
ball.bounceOff(bot12)
beepSound.play();
bot12.destroy();
}

if(ball.isTouching(bot13)){
ball.bounceOff(bot13)
beepSound.play();
bot13.destroy();
}

if(ball.isTouching(bot14)){
ball.bounceOff(bot14)
beepSound.play();
bot14.destroy();
}

if(ball.isTouching(bot15)){
ball.bounceOff(bot15)
beepSound.play();
bot15.destroy();
}

if(ball.isTouching(bot16)){
ball.bounceOff(bot16)
beepSound.play();
bot16.destroy();
}

if(ball.isTouching(bot17)){
ball.bounceOff(bot17)
beepSound.play();
bot17.destroy();
}

if(ball.isTouching(bot18)){
ball.bounceOff(bot18)
beepSound.play();
bot18.destroy();
}

if(ball.isTouching(bot19)){
ball.bounceOff(bot19)
beepSound.play();
bot19.destroy();
}

if(ball.isTouching(bot20)){
ball.bounceOff(bot20)
beepSound.play();
bot20.destroy();
}



/*
if(ball.isTouching(bots2)){
bots.destroy();
ball.bounceOff(bots2)
}

if(ball.isTouching(bots3)){
bots.destroy();
ball.bounceOff(bots3)
}

if(ball.isTouching(bots4)){
bots.destroy();
ball.bounceOff(bots4)
}

if(ball.isTouching(bots5)){
bots.destroy();
ball.bounceOff(bots5)
}

*/

  }

  if(lives<1){
    fill("red")
    textSize(20)
    text("YOU LOST, PRESS CTRL+R TO TRY AGAIN",220,400)
    over();
  }

  if(score>19){
    gameState=2;
    text("YOU WON !!! Keep trying ",300,400)
  }
//TEXTS
    textSize(18);
    fill ("gold");
    text("Press left and right arrow to rotate",720,198)
    text(" Paddle",720,220)
    text("Press F11 Or FN+F11",780,500)
    fill(255)
    text("Lives : "+lives,720,20)
    text("Score : "+score,720,40)

  drawSprites();
}

function over(){
  gameOver.play();
}