// let p;
const particles = [];

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);

    // p = new Particle;
    // p1 = new Particle();

    const particlesLength = Math.floor(window.innerWidth / 10);

    // console.log(particlesLength);

    for(let i = 0; i < particlesLength; i++){
        particles.push(new Particle());
    }
}

function draw(){
    // if (mouseIsPressed){
    //     fill(0);
    // } else {
    //     fill(100);
    // }
    // circle(mouseX, mouseY, 80);

    background(255, 255, 255);
    // background(55, 100, 144);
    // background(98, 33, 36);

    // background('rgba(' + Math.floor(random(0, 255)) + ',' + Math.floor(random(0, 255)) + ',' + Math.floor(random(0,255)) + ', 1)');


    // p.update();
    // p.draw();
    
    // p1.update();
    // p1.draw();
    
    particles.forEach((p, index) => {
        // console.log(p);
        // console.log(index);
        
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
    });
}



class Particle {
    constructor(){
        // Position
        // this.pos = createVector(x, y);
        this.pos = createVector(random(width), random(height));
        // Velocity
        this.vel = createVector(random(-2, 2), random(-2, 2));
        // Size
        // this.size = 10;
        this.size = 20;
    }

    // Update movement by adding velocity
    update(){
        this.pos.add(this.vel);
        this.edges();
    }

    // Draw single particle
    draw(){
        noStroke();
        fill('rgba(100, 100, 100, 0.5)');
        // fill('rgba(' + Math.floor(random(0, 255)) + ',' + Math.floor(random(0, 255)) + ',' + Math.floor(random(0,255)) + ', 1)');
        circle(this.pos.x, this.pos.y, this.size);
    }
    
    // Detect Edges
    edges(){
        if(this.pos.x < 0 || this.pos.x > width){
            this.vel.x *= -1;
        }
        
        if(this.pos.y < 0 || this.pos.y > height){
            this.vel.y *= -1;
        }
    }
    
    // Connect particles
    checkParticles(particles){
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            
            if(d < 120){
                stroke('rgba(100, 100, 100, 0.1)');
                // stroke('rgba(' + Math.floor(random(0, 255)) + ',' + Math.floor(random(0, 255)) + ',' + Math.floor(random(0,255)) + ', 1)');
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            }
        });
    }
}