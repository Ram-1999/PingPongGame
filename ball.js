// select canvas element
const canvas = document.getElementById("pong");

// getContext of canvas = methods and properties to draw and do a lot of things to the canvas
const ctx = canvas.getContext("2d");

// paddle data
const paddleHeight = 75;
const paddleWidth = 15;
let paddleplayer1 = (canvas.height - paddleHeight) / 2;
let paddleplayer2 = (canvas.height - paddleHeight) / 2;

// ball data
let x = canvas.width / 2;
let y = canvas.height / 2;
const ballRadius = 8;
let dx = -2;
let dy = -2;

// keyboard state
const keyState = {};

document.addEventListener("keydown", (e) => {
  keyState[e.key] = true;
});

document.addEventListener("keyup", (e) => {
  keyState[e.key] = false;
});

// drawing user paddle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(0, paddleplayer1, paddleWidth, paddleHeight);
  ctx.rect(
    canvas.width - paddleWidth,
    paddleplayer2,
    paddleWidth,
    paddleHeight
  );
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

// creating ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

// resetting the ball when it hits the boundary
function resetBall() {
  x = canvas.width / 2;
  y = canvas.height / 2;
  dx = -dx;
  dy = -dy;
}

// updating the game state
function update() {
  if (keyState["ArrowUp"] && paddleplayer1 > 0) {
    paddleplayer1 -= 7;
  } else if (
    keyState["ArrowDown"] &&
    paddleplayer1 + paddleHeight < canvas.height
  ) {
    paddleplayer1 += 7;
  }

  if (keyState["ArrowRight"] && paddleplayer2 + paddleHeight < canvas.height) {
    paddleplayer2 += 7;
  } else if (keyState["ArrowLeft"] && paddleplayer2 > 0) {
    paddleplayer2 -= 7;
  }

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    if (
      y > paddleplayer1 - ballRadius &&
      y < paddleplayer1 + paddleHeight + ballRadius
    ) {
      dx = -dx;
    } else {
      resetBall();
    }
  }

  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

// drawing the game
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall();
}

// game loop
function gameLoop() {
  update();
  draw();
}

// start the game loop
setInterval(gameLoop, 10);
