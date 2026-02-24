const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
particles.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
radius: Math.random() * 2,
speed: Math.random() * 0.5
});
}

function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

particles.forEach(p => {
ctx.beginPath();
ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
ctx.fillStyle = "#00f0ff";
ctx.fill();

p.y -= p.speed;
if (p.y < 0) p.y = canvas.height;
});

requestAnimationFrame(animate);
}

animate();
