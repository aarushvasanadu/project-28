const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world , engine


function setup() {
  createCanvas(800,400);
  
engine = Engine.create ()
world = engine.world
ground = new Ground(400,350,800,30)


binSide1 = new Ground(600,295,20,90)
binSide2 = new Ground(700,290,20,100)
bin = new Bin(650,300,130,80)
ball = new Ball(100,100,40,40)

}

function draw() {
  background(255);  
  Engine.update(engine)
  ground.display()
  
  
  binSide1.display()
  binSide2.display()
  bin.display()
  ball.display()
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-25})
  }
}