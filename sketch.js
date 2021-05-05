const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world,ground,ball,rope,n;
var ball= [];
var gola=[];
var ground=[];
var gul=[];


  

//var c=(color(random(20,25),random(20,25),random(20,25)))
function setup() {
 var c= createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
    world = engine.world;
   Engine.run(engine);

  for (var k=width/30; k <= windowWidth ; k=k+width/15){
    ground.push(new Ground(k,height-height/4,width/100,height/2))

  }
  for (var k=(width/30 +width/30); k <= 19*windowWidth/20 ; k=k+width/15 ){
    gul.push(new Ground(k,height-height/100,width/15,height/50))
    //s1.push(text("1",j,3*height/4) )     
  }

  for(var q=2*height/40; q <=height/2;q=q+height/10){
   for (var k=width/30; k <= windowWidth ; k=k+width/15 ){
      gola.push(new Poff(k,q))
    }
  }
 // n=new Ground(width/2,height-height/100,width,height/50)
  

  for(var q=4*height/40; q <=height/2;q=q+height/10){
    for (var k=(width/30 +width/30); k <= 19*windowWidth/20 ; k=k+width/15 ){
      gola.push(new Poff(k,q))
    }
  }

 
    

  
  


  

};

function draw() {
  if(keyDown(32)){
    var g=200
    var h=6
  }else{
    g=0
    h=60;
  }
  
  
  background(g); 
 
  if(frameCount%h===0){
      
    ball.push(new Ball(random(2*height/40,width-2*height/40),10))
 }
 

  //text("your score is :- ",width*3/4,height/5 )


  Engine.update(engine);
    
  
   
   for(var i=0;i<gola.length;i++){
     gola[i].display();
    }
   for(var i=0;i<ball.length;i++){
     ball[i].display();
    }
   for(var i=0;i<gul.length;i++){
     gul[i].display();
    }
   for(var i=0;i<ground.length;i++){
      ground[i].display();
    }
   /* for(var i=0;i<gola.length;i++){
     ball[i].display();
   }*/
    // n.display(); 


 for (var k=(2*width/33); k <= 19*windowWidth/20 ; k=k+width/15 ){
   var v=30*height/678;
   fill(255,90,0)
   textSize(30);
    text("1p",k,3*height/4);
      
  } 
  
 
  var s=ball.length;
 text("balls used :- "+s,4*width/5,height/4) 

 text(" Press space key to see a magic ",1.7*width/5,height/4) 
 
  console.log(windowWidth)
  drawSprites();
}


