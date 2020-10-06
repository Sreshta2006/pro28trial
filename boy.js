class Boy{
    constructor(x, y, width, height) {
     var options = {
       //  'restitution':0.8,
          isStatic:true,
          'friction':0.3,
          'density':1.0
      }
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.boy=loadImage("images/boy.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position
     
      push();
      translate(pos.x,pos.y)
     
      rectMode(CENTER);
      strokeWeight(3);
      image(this.boy,0,0,200,200)
      fill("white");
    // rect(0,0, this.width, this.height);
      pop();
    }
  };
  
