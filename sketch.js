let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
  noCursor();
}

function draw() {
  background(51);
  system.setPostion(createVector(mouseX, mouseY));
  
  if (mouseIsPressed)
    system.addParticle(); 
  
  system.run();
  system.display();
}





