class Bob{
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:1.1,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
// how to apply force onto the balls 
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("Red");
        ellipse(pos.x, pos.y, this.radius, this.radius);
      }
}

function keyPressed(){
  if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ballObject1.body,ballObject1.body.position,{x:-150,y:-40});
  }
}
