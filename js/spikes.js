function Spikes(x, y, k){   
    for (i = x; i<k; i = i+10){
        var Obj = createSprite(i, y, 2, 20);
        Obj.shapeColor = "Black";
        spikeGroup.add(Obj);
    }
    
  }