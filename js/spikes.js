function Spikes(x, y, k){   
    for (i = x; i<k; i = i+10){
        spikeObj = createSprite(i, y, 2, 20);
        spikeObj.shapeColor = "Black";
        spikeGroup.add(spikeObj);
    }
    
  }