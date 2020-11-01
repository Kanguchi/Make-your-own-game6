function climber(x, y, k){   
    for (i = y; i<k; i = i+18){
        climberObj = createSprite(x, i, 20, 20);
        climberObj.shapeColor = "orange";
        climberObj.addImage(ballImg);
        climberObj.scale = 0.07;
        climbGroup.add(climberObj);
        player.collide(climberObj);
    }

    
    
  }