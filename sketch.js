
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, bob , bob2 , bob3, bob4, bob5;
var rope , rope2
 , rope3, rope4,rope5;
var startX,startY;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
startX=width/2;
startY = height/4;
	//Create the Bodies Here.
roof = new Roof(width/2,height/4,width/7,20);
bob = new Bob(startX-80,startY,40);
bob2 = new Bob(startX-40,startY,40);
bob3 = new Bob(startX,startY,40);
bob4 = new Bob(startX+40,startY,40);
bob5 = new Bob(startX+80,startY,40);
rope = new Rope(bob.body,roof.body,-80,0);
rope2 = new Rope(bob2.body,roof.body,-40,0);
rope3 = new Rope(bob3.body,roof.body,0,0);
rope4 = new Rope(bob4.body,roof.body,40,0);
rope5 = new Rope(bob5.body,roof.body,80,0);

console.log(rope);
//bob2 = new Bob(240,100,40);
//rope2  =new Rope(bob2.body,roof.body,-bob2.radius*4,0);
console.log(roof);
console.log(bob);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(400);
  Engine.update(engine);
  roof.display();
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
Force();
  drawSprites();
 
}
function Force(){
  if(keyDown("UP_ARROW")){
    Matter.Body.applyForce(bob.body,bob.body.position,{x:-20,y:-10});
  }
}



