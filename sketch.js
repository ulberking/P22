var starImg,bgImg;
var star, starBody;
var fairy, fairy1, fairyS
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairy1 = loadImage("images/fairyImage1.png")
	fairyS = loadSound("sound/JoyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	fairyS.play()
   fairy = createSprite(100,600,1,1)
   fairy.addImage(fairy1)
   fairy.scale = 0.2

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);


}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 



  if(fairy.isTouching(star))
  {
	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20
	}
	if(keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 20
	}
	
}
