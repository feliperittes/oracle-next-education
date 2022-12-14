var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');
var x = 20;
var y = 20;

// códigos do teclado

var left = 37
var up = 38
var right = 39
var down = 40
var rate = 10;

function drawCircle(x, y, radius) {

    brushTool.fillStyle = 'blue';
    brushTool.beginPath();
    brushTool.arc(x, y, radius, 0, 2 * Math.PI);
    brushTool.fill();
}

function clearCanvas() {
    brushTool.clearRect(0, 0, 600, 400);
    brushTool.fillStyle = 'lightgray';
    brushTool.fillRect(0, 0, 600, 400);
}


function updateCanvas() {
    clearCanvas();
    drawCircle(x, y, 10);
}

setInterval(updateCanvas, 20);

function readKeyBorad(event) {

    if (event.keyCode == up) {

        y = y - rate;

    } else if (event.keyCode == down) {

        y = y + rate;

    } else if (event.keyCode == left) {

        x = x - rate;

    } else if (event.keyCode == right) {

        x = x + rate;
    }
}

document.onkeydown = readKeyBorad;