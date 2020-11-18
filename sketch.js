var car, wall1;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  

  
    
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(200, 200, 20, 20);
  car.velocityX = speed;
  car.shapeColor = color(255);
  wall1 = createSprite(1500,200,60,height/2);
  wall1.shapeColor = color(80,80,80);
  

 

 

    


}

function draw() {
  background("black");


if(wall1.x - car.x < (car.width + wall1.width)/2){
  var deformation = (0.5*weight*speed*speed)/22500;
  car.velocityX = 0;

    if (deformation> 100){
      car.shapeColor = color(0,255,0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation < 180){
      car.shapeColor = color(255,0,0);
    } 
  }



  drawSprites();
}