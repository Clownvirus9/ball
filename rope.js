class Rope{
    constructor(body1, body2, offsetX, offsetY)
    {
  
      this.offsetX = offsetX;
      this.offsetY = offsetY;
     var options = {

       bodyA: body1,
       bodyB: body2,
       pointB:{x:this.offsetX, y:this.offsetY}
     }

     this.rope = Constraint.create(options);
     World.add(world, this.rope);
   }
    display(){
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;

      strokeWeight(5);
      stroke("black");

      var connection1X = pointA.x;
      var connection1Y = pointA.y;

      var connection2X = pointB.x + this.offsetX;
      var connection2Y = pointB.y + this.offsetY;
      line(connection1X, connection1Y, connection2X, connection2Y); 

    }






}