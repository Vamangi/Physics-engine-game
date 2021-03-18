  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  var engine, world;
  var arrow,bow,enemy1

   var gameState = "onSling";
var score=0
var im

function preload(){
  bg =loadImage("back.jpg")
}

    function setup() {
    createCanvas(1600,830);

    engine = Engine.create();
    world = engine.world;
    ground = new Ground(0,height,5000,20);


    arrow=new Arrow(380,500)
    bow=new Bow(arrow.body,{x:400,y:800})

    enemy1=new Enemy(1500,770)
    enemy2=new Enemy(1430,770)
    enemy3=new Enemy(1370,770)
    enemy4=new Enemy(1300,770)
    enemy5=new Enemy(1230,770)
    enemy6=new Enemy(850,540)
    enemy7=new Enemy(920,540)
    enemy8=new Enemy(990,540)
    enemy9=new Enemy(1060,540)
    enemy10=new Enemy(1130,540)
    enemy11=new Enemy(1500,240)
    enemy12=new Enemy(1430,240)
    enemy13=new Enemy(1360,240)
    

    g1=new Ground(1000,600,400,3)
    g2=new Ground(1410,300,250,3)


  }

  function draw() {
  

   
 
    background("white"); 

    Engine.update(engine);
    
    bow.display()
  enemy1.display()
  enemy1.score();
  enemy2.display()
  enemy2.score();

  enemy3.display()
  enemy3.score();

  enemy4.display()
  enemy4.score();

  enemy5.display()
  enemy5.score();

  enemy6.display()
  enemy6.score();


  enemy7.display()
  enemy7.score();

  enemy8.display()
  enemy8.score();

  enemy9.display()
  enemy9.score();

  enemy10.display()
  enemy10.score();

  enemy11.display()
  enemy11.score();

  enemy12.display()
  enemy12.score();


  enemy13.display()
  enemy13.score();


  textSize(35)
  fill("red")
  text("press SPACE KEY to get one more chance  " , 300, 90)

  textSize(35)
  fill("black")
  text("Score: " + score, 300, 50)
  g1.display()
  g2.display()
  arrow.display()


  ground.display()
  
    drawSprites();
  }

  function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
  }
  }


  function mouseReleased(){
    bow.fly();
    gameState="launched"
  }
  


  function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(arrow.body, {x: 380, y: 500});
      bow.attach(arrow.body)
    }
}