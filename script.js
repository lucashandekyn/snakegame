document.addEventListener('keydown', logKey);

var speed = 4;
var x = 100;
var y = 100;
var a = 0;
var b = 0;
var dx = 0;
var dy = 0;
var bdy = 1;
const crd2 = [[x-20,y],null];
const snake = [[x,y]]; 

function logKey(e) {
  //console.log(e.code);
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

function crdSnake() {
    x += dx * speed;
    y += dy * speed;
    crd2.unshift([a,b]);
    crd2.pop();
    snake.unshift(crd2[0]);
    snake.unshift([x,y]);
    snake.pop();
    a = x-dx*20;
    b = y-dy*20;
}

function updateSnake() { 
    crdSnake(); 
    drawSnake();
}

function drawSnake() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    for (i=0; i <= bdy; i++){
        ctx.arc( snake[i][0], snake[i][1], 10, 0, 2 * Math.PI);
    }
    ctx.fill();
}

function update() {
    updateSnake();
}

function run() {
    update();
}

setInterval(run, 1000 / 30)