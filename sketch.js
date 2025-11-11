let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);
  if (frameCount % 10 == 0)
    system.addParticle(); 
  
  system.run();
}





