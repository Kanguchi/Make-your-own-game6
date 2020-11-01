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
  bgm = loadSound('sounds/BGM.mp3');
  winSound = loadSound('sounds/winSound.mp3');
  jumpSound = loadSound('sounds/jumpSound.mp3');
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
  background("snow"); 
  
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
  Spikes(450, 150, 490);
  Spikes(350, 150, 400);
  climber(250, 170, 400);

  if (gameState === PLAY){
    textSize(10);
    text("go through the blue door to escape the cave", 380, 250);
    text("jump over the spikes ", 100, 350);
    text("using space key", 120, 360);
    textSize(8);
    text("you can't jump on brown blocks", 580, 300);
    //create bgm
    bgm.play();
    bgm.setVolume(0.04);
    //set player movement;
    if (keyDown("space") ){
      if(player.y>350){
        player.velocityY = - 10;
      } else if(player.y<126 && player.y>124){
        player.velocityY = - 10;
      } 
    jumpSound.play();
    }
    if (keyDown("RIGHT_ARROW")){
      player.x = player.x + 10;
    }
    if (keyDown("LEFT_ARROW")){
      player.x = player.x - 10;
    }
    if(player.isTouching(climberObj) && keyDown("space")) {
      player.y = 125;
    }  
     
    if(player.isTouching(door)){
      gameState = END;
      winSound.play();
    }  
  }else if (gameState === END){
    textSize(30);
    fill("green");
    stroke("brown");
    text("YOU ESCAPED!", 100, 100);
    player.destroy();
  }
  
  
  drawSprites();
}

