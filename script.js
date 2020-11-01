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
const matrix = [[[20],[20],[false]],[[20],[20],[false]]];

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


function createMatrix() {
    switch (dx , dy) {
        case -1 , 0:
            console.log("left");
            break;
        case 1 , 0:
            console.log("right");
            break;
        case 0 , 1:
            console.log("down");
            break;
        case 0 , -1:
            console.log("up");
            break;
        default:
            console.log("right");
            break;
    }
}


function updateSnake() { 
    //crdSnake(); 
    //drawSnake();
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