const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world , engine


function setup() {
  createCanvas(800,400);
  
engine = Engine.create ()
world = engine.world
ground = new Ground(400,350,800,30)
ball = new Ball(100,100,20,20)
binSide1 = new Ground(600,290,20,90)
binSide2 = new Ground(740,275,20,120)


}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display()
  ball.display()
  binSide1.display()
  binSide2.display()


}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-15})
  }
}