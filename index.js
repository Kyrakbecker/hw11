var x = 798;
var y = 598;
var c1x =10;
var c1y = 10;
var c2x = 20;
var c2y = 20;
var mousex = 0;
var mousey = 0;
var diameter = 25;



var txt;
var movement;


function setup() 
{
  createCanvas(800, 600);
  movement = Math.floor(Math.random() * 10) + 1;
  speed2 = Math.floor(Math.random() * 10) + 1;
}

function draw() 
{
  background(0);
  fill(24, 200, 29);
  circle(x, y, diameter);
  fill(450,60,10);
  circle(c1x,c1y,30);
  fill(400,300,10);
  circle(c2x,c2y,100);
  fill(400,300,10);
  ellipse(x,y,40,50);
  textSize(40);
  text('EXIT', 20, 30)

  //if(c1x >= 800 || c1x <= 0)
  //{
     //movement *= -1;
  //}

  //if(c1y >= 600 || c1y <= 0)
  //{
    // movement *= -1;
  //}

   //x += movement;
   
   if(c1x >= 800 || c1x <= 0)
  {
     movement *= -1;
  }

  if(c1y >= 600 || c1y <= 0)
  {
     movement *= -1;
  }

   c1x += movement;
   
   if(c2x >= 800 || c2x <= 0)
  {
     movement *= -1;
  }

  if(c2y >= 600 || c2y <= 0)
  {
     speed2 *= -1;
  }

   c2y += speed2;

  if (x >= 800) 
  {
    x = 0;
  }

  if (keyIsDown(83)) 
  {
    y += 10;
  } 
  else if (keyIsDown(87)) 
  {
    y -= 10;
  }

  if (y >= 600) 
  {
    y = 0;
  }
  if (diameter < 200) 
      {
        diameter += 1;
      } 
      else if (diameter >= 200) 
      {
        diameter = 25;
      }

      circle(mousex, mousey, 30);
    }
    
    if (ellipse == 20, 30)
    {
      txt = "YOU WIN"
    }
   
    function mousePressed()
    {
        mousex = mouseX;
        mousey = mouseY;
        
    }


function keyPressed() 
{
  if (key == 'd') 
  {
    x += 40;
  } 
  else if (key == 'a') 
  {
    x -= 40;
  }
}
