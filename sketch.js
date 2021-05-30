var upper_ground;
var lower_ground;
var bricks;
var hexagon;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  
 engine = Engine.create();
 world = Engine.world;
  hexagon = new Hexagon(200,200,6,20);
}

function draw() {
  Engine.update(engine);
  background(100);
  hexagon.display();
  
  
}