class Ground {
    constructor(x,y,w,h) {
      var options = {
          isStatic: true,
         

      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
     
      World.add(world, this.body);
    }
    display(){
      if (keyDown(32)){
        this.color=(color(random(20,255),random(20,255),random(20,255)))
        }else{
          this.color=255
        }
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
     // stroke("white")
      noStroke();
      rect(pos.x, pos.y, this.w, this.h);
    }
}