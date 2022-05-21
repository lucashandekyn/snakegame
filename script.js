document.addEventListener('keydown', logKey);

var count = 5;


var speed = 5;


var food = [9, 9];

var dx = 0;
var dy = 0;

var px = 1;
var py = 1;
var snake = [[1, 1], [px, py]];

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
            dx = 0;
            dy = -1;
            break;
        case "ArrowDown":
            dx = 0;
            dy = +1;
            break;
    }
    //console.log(e.key);
}


COLORS = { 0: "black", 1: "red", 2: "green" };

function draw(array1, array2) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);
    ctx.rect(0, 0, 640, 640)
    ctx.fillStyle = COLORS[0];
    ctx.fill();
    for (i = 0; i < array1.length; i++) {
        ctx.fillStyle = COLORS[1];
        ctx.fillRect(array1[i][0] * 20, array1[i][1] * 20, 20, 20);
    }
    ctx.fillStyle = COLORS[2];
    ctx.fillRect(array2[0] * 20, array2[1] * 20, 20, 20);
}


function updateSnake() {
    px += dx;
    py += dy;
    if (snake.length >= count) {
        snake.shift()
    }
    snake.push([px, py]);
}

function gameOver() {
    if (px < 0 || py < 0) {
        return false;
    }
    for (i = 0; i < snake.length - 1; i++) {
        if ([px, py] == snake[i]) {
            return false;
        }
        else {
            return true;
        }
    }
}

function eet() {
    if (px == food[0] && py == food[y]) {
        count += 1
    }
}


function reset() {
    dx = 0;
    dy = 0;
    px = 1;
    py = 1;
    count = 3;
    snake = [[1, 1], [px, py]];
}

function update() {
    updateSnake();
    draw(snake, food);
    eet()
    if (!(gameOver())) {
        reset()
    }
}


setInterval(update, 1000 / speed)