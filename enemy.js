class Enemy{
    constructor(x, y){
      var  options={
       ' isStatic':true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
        }
     this.body=Bodies.rectangle(x,y,70,90,options);
     World.add(world,this.body)
      this.image = loadImage("enemy.png");
      this.Visiblity = 255;
    }
  
   display(){
     //console.log(this.body.speed);
     var pos=this.body.position
     if(this.body.speed < 2.8){
     imageMode(CENTER)
     image(this.image,pos.x,pos.y,80,100)
    }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 80, 100);
       pop();
     }
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
  
  
  };