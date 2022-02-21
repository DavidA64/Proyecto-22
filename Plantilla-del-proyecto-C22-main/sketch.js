const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var a

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimage = loadImage("./assets/playerArcher.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  a=15
  var options = {
    isStatic:true
  }

  //crear el cuerpo base del jugador
  playerBase = Bodies.rectangle(100,350,180,150,options)
  World.add(world,playerBase)
  //crear el cuerpo del jugador
  player = Bodies.rectangle(150,playerBase.position.y - 160,50,180,options)
  World.add(world,player)

  playerArcher = Bodies.rectangle(127,250,180,150,options)
  World.add(world,playerArcher)

}

function draw() {
  background(backgroundImg);

  //mostrar la imagen del jugador utilizando la función image()
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  //mostrar la imagen de la base del jugador utilizando la función image()
  image(playerimage,player.position.x,player.position.y,50,180)
  image(playerArcherimage,playerArcher.position.x,playerArcher.position.y,100,100)


  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("TIRO CON ARCO ÉPICO", width / 2, 100);
}
