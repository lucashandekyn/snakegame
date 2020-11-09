document.addEventListener('keydown', logKey);

var count = 0;
var speed = 2;

var world = Array.from(Array(32), () => Array.from(Array(32), () => 0));

var dx = 0;
var dy = 0;

var px = 1;
var py = 1;

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


COLORS = { 0: "black", 1: "red", 2: "green" };

function drawWorld() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);  
    for (i=0; i < 32; i++){
        for (j=0; j < 32; j++){            
            ctx.fillStyle = COLORS[world[i][j]];
            ctx.fillRect(i*20, j*20, 20, 20);
        }
    }
}

function updateSnake() { 
    world[px][py] = 0;
    px += dx;
    py += dy;
    world[px][py] = 1;
}

function updateFood() {
    world[9][9] = 2;
}

function update() {
    updateFood();
    updateSnake();

    //createMatrix();
    drawWorld();
}

function run() {
    update();
    count+=1;
}

setInterval(run, 1000 / speed)
