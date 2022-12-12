var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');
brushTool.fillStyle = 'grey';
brushTool.fillRect(0, 0, 600, 400);

function drawCircle(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    var radius = 10;
    console.log(x + ',' + y);
    if (event.shiftKey) {
        radius = radius + 20; // raio agora passa a valer 30!
    }
    brushTool.fillStyle = 'blue';
    brushTool.beginPath();
    brushTool.arc(x, y, radius, 0, 2 * 3.14);
    brushTool.fill();
}
canvas.onclick = drawCircle;