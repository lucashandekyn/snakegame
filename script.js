document.addEventListener('keydown', logKey);

var count = 5;

var speed = 5;

var food = [9, 9];

var dx = 0;
var dy = 0;

var px = 1;
var py = 1;
var snake = [[px, py]];

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
}


COLORS = { 0: "black", 1: "red", 2: "green" };

function draw(array1, array2) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 640, 640);
    ctx.rect(0, 0, 640, 640)
    ctx.fillStyle = COLORS[0];
    ctx.fill();
    ctx.fillStyle = COLORS[2];
    ctx.fillRect(array2[0] * 20, array2[1] * 20, 20, 20);
    for (i = 0; i < array1.length; i++) {
        ctx.fillStyle = COLORS[1];
        ctx.fillRect(array1[i][0] * 20, array1[i][1] * 20, 20, 20);
    }
}


function updateSnake() {
    px += dx;
    py += dy;
    snake.push([px, py]);
    if (snake.length >= count) {
        snake.shift()
    }
}

function inbody() {
    for (i = 0; i < snake.length - 1; i++) {
        pxs = snake[i][0];
        pys = snake[i][1];
        console.log(pxs, pys, px, py)
        if (px == pxs && py == pys) {
            return true;
        }
        else {
            return false;
        }
    }
}

function gameOver() {
    if (px < 0 || py < 0 || px > 31 || py > 31) {
        return true;
    }
    if (inbody()) {
        return true;
    }
    else {
        return false;
    }
}

function eat() {
    if (px == food[0] && py == food[1]) {
        count += 1;
        food.shift();
        food.shift();
        food.push(Math.floor(Math.random() * 32));
        food.push(Math.floor(Math.random() * 32));
    }
}


function reset() {
    dx = 0;
    dy = 0;
    px = 1;
    py = 1;
    count = 3;
    snake = [[px, py]];
    food = [Math.floor(Math.random() * 32), Math.floor(Math.random() * 32)]
}

function update() {
    updateSnake();
    draw(snake, food);
    eat()
    if (gameOver()) {
        reset()
    }
}


setInterval(update, 1000 / speed)

//test