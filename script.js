document.addEventListener('keydown', logKey);

var speed = 4;
var x = 100;
var y = 100;
var a = 0;
var b = 0;
var dx = 0;
var dy = 0;
var bdy = 5;
const snake = [[100,100],[100,100],[100,100],[100,100],[100,100],[100,100]]; 

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
    var a = snake.length;
    if ( a < bdy) {
        for ( i = a; i <= bdy ; i++ ) {
            snake.shift([snake[a-1][0]+dx*20,snake[a-1][1]+dy*20]);
        }
    }
}

function crdSnake() {
    //lenghtsnake();
    snake.unshift([snake[0][0]+dx*20,snake[0][1]+dy*20]);
    /*if (snake.length <= bdy-1) {
        //do nothing
    }
    else {
        snake.pop();
    }*/
    snake.pop();
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

function updateSnake() { 
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

/*var i = 0;
    for ( i = bdy; i >= 0; i-- ) {
        a = x - dx*i*20;
        b = y - dy*i*20;
        snake.unshift([a,b]);
    }
    x += dx * speed;
    y += dy * speed;
    snake.unshift([x,y]);*/