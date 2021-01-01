
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var base;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Balls(400,400);
	ball2 = new Balls(450,400);
	ball3 = new Balls(500,400);
	ball4 = new Balls(350,400);
	ball5 = new Balls(300,400);

	base = new roof(400,100,600,40);

	rope1 = new Rope(ball1.body, base.body,0 ,0 )
	rope2 = new Rope(ball2.body, base.body,50,0 )
	rope3 = new Rope(ball3.body, base.body,100,0 )
	rope4 = new Rope(ball4.body, base.body,-50,0 )
	rope5 = new Rope(ball5.body, base.body,-100,0 )


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  base.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
	  Matter.Body.applyForce(ball3.body, ball5.body.position,{x:75,y:-75});
	 
	  }
   }


