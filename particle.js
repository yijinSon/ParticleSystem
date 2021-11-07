class Particle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.r = 16;
    this.lifetime = 255;
  }

  applyForce(force){
    this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0);

    this.lifetime -= 1;
  }

  show(){
    stroke(255);
    strokeWeight(2);
    fill(255,lifetime);
    ellipse(this.pos.x, this.pos.y, this.r*2);
  }

}
