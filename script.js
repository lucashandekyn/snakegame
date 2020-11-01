document.addEventListener('keydown', logKey);

var count = 0;
var speed = 5;
var crdxf = 265;
var crdyf = 387;
const food = [null];
var dx = 0;
var dy = 0;
var bdy = 3;
var eaten = false;
const snake = [[100,100],[100,100]]; 
const crdx = [0];
const crdy = [0];
var mtrxlngth = 32;
const matrixx = [[1]];
const matrixy = [[1]];

function logKey(e) {
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
    //console.log(e.key);
}

function score() {
    if ([-20,-20]<=snake[0]-food[0]<=[20,20]) {
        eaten = true;
    }
    switch(eaten) {
        case true:
            body += 1;
            crdFood();
            break;
        case false:
            if (count == 0) {
                crdFood();
            }
            break;
    }
}

/*function crdFood() {
    crdxf = Math.floor(Math.random() * 640) + 20;
    crdyf = Math.floor(Math.random() * 640) + 20;
    food.unshift([crdxf,crdyf]);
    food.pop();
}

function drawFood() {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#00FF00";
    ctx.beginPath();
    ctx.arc( food[0][0], food[0][1], 10, 0, 2 * Math.PI);
    ctx.fill();
}

/*function lenghtsnake() {
    var l = snake.length;
    if (l==bdy){
        snake.pop();
    }
}*/

function crdSnake() {
    crdx.unshift( [crdx[0]+ dx] );
    crdy.unshift( [crdy[0] + dy] );
    if (crdx.lenght >= bdy) {
        crdx.pop();
        crdy.pop();
    }
    console.log(crdx);
}

function drawSnake() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);  
    //for (i=0; i <= snake.length-1; i++){
        ctx.fillStyle = "#FF0000";
        ctx.beginPath();
        ctx.arc( crdx[0]*20, crdy[0]*20, 10, 0, 2 * Math.PI);
        ctx.fill();
    //}
}

function createMatrix() {
    for (i=2; i<=mtrxlngth; i++) {
        if (matrixx.length < 32) {
            matrixx.push([i]);
        }
    }
    for (i=2; i<=mtrxlngth; i++) {
        if (matrixy.length < 32) {
            matrixy.push([i]);
        }
    }
}

/*function drawGame() {
    drawFood();
    drawSnake();
}*/

function updateSnake() { 
    crdSnake(); 
    drawSnake();
}

/*function updateFood() {
    score();
    drawFood();
}*/

function update() {
    updateSnake();
    //updateFood();
    createMatrix();
}

function run() {
    update();
    count+=1;
}

setInterval(run, 1000 / speed)