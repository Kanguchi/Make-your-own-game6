class Key{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    display(){
        var keys = createSprite(this.x, this.y, 20, 10);
        keys.shapeColor = "Gold";
    }
}