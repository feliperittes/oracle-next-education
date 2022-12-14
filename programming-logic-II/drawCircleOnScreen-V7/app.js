var palette = document.querySelector('input');
var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');
brushTool.fillStyle = 'grey';
brushTool.fillRect(0, 0, 600, 400);
var draw = false;

function drawCircle(event) {
    if (draw) {
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;
        brushTool.fillStyle = palette.value; // sempre pega o valor atual da paleta!
        brushTool.beginPath();
        brushTool.arc(x, y, 10, 0, 2 * Math.PI);
        brushTool.fill();
    }
    console.log(x + ',' + y);
}
canvas.onmousemove = drawCircle;
// atribuindo diretamente a função anônima
canvas.onmousedown = function () {
    draw = true;
}
// atribuindo diretamente a função anônima
canvas.onmouseup = function () {
    draw = false;
}