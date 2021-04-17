const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var plinkos=[]
var particles=[]
var divisionHeight = 300
var divisions=[]
var ground
function setup(){

  var canvas = createCanvas(645,490);
  engine = Engine.create();
  world = engine.world;
  for(var i=0;i<=width;i=i+80){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight));
    }

    for(var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
    }
    console.log(plinkos)
     for(var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175));
    }
     for(var i=40;i<=width;i=i+50){
      plinkos.push(new Plinko(j,275));
    }
     for(var i=15;i<=width-10;i=i+50){
      plinkos.push(new Plinko(j,375));
    }
  options={
    isStatic:true
  }
  fill("white")
  ground=Bodies.rectangle(400,490,800,10,options);
  World.add(world,ground)
Engine.run(engine);
}
function draw(){
  background("black");
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)

  if (frameCount%1===0){
    particles.push(new Particle(random(width/2-20,width/2+20),10))
    }
   // console.log(particles)

    for(var i=0;i<divisions.length;i=i+1){
    divisions[i].display();

  }
   //Displaying the PLINKOS
   for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
  
    
      for(var k = 0; k < particles.length ; k++){
        particles[k].display()
      }
      
  }
/*function keyPressed(){
  if(keyCode===32){
  for(var k = 0; k < particles.length ; k++){
    particles[k].display()
  }
  }
}*/