var fixedRect, movingRect
var m,s;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  m=createSprite(200,100,30,40)
  m.shapeColor="pink"
  m.velocityX=5

  s=createSprite(700,100.40,30)
  s.shapeColor="purple"
  s.velocityX=-5
}
function draw() {
  background(0); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
if(m.y-s.y<m.height/2+s.height/2
  &&s.y-m.y<s.height/2+m.height/2){
    m.velocityY=m.velocityY*(-1)
    s.velocityY=s.velocityY*(-1)

}

if(m.x-s.x<m.width/2+s.width/2
  &&s.x-m.x<s.width/2+m.width/2){
    m.velocityX=m.velocityX*(-1)
    s.velocityX=s.velocityX*(-1)

}
  drawSprites();
}


