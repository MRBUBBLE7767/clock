var hr,mn,sc,scangle,hrangle,mnangle;
function setup() {
  createCanvas(800,400);
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black"); 
  let hr = hour()%12;
  let mn = minute();
  let sc = second();
  textSize(40);
  text('Current time : ' + hr + ":" + mn + ":"+ sc, 5, 50);
  angleMode(DEGREES);
  scAngle  = map(sc, 0, 60, 0, 360);
  hrAngle  = map(hr, 0, 60, 0, 360);
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
  drawSprites();
} 