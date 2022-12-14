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

function drawFlower(x, y) {
    drawCircle(x, y + 20, 10, "blue");
    drawCircle(x, y, 10, "red");
    drawCircle(x, y - 20, 10, "yellow");
    drawCircle(x - 20, y, 10, "orange");
    drawCircle(x + 20, y, 10, "black");
}
drawFlower(300, 200);