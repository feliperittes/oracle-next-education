var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');
brushTool.fillStyle = 'grey';
brushTool.fillRect(0, 0, 600, 400);
var colors = ['blue', 'red', 'green']
var indexColor = 0; // começa com blue
function drawCircle(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    brushTool.fillStyle = colors[indexColor];
    brushTool.beginPath();
    brushTool.arc(x, y, 10, 0, 2 * 3.14);
    brushTool.fill();
    console.log(x + ',' + y);
}
canvas.onclick = drawCircle;

function changeColor() {
    indexColor++;
    if (indexColor >= colors.length) {
        indexColor = 0; // volta para a primeira cor, azul
    }
    return false; // para não exibir o menu padrão do canvas
}
canvas.oncontextmenu = changeColor;