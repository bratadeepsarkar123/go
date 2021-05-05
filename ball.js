class Ball {
  constructor(x, y) {
    var options = {
      
      isStatic:false,
      restitution:0.4,
      density:0.1,
      friction:0
    }
    this.body = Bodies.circle(x, y,12*width/1378, options);
    
    
    this.color=(color(random(20,255),random(20,255),random(20,255)))
   // this.image=loadImage("dustbingreen.png")
    World.add(world, this.body);
    
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    
  
    
    /*push();
    translate(pos.x,pos.y);
    rotate(angle);*/
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,12*width/1378)
    
    

    //imageMode(CENTER)
    //image(this.image,pos.x,pos.y,this.width,this.width)
  }
}