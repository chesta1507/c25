
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  object=Bodies.rectangle(50,100,50,50);
  World.add(world,object);
console.log(object);
console.log(object.position.x);
console.log(object.position.y);

obj1=Bodies.rectangle(200,100,10,20);
World.add(world,obj1);

obj2=Bodies.circle(150,40,100);
World.add(world,obj2);



}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rect(obj1.position.x,obj1.position.y,10,20);
    circle(obj2.position.x,obj2.position.y,100);
  
}
