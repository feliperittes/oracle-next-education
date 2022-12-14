var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');
brushTool.fillStyle = 'lightgray';
brushTool.fillRect(0, 0, 600, 400);
var radius = 10;

function drawCircle(x, y, radius, color) {
    brushTool.fillStyle = color;
    brushTool.beginPath();
    brushTool.arc(x, y, radius, 0, 2 * Math.PI);
    brushTool.fill();
}
drawCircle(300, 200, radius + 20, 'red');
drawCircle(300, 200, radius + 10, 'white');
drawCircle(300, 200, radius, 'red');

function shoot(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    if ((x > 300 - radius) &&
        (x < 300 + radius) &&
        (y > 200 - radius) &&
        (y < 200 + radius)) {
        alert('Acertou no centro do alvo');
    }
}
canvas.onclick = shoot;
