	class Arrow{
		constructor(x, y) {
			var options = {
				'restitution':0.8,
				'friction':1.0,
				'density':1.0	
						}				
			this.body = Bodies.rectangle(x, y, 50, 50, options);
			this.width = width;
			this.height = height;
			this.image = loadImage("arrow.png");
		

			World.add(world, this.body);
		  }
		  display(){
			var angle = this.body.angle;
			push();
			translate(this.body.position.x, this.body.position.y);
			rotate(angle);
			imageMode(CENTER);
			image(this.image, 0, 0,200,50);
			pop();
		  }
	}



	

