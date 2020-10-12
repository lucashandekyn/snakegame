document.addEventListener('keydown', logKey);

var speed = 5;
var crdxf = 0;
var crdyf = 0;
const food = [null];
var dx = 0;
var dy = 0;
var bdy = 7;
const snake = [[100,100],[100,100]]; 

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

function crdFood() {
    crdxf = Math.floor(Math.random() * 640) + 1;
    crdyf = Math.floor(Math.random() * 640) + 1;
    food.unshift([crdxf,crdyf]);
    food.pop();
}

function drawFood() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640); 
    ctx.fillStyle = "00FF00";
    ctx.beginPath();
    ctx.arc( crdxf, crdyf, 10, 0, 2 * Math.PI);
    ctx.fill();
}

function lenghtsnake() {
    var l = snake.length;
    if (l==bdy){
        snake.pop();
    }
}

function crdSnake() {
    lenghtsnake();
    snake.unshift([snake[0][0]+dx*20,snake[0][1]+dy*20]);
}

function drawSnake() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);  
    ctx.fillStyle = "#FF0000";
    for (i=0; i <= snake.length-1; i++){
        ctx.beginPath();
        ctx.arc( snake[i][0], snake[i][1], 10, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function updateSnake() { 
    crdSnake(); 
    drawSnake();
}

function updateFood() {
    drawFood();
}

function update() {
    updateSnake();
}

function run() {
    update();
}

setInterval(run, 1000 / speed)