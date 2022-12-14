var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');

function drawCircle(x, y, radius) {
    brushTool.fillStyle = "blue";
    brushTool.beginPath();
    brushTool.arc(x, y, radius, 0, 2 * Math.PI);
    brushTool.fill();
}
function clearCanvas() {
    brushTool.clearRect(0, 0, 600, 400);
    brushTool.fillStyle = 'grey';
    brushTool.fillRect(0, 0, 600, 400);
}
var x = 20, y = 20;

function updateCanvas() {
    clearCanvas();
    drawCircle(x, y, 10);
    x++;
    if (y === 380 && x === 580) {
        x = 20;
        y = 20;
    }
    else if (x === 580) {
        x = 20;
        y += 20;
    }
}
setInterval(updateCanvas, 1);
