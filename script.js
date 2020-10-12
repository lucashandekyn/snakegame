document.addEventListener('keydown', logKey);

var speed = 4;
var x = 100;
var y = 100;
var a = 0;
var b = 0;
var dx = 0;
var dy = 0;
var bdy = 3;
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
function lenghtsnake() {
    var l = snake.length;
    if (l==bdy){
        snake.pop();
    }
    console.log(l);
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
    lenghtsnake();
    crdSnake(); 
    drawSnake();
}

function update() {
    updateSnake();
}

function run() {
    update();
}

setInterval(run, 1000 / 3)