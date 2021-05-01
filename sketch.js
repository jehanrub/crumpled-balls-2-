const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperImage=loadImage('paper.png')
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width / 2, 480, width, 10)
	boxLeft = new Dustbin(500,420,10,100)
	boxBottom = new Dustbin(570,470,150,10)
	boxRight = new Dustbin(640,420,10,100)
	paper = new Paper(100,380,10);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  boxLeft.display();
  boxBottom.display();
  boxRight.display();
  paper.display();
  drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-42});
}
}