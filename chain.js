class chain
{
  constructor(body1,body2)
  {
    var options = {
        bodyA : body1,
        bodyB : body2,
        length : 50,
        stiffness : 0.03
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);

  }
  display()
  {
    
    var logpos = this.chain.bodyA.position;
    var birdpos = this.chain.bodyB.position;
  
    push()
    strokeWeight(20);
    line(logpos.x,logpos.y,birdpos.x,birdpos.y)
    pop()

  }

}