var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600 ,400);
 // createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(50,200,100,50);
 // bullet.shapeColor=color(128,0,128);
  wall=createSprite(1200,200,thickness,height/2);   
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255,255,255);
  thickness=random(22,83);

}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}

function draw() {
  background(0,0,0);  
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;  
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    textSize(20);
   
   

    if(damage>10){
      wall.shapeColor=color(255,0,0);
      fill("red");
      text("Damage = "+damage,200,200);
      text("Bullet pierced :- Ineffective wall",200,220);
    }

    if(damage<10)
    {wall.shapeColor=color(0,255,0)
      fill("green");
      text("Damage = "+damage,200,200);
      text("Bullet could not pierce :- Effective wall",200,220);
      
  
    }
   
  }

  drawSprites();
}