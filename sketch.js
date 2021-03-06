
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var keychecker = 1;
var box1, box2, box3;
var xPos = 450;
var yPos = 10;
var dustbin;

function preload(){
	dustbin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(width-(width-1050),height-(height-510),10,120);
	box2 = new Box(width-(width-1100),height-(height-570),110,10);
	box3 = new Box(width-(width-1150),height-(height-510),10,120);
	paper = new Paper(width-(width-125),height-100,30,30);
	trash = new Dustbin(width-(width-1100),height-(height-505), 120,145);
	// trashBody = Bodies.circle(100 , 200 , 15 , {restitution:0.3, friction: 0.5, density: 1.5});
	// World.add(world, trashBody);
	

	ground = Bodies.rectangle(width/2, height-15, width, 70, {isStatic: true})
	World.add(world, ground);

	groundSprite = createSprite(ground.position.x, ground.position.y, width, 50)
	// trash = createSprite(width-(width-1100),width-(width-1150),90,90);
	
	Engine.run(engine);

	
  
}


function draw() {
	
	

	Engine.update(engine);
	imageMode(CENTER);
	background(255);
	rect(100,width-(width-560),50,15);
	box1.display();
	box2.display();
	box3.display();
	paper.display();
	trash.display();
	
	fill("pink");
	
	drawSprites();
 
	fill("white");
	textSize(32)
	text(mouseX+ ", "+mouseY,400,100);
	
	keypress()
}


function keypress() {
	
}
