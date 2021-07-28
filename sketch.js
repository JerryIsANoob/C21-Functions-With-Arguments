var fBox1, movingBox,fBox2,fBox3,fBox4;
function setup()
 {
  createCanvas(800,400);
  fBox1=createSprite(400, 200, 50, 50);
  fBox1.shapeColor="green"

  movingBox = createSprite(400, 200, 30, 100);
  movingBox.shapeColor = "green";

  fBox2=createSprite(300, 200, 50, 50);
  fBox2.shapeColor="green"

  fBox3=createSprite(200, 200, 50, 50);
  fBox3.shapeColor="green"

  fBox4=createSprite(500, 200, 50, 50);
  fBox4.shapeColor="green"
}

function draw()
{
  background("cyan");

  movingBox.x = mouseX;
  movingBox.y = mouseY;


  console.log(movingBox.x - fBox1.x);

if(isTouching(fBox1,movingBox))
{
  fBox1.shapeColor="red";
  movingBox.shapeColor = "red";
}
else if(isTouching(fBox2,movingBox))
{
  fBox2.shapeColor="red";
  movingBox.shapeColor = "red";
}
else if(isTouching(fBox3,movingBox))
{
  fBox3.shapeColor="red";
  movingBox.shapeColor = "red";
}

else if(isTouching(fBox4,movingBox))
{
  fBox4.shapeColor="red";
  movingBox.shapeColor = "red";
}

else
{
  fBox1.shapeColor="green";
  movingBox.shapeColor = "green";
  fBox2.shapeColor = "green";
  fBox3.shapeColor = "green";
  fBox4.shapeColor = "green";
}



  drawSprites();
  
}