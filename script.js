document.addEventListener('keydown', logKey);

var speed = 1;
var x = 100;
var y = 100;
var dx = 0;
var dy = 0;
var bdy = 5;

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



function updateSnake() { 
    x += dx * speed;
    y += dy * speed;   
    const snake = [[x,y],[x-20,y],null];  
    snake.pop();
    snake.unshift([x+20,y]);
    console.log
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.arc( snake[0][0], snake[0][1], 10, 0, 2 * Math.PI);
    ctx.arc( snake[2][0], snake[2][1], 10, 0, 2 * Math.PI);
    ctx.stroke();
      
}

/*function draw() { 
    console.log(snake[0][0]);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);
    drawSnake(ctx);
}*/

/*function drawSnake(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.arc(snake[0][0],snake[0][1], 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.arc(x-20, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
}*/

function update() {
    updateSnake();
}

function run() {
    update();
}

setInterval(run, 1000 / 30)