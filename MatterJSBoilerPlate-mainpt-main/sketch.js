
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var chao
var bola
var retângulo
var quadrado

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	
	
	
	var plane_options = {
		isStatic : true
	  }
	
	
	  var block1_options= {
		restitution:0.1,
		friction: 0.01 ,
		frictionAir: 0
	}
	  block1 = Bodies.circle(220,10,10,block1_options);
  World.add(world,block1);
 
  

  var block2_options= {
	restitution:0.7,
	friction: 0.01 ,
	frictionAir: 0.1
  
}
var block3_options= {
	restitution:0.7,
	friction: 0.01 ,
	frictionAir: 0.1
  
}
block3= Bodies.rectangle(350,10,50,10,block3_options);
	World.add(world,block3);
	
block2= Bodies.rectangle(300,10,10,10,block2_options);
	World.add(world,block2);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	chao= Bodies.rectangle(400,699,800,10,plane_options);
	World.add(world,chao);
}

function draw() {
  
  background(0);
  Engine.run(engine);
  ellipse(block1.position.x,block1.position.y,10)
   rect (block2.position.x,block2.position.y,10,10)
   rect (chao.position.x,chao.position.y,800,10)
   rect (block3.position.x,block3.position.y,50,10)
}



