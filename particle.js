class Particle{
    constructor(x,y){
   var options={
        restitution:0.4,
        isStatic:false
    }
   
    this.body=Bodies.circle(x,y,10,options)
    this.radius=10
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
    push();
    //console.log("particle is made")
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    pop();
    }
}