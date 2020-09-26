var ballObject1,ballObject2,ballObject3,ballObject4,ballObject5,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,100,400,40);

	ballObject1 = new Bob(300,600,25);
	ballObject2 = new Bob(350,600,25);
	ballObject3 = new Bob(400,600,25);
	ballObject4 = new Bob(450,600,25);
	ballObject5 = new Bob(500,600,25);


	rope1 = new Rope(ballObject1.body,ground.body,-100,0) 
	rope2 = new Rope(ballObject2.body,ground.body,-50,0) 
	rope3 = new Rope(ballObject3.body,ground.body,0,0) 
	rope4 = new Rope(ballObject4.body,ground.body,50,0)
	rope5 = new Rope(ballObject5.body,ground.body,100,0)
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();
  



  drawSprites();
 
}


