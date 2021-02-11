var hr,mn,sc,scangle,hrangle,mnangle;
function setup() {
  createCanvas(800,400);
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  translate(200,200); 
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();
  textSize(40);
  //text('Current time : ' + hr%12 + ":" + mn + ":"+ sc, 5, 50);
  angleMode(DEGREES);
  scAngle  = map(sc, 0, 60, 0, 360);
  hrAngle  = map(hr % 12,0,12,0,360);
  mnAngle  = map(mn, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  //drawing the arcs 
  strokeWeight(10);
  noFill();
   //Seconds 
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle); 
  //Minutes 
  stroke("green");
  arc(0,0,280,280,0,mnAngle);
   //Hour 
   stroke(0,0,255);
   arc(0,0,260,260,0,hrAngle);
  drawSprites();
} 