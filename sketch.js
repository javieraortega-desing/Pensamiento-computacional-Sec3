function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(135,206,235);
 
  fill(255,204,0);
  stroke(0);
  strokeWeight(3);
  ellipse(200,200,250,250)
 
  fill(0);
  noStroke();
  ellipse(150,150,20,20);
  ellipse(250,170,20,20);
 
  noFill();
  stroke(0);
  strokeWeight(4);
  line(150,250,250,250)
 
}
