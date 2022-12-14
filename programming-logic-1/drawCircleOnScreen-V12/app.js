var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');

var radius = 10;
var xRandom;
var yRandom;
function drawCircle(x, y, radius, color) {
    brushTool.fillStyle = color;
    brushTool.beginPath();
    brushTool.arc(x, y, radius, 0, 2 * Math.PI);
    brushTool.fill();
}

function clearCanvas() {
    brushTool.clearRect(0, 0, 600, 400);
    brushTool.fillStyle = 'lightgray';
    brushTool.fillRect(0, 0, 600, 400);
}
function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawTarget(x, y) {
    drawCircle(x, y, radius + 20, "red");
    drawCircle(x, y, radius + 10, "white");
    drawCircle(x, y, radius, "red");
}

function updateCanvas() {
    clearCanvas();
    xRandom = randomPosition(30, 550);
    yRandom = randomPosition(30, 350);
    drawTarget(xRandom, yRandom);
}
function shoot(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    if ((x > xRandom - radius) &&
        (x < xRandom + radius) &&
        (y > yRandom - radius) &&
        (y < yRandom + radius)) {
        alert('Acertou no centro do alvo');
    }

}
canvas.onclick = shoot;

setInterval(updateCanvas, 800);