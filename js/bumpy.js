function bumpyWall(x, y, k){
    
    for (i = y; i<k; i = i-10){
        var bumpyObj = createSprite(x, i, 20, 20);
        bumpyObj.shapeColor = "orange";
        bumpyGroup.add(bumpyObj);
    }
    
  }