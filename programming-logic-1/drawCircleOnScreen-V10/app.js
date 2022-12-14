var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');
brushTool.fillStyle = 'lightgray';
brushTool.fillRect(0, 0, 600, 400);

function drawCircle(x, y, radius, color) {
    brushTool.fillStyle = color;
    brushTool.beginPath();
    brushTool.arc(x, y, radius, 0, 2 * Math.PI);
    brushTool.fill();
}

function clearCanvas() {
    brushTool.clearRect(0, 0, 600, 400);
}
var radius = 19;
var growthFactor = 0; // fatorCrescimento

function updateCanvas() {
    clearCanvas();
    if (radius > 30) {
        growthFactor = -1;
    } else if (radius < 20) {
        growthFactor = 1;
    }
    radius = radius + growthFactor;
    drawCircle(300, 200, radius, 'blue');
}

setInterval(updateCanvas, 10);