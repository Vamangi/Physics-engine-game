class Bow{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.image = loadImage("bow.png");
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    attach(body){
        this.body.bodyA = body;
    }
    
    fly(){
        this.body.bodyA = null;
    }

    display(){
        image(this.image,20,200);
    if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
         
            strokeWeight(7);
            line(pointA.x - 20, pointA.y, pointB.x -38, pointB.y-500);
            line(pointA.x - 20, pointA.y, pointB.x + 10, pointB.y - 3);
          
        }
    }
    
}