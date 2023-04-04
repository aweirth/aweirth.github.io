const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

drawStar("gold");

canvas.addEventListener("click", function() {
  // This changes the color of the star randomly with a
  // list of colors I give it
  const colors = ["red", "green", "blue", "purple", "orange", "pink"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  drawStar(randomColor);
});

function drawStar(color) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(200, 100);
  ctx.lineTo(220, 170);
  ctx.lineTo(290, 170);
  ctx.lineTo(230, 210);
  ctx.lineTo(250, 280);
  ctx.lineTo(200, 240);
  ctx.lineTo(150, 280);
  ctx.lineTo(170, 210);
  ctx.lineTo(110, 170);
  ctx.lineTo(180, 170);
  ctx.closePath();
  ctx.fill();
}


