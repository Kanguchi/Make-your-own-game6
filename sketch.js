var grounds, ground, keys, door;
var wall1, wall2, wall3;
var block1, spike1, climberObj, spikeObj;
var player;
var img, ballImg;
var lava;
var PLAY, END, gameState;
PLAY = 1;
END = 0;
  gameState = PLAY;


function preload(){
  img = loadImage("images/player.png");
  ballImg = loadImage("images/blackCircle.png");
  bgm = loadSound('sounds/BGM.wav');
  winSound = loadSound('sounds/winSound.mp3');
  jumpSound = loadSound('sounds/jumpSound.mp3');
  lose = loadSound('sounds/error.mp3');
  openDoor = loadImage('images/openDoor.png');
  closedDoor = loadImage('images/door.png');
  bg = loadImage('images/caveBG2.png');
  bricks = loadImage('images/stoneWall.jpg');
}

function setup() {
  createCanvas(700,400);
  block1 = new Block(290, 300, 80, 200);
  block2 = new Block(400, 200, 300, 80);
  block3 = new Brick(680, 310, 100, 15);
  block4 = new Brick(400, 350, 90, 15);

  ground = createSprite(350, 400, 750, 10);
  ground.shapeColor = "Black"
  
  door = createSprite(380, 307, 50, 70);
  door.shapeColor = "teal";
  door.addImage(closedDoor);
  door.scale = 0.3;

  //lava = new Lava(430, 170, 100, 20);
 
  player = createSprite(40, 330, 20, 40);
  player.addImage(img);
  player.scale = 0.2;
  player.setCollider("rectangle", -5, -3, 120, 350, 0);
  //player.debug = true;
  climbGroup = new Group;
  spikeGroup = new Group;
}

function draw() {
  background(bg); 
  
  //make sure the player collides with objects;
  edges = createEdgeSprites();
  player.collide(ground);
  player.collide(edges[0]);
  player.collide(edges[1]);
  player.collide(edges[2]);
  
  //create gravity
  player.velocityY = player.velocityY + 0.8;

  //add non-player-characters
  block1.display();
  block2.display();
  block3.display();
  block4.display();

  Spikes(130, 385, 180);
  //Spikes(450, 150, 490);
  Spikes(350, 150, 490);
  climber(250, 170, 400);

  if (gameState === PLAY){
    textSize(8);
    fill(225);
    text("keep pressing space and right arrow", 100, 200);
    text("while touching the wall to climb to the top", 90, 210);
    text("go through the door to escape the cave", 380, 250);
    text("jump over the spikes ", 110, 350);
    text("using space key", 120, 360);
    text("you can't jump on grey blocks", 580, 300);
    //create bgm
    bgm.playMode('untilDone');
    bgm.play();
    bgm.setVolume(0.05);
    //set player movement;
    if (keyWentDown("space") ){
      if(player.y>350){
        player.velocityY = - 10;
      } else if(player.y<126 && player.y>124){
        player.velocityY = - 10;
      } 
    jumpSound.setVolume(0.1);
    jumpSound.play();
    }
    if (keyDown("RIGHT_ARROW")){
      player.x = player.x + 10;
    }
    if (keyDown("LEFT_ARROW")){
      player.x = player.x - 10;
    }
    if(player.isTouching(climbGroup) && keyDown("space")) {
      player.y = 125;
    }  
     
    if(player.isTouching(door)){
      gameState = END;
      winSound.play();
      door.scale = 0.08;
      door.y = 309;
      door.addImage(openDoor);
    } 
    if(player.isTouching(spikeGroup)){
      player.x = 40;
      player.y = 330;
      lose.setVolume(1.0);
      lose.play();
    } 
  }else if (gameState === END){
    textSize(30);
    fill(68, 225, 0 );
    strokeWeight(3.5);
    stroke(68, 225, 0 );
    text("YOU ESCAPED!", 250, 100);
    bgm.pause();
    player.destroy();
  }
  
  
  drawSprites();
}

