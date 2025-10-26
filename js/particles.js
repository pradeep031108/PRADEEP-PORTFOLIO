const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// ===== PARTICLE CLASS =====
class Particle {
  constructor(x, y, size, color, velocity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if(this.x < 0 || this.x > canvas.width) this.velocity.x *= -1;
    if(this.y < 0 || this.y > canvas.height) this.velocity.y *= -1;

    this.draw();
  }
}

// ===== INITIALIZE PARTICLES =====
function init() {
  particlesArray = [];
  const numberOfParticles = 80;
  for(let i = 0; i < numberOfParticles; i++){
    const size = Math.random() * 3 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = 'rgba(0,255,198,0.7)';
    const velocity = {
      x: (Math.random() - 0.5) * 0.8,
      y: (Math.random() - 0.5) * 0.8
    };
    particlesArray.push(new Particle(x, y, size, color, velocity));
  }
}

// ===== CONNECT PARTICLES =====
function connect() {
  let opacityValue = 1;
  for(let a = 0; a < particlesArray.length; a++){
    for(let b = a; b < particlesArray.length; b++){
      let dx = particlesArray[a].x - particlesArray[b].x;
      let dy = particlesArray[a].y - particlesArray[b].y;
      let distance = Math.sqrt(dx*dx + dy*dy);
      if(distance < 120){
        opacityValue = 1 - (distance/120);
        ctx.strokeStyle = 'rgba(0,255,198,'+opacityValue+')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

// ===== ANIMATE =====
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p => p.update());
  connect();
}

// ===== RESIZE =====
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

init();
animate();
