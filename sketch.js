
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){
pr=loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	left=new ground(900,260,20,200)
	right=new ground(1100,260,20,200)
    bottom=new ground(1000,350,200,20)

	Engine.run(engine);
    paper=new Paper(200,200)
}


function draw() {
 
  background("lightgrey");
 
Engine.update(engine)
  groundObject.display();
  left.display()
  right.display()
  bottom.display()
  paper.display()
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:20,y:-20})
	  }
}
