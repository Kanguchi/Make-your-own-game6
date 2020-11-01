var grounds, ground, keys, door;
var wall1, wall2, wall3;
var block1, spike1, bumpyObj;
var player;
var img;
var lava;

var spikeGroup, bumpyGroup;

function preload(){
  img = loadImage("player.png");
  bgm = loadSound('BGM.mp3');
}

function setup() {
  createCanvas(700,400);
  
  ground = createSprite(350, 400, 750, 10);
  ground.shapeColor = "Black"
  keys = new Key(480, 307);
  
  block1 = new Block(290, 300, 80, 200);
  block2 = new Block(400, 200, 300, 80);
  block3 = new Block(680, 310, 100, 15);
  block4 = new Block(500, 320, 90, 15);

  lava = new Lava(430, 170, 100, 20);
 
  player = createSprite(40, 330, 20, 40);
  player.addImage(img);
  player.scale = 0.2;
  player.setCollider("rectangle", -5, -3, 120, 350, 0);
  //player.debug = true;

  spikeGroup = new Group();
  bumpyGroup = new Group();
  
}

function draw() {
  background("snow"); 
  //make sure the player collides with objects;
  edges = createEdgeSprites();
  player.collide(ground);
  player.collide(edges[0]);
  player.collide(edges[1]);
  player.collide(edges[2]);
  //create bgm
  bgm.play();
  bgm.setVolume(0.04);
  player.velocityY = player.velocityY + 0.8;

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  lava.display();
  keys.display();

  if (keyDown("space") ){
    if(player.y>350){
      player.velocityY = - 10;
    } else if(player.y===125){
      player.velocityY = - 10;
    }
    
  }
  if (keyDown("RIGHT_ARROW")){
    player.x = player.x + 10;
  }
  if (keyDown("LEFT_ARROW")){
    player.x = player.x - 10;
  }
  bumpyWall(350, 200, 10);
  Spikes(130, 385, 180);
  
  drawSprites();

  
}

