class Brick{
    constructor(x, y, w, h){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    display(){
        //rectMode(CENTER);
        var brickObj = createSprite(this.x, this.y, this.width, this.height);
        brickObj.shapeColor = "chocolate";
        player.collide(brickObj);
    }
}