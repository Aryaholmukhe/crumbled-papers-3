
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var paperObject, trashcan, ground, groundBody, s1, s2, s3, s1s, s3s, launch

function preload(){
}

function setup() {
	createCanvas(1367, 700);

	//Create the Bodies Here.

	engine = Engine.create();
	world = engine.world;

	groundBody = Bodies.rectangle(width/2, height-35, width,10, {isStatic:true})
	World.add(world, groundBody)
	ground = createSprite(width/2, height-35, width,10);
	paperObject = new Paper(200, 500);

	s1s = createSprite(960, 510, 20, 300)
	s1 = Bodies.rectangle(960, 510, 20, 300, {isStatic:true})
	World.add(world, s1)

	s2 = new Dustbin(1100, 650, 200, 20)

	s3s = createSprite(1240, 510, 20, 300)
	s3 = Bodies.rectangle(1240, 510, 25, 300, {isStatic:true})
	World.add(world, s3)
	
	launch = new Launcher(paperObject, {x:200, y:100})
  
	Engine.run(engine);
}


function draw() {

	Engine.update(engine);
  rectMode(CENTER);
  background("#78c4d4");
  paperObject.display()
  groundBody.x=ground.x;
  launch.display()
  drawSprites();
  s2.display()
  keyPressed();
  s1s.x=s1.x;
  s3s.x=s3.x;
 
}

function keyPressed(){
	if(keyIsDown(UP_ARROW) ){
	Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85})
}
}

function mouseDragged(){
    Matter.Body.setPosition(launch.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    launch.fly()
}