function isTouching(ph1,ph2)
{
  if(ph1.x - ph2.x <= ph2.width/2 + ph1.width/2 &&
    ph2.x - ph1.x <= ph2.width/2 + ph1.width/2 &&
    ph1.y - ph2.y <= ph2.height/2 + ph1.height/2 &&
    ph2.y - ph1.y <= ph2.height/2 + ph1.height/2)
{
   return true;
}
else
{
  return false;
}

}