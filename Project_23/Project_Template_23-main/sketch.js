const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var humBase;
var humPlayer;
var comBase;
var comPlayer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  humBase = new PlayerBase(300,random(450,height-300),180,150);
  humplayer = new Player(285,300,50,180);
  comBase = new ComputerBase(1300,random(450,height-300),180,150);
  comPlayer = new ComputerPlayer(1285,300,50,180);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   comBase.display();
   humBase.display();


   //display Player and computerplayer
  humplayer.display();
  comPlayer.display();

}
