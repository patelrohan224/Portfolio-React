import "./styles.css";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = 640;
const height = 640;
const radius = width / 4;
const strokeWidth = radius / 6;
let loop = 0;
let rotation = -30;
let hover = false;
const lerp = (a, b, n) => (1 - n) * a + n * b;

const deg = g => (g * Math.PI) / 180;

const createSixth = () => {
  ctx.save();
  ctx.translate(-162, -66);

  // Triangolino
  ctx.save();
  ctx.fillStyle = "#111";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(25, -12);
  ctx.lineTo(25, 27);
  ctx.fill();
  ctx.closePath();
  ctx.clip();

  // strokes
  ctx.rotate(deg(rotation));
  ctx.beginPath();
  ctx.fillStyle = "#d6d6d6";
  ctx.rect(-30, -loop + strokeWidth * 2, radius, strokeWidth);
  ctx.rect(-30, -loop, radius, strokeWidth);
  ctx.fill();
  ctx.closePath();
  ctx.restore();

  // Path
  ctx.save();
  ctx.fillStyle = "#d6d6d6";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 122);
  ctx.lineTo(48, 150);
  ctx.lineTo(156, 88);
  ctx.fill();
  ctx.closePath();
  ctx.clip();

  // strokes
  ctx.rotate(deg(rotation));
  ctx.beginPath();
  ctx.fillStyle = "#111";
  ctx.rect(0, loop - strokeWidth * 2, radius + 30, strokeWidth);
  ctx.rect(0, loop, radius + 30, strokeWidth);
  ctx.rect(0, loop + strokeWidth * 2, radius + 30, strokeWidth);
  ctx.rect(0, loop + strokeWidth * 4, radius + 30, strokeWidth);
  ctx.rect(0, loop + strokeWidth * 6, radius + 30, strokeWidth);
  ctx.rect(0, loop + strokeWidth * 8, radius + 30, strokeWidth);
  ctx.rect(0, loop + strokeWidth * 4, radius + 30, strokeWidth);
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  ctx.restore();
};

const animate = () => {
  requestAnimationFrame(animate);

  canvas.width = width * 2;
  canvas.height = height * 2;
  ctx.scale(2, 2);
  ctx.translate(width / 2, height / 2);

  loop += 0.5;

  if (loop >= 54) {
    loop = 0;
  }

  ctx.rotate(deg(rotation) - deg(60));

  ctx.save();
  createSixth();
  ctx.restore();

  ctx.save();
  ctx.rotate(deg(60));
  createSixth();
  ctx.restore();

  ctx.save();
  ctx.rotate(deg(120));
  createSixth();
  ctx.restore();

  ctx.save();
  ctx.rotate(deg(180));
  createSixth();
  ctx.restore();

  ctx.save();
  ctx.rotate(deg(240));
  createSixth();
  ctx.restore();

  ctx.save();
  ctx.rotate(deg(300));
  createSixth();
  ctx.restore();

  if (hover) {
    rotation = lerp(rotation, 0, 0.1);
  } else {
    rotation = lerp(rotation, 30, 0.1);
  }
};

animate();

canvas.addEventListener("mouseenter", () => {
  hover = true;
});

canvas.addEventListener("mouseleave", () => {
  hover = false;
});
