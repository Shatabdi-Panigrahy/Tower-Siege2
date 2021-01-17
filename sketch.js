
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


//const Constraint=Matter.Constraint
var  circle1,ground1,ground2,ground3;	
var world,sling;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
 // ground1=createSprite(400,400,230,20)
 ground1=new Ground(400,400,230,20)
 	World.add(world, ground1);
	 ground2=new Ground(1000,150,300,20)
	 World.add(world, ground2);
	 ground3=new Ground(1170,600,3000,20)
	 World.add(world, ground3);	

 	box1=new Box(310,370,30,40)

box2=new Box(340,370,30,40)
box3=new Box(370,370,30,40)
box4=new Box(400,370,30,40)
box5=new Box(430,370,30,40)
box6=new Box(460,370,30,40)
box7=new Box(490,370,30,40)
box8=new Box(340,330,30,40)
box9=new Box(370,330,30,40)
box10=new Box(400,330,30,40)
box11=new Box(430,330,30,40)
box12=new Box(460,330,30,40)
box13=new Box(370,290,30,40)
box14=new Box(400,290,30,40)
box15=new Box(430,290,30,40)
box16=new Box(400,250,30,40);

box17=new Box(900,130,30,40)
box18=new Box(930,130,30,40)
box19=new Box(960,130,30,40)
box20=new Box(990,130,30,40)
box21=new Box(1020,130,30,40)
box22=new Box(1050,130,30,40)
box23=new Box(1080,130,30,40)
box24=new Box(920,130,30,40)
box25=new Box(950,90,30,40)
box26=new Box(960,90,30,40)
box27=new Box(1000,50,30,40)
box28=new Box(1030,100,30,40)
box29=new Box(1060,100,30,40)
box30=new Box(1070,100,30,40)


circle1=new Circle(100,200,60)

	
	sling =new SlingShot (circle1.body,{x:130,y:200})

Engine.run(engine);
	
  
}


function draw() {
	background("grey");
Engine.update(engine);
  
  circle1.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  fill(0);
  textSize(20);
  text("Drag the sling and release to hit the crazy blocks",190,50);

  ground1.display();
  ground2.display();
  ground3.display();

  sling.display();
  //circle1.display();
  drawSprites();

 
}

function keyPressed() {


  	if (keyCode === 32) {
      sling.attach(circle1.body);   
  	}
  }
	 
   
  function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX,y:mouseY})
	
	
	}
 	function mouseReleased (){
	sling.fly();
	
  }

