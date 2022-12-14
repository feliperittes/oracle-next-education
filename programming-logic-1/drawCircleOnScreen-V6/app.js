var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');

brushTool.fillStyle = 'grey';
brushTool.fillRect(0, 0, 600, 400);

var draw = false;
var radius = 10;

function drawCircle(event) {

    if (draw) {
        var x = event.pageX - canvas.offsetLeft;
        var y = event.pageY - canvas.offsetTop;

        console.log(x + ',' + y);

        brushTool.fillStyle = 'blue';
        brushTool.beginPath();
        brushTool.arc(x, y, radius, 0, 2 * Math.PI);
        brushTool.fill();
    }
}

canvas.onmousemove = drawCircle;

// function enableDraw() {
//     draw = true;
// }
// function disableDraw() {
//     draw = false;
// }

canvas.onmousedown = function () {
    draw = true;
}

canvas.onmouseup = function () {
    draw = false;
}