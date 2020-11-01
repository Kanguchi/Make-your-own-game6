class Lava{
    constructor(x, y, w, h){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    display(){
        //rectMode(CENTER);
        var obj1 = createSprite(this.x, this.y, this.width, this.height);
        obj1.shapeColor = "Red";
    }
}