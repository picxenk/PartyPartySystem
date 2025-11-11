// ParticySystem =========================

class ParticleSystem {
    constructor(position) {
        this.origin = position.copy();
        this.particles = [];
    }

    addParticle() {
        this.particles.push(new Particle(this.origin));
    }

    setPostion(position) {
        this.origin = position.copy();
    }

    run() {
        for (let i = this.particles.length-1; i >= 0; i--) {
            let p = this.particles[i];
            p.run();
            if (p.isDead()) {
                this.particles.splice(i, 1);
            }
        }
    }

    display() {
        fill(255);
        rect(this.origin.x, this.origin.y, 2, 50);
    }
}


