var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  
  wall = createSprite(1200,200,60,height/2);
 car = createSprite(50,200,50,50);

 speed = random(55,90);
 weight = random(400,1500);

}

function draw() {
  background(0);
  car.shapeColor = "white";
  car.velocityX = speed;

  deformation = 0.5*weight*speed*speed/22500;
  
  if(car.x>1140)
  {
    car.velocityX = 0;
    if(deformation<100)
    {
      car.velocityX = 0;
      car.shapeColor = "Green";
  
    }
  
    if(deformation<180 && deformation>100 )
    {
      car.velocityX = 0;
      car.shapeColor = "yellow";
  
    }
  
    if(deformation>180)
    {
      car.velocityX = 0;
      car.shapeColor = "red";
  
    }
  }
drawSprites();
}