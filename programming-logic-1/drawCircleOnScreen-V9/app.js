var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');

function drawCircle(x, y, radius) {
    brushTool.fillStyle = 'blue';
    brushTool.beginPath();
    brushTool.arc(x, y, radius, 0, 2 * Math.PI);
    brushTool.fill();
}

function clearCanvas() {
    brushTool.clearRect(0, 0, 600, 400);
    brushTool.fillStyle = 'gray';
    brushTool.fillRect(0, 0, 600, 400);
}
var x = 20;
var sense = 1;

function updateCanvas() {
    clearCanvas();
    if (x > 600) {
        sense = -1;
    } else if (x < 0) {
        sense = 1;
    }
    drawCircle(x, 20, 10);
    x = x + sense;
}
setInterval(updateCanvas, 1);