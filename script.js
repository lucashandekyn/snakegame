document.addEventListener('keydown', logKey);

var speed = 4;
var x = 100;
var y = 100;
var dx = 0;
var dy = 0;

function logKey(e) {
  console.log(e.code);
  switch (e.key) {
    case "ArrowLeft":
        dx = -1;
        dy = 0;
        break;
    case "ArrowRight":
        dx = +1;
        dy = 0;
        break;
    case "ArrowUp":
        dy = -1;
        dx = 0;
        break;
    case "ArrowDown":
        dy = +1;
        dx = 0;
        break;
    }  
}

function drawSnake(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
}

function updateSnake() { 
    x += dx * speed;
    y += dy * speed;    
}

function update() {
    updateSnake();
}

function draw() { 
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);
    drawSnake(ctx);
}

function run() {
    update();
    draw();
}

setInterval(run, 1000 / 30)