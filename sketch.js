
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree
var ground,stone,stone1
var boy
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8
var chain

function preload()
{

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new Mango(760,255,70)
	mango2=new Mango(950,208,70)
	mango3=new Mango(900,134,70)
	mango4=new Mango(1000,160,70)
	mango5=new Mango(1100,210,70)
	mango6=new Mango(1000,256,70)
	mango7=new Mango(850,288,70)
	mango8=new Mango(790,199,70)
    tree=new Tree(700,100,40,300)
    ground=new Ground(600,600,1200,30)
	boy=new Boy(120,440,30,30)
	stone=new Stone(120,150,30)
	//chain=new Chain(stone.body,boy.body)
    chain= new Chain(stone.body,{x:160, y:480});

	Engine.run(engine);
  
}   


function draw() {
  rectMode(CENTER);
  background("lightblue");

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
 detectCollision(stone,mango8);

  stone.display();
  boy.display();
 ground.display();
 
 tree.display();
 chain.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 stone.display();
  drawSprites();
  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});  
   }

   function mouseReleased(){
	chain.fly(); 
  }

  function keyPressed(){
 
  if(keyCode===32){
	  Matter.Body.setPosition(stone.body,{x:235,y:420})
	  chain.attach(stone.body)
  }
         
}
  
function detectCollision(mango1,stone){

	var mangopos=mango1.body.position;
var stonepos=stone.body.position;

//object2=stone.body
//object1=mango1.body
//object1=mango2.body
//object1=mango3.body
//object1=mango4.body
//object1=mango5.body
//object1=mango6.body
//object1=mango7.body
//object1=mango8.body




var distance=dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)
  if(distance<=mango1.r+stone.r){
Matter.body.setStatic(mango1.body,false);
  }

}
 
