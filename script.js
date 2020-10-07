document.addEventListener('keydown', logKey);

var speed = 4;
var x = 100;
var a = 100-20;
var b = 100;
var y = 100;
var dx = 0;
var dy = 0;
var bdy = 1;

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
    const snake = [[100,100],null]; 
    const crd2 = snake[0];
    x += dx * speed;
    y += dy * speed;   
    snake.pop();
    snake.unshift(crd2);
    snake.unshift([x,y]);
    snake.pop();
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    for (i=0; i <= bdy; i++){
        ctx.arc( snake[i][0], snake[i][1], 10, 0, 2 * Math.PI);
    }
    ctx.stroke();
        
}

function update() {
    updateSnake();
}

function run() {
    update();
}

setInterval(run, 1000 / 30)


/*function draw() { 
    console.log(snake[0][0]);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);
    drawSnake(ctx);
}

function drawSnake(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.arc(snake[0][0],snake[0][1], 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.arc(x-20, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
}*/