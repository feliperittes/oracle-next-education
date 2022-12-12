var canvas = document.querySelector('canvas');
var brushTool = canvas.getContext('2d');

brushTool.fillStyle = 'grey';
brushTool.fillRect(0, 0, 600, 400);

var radius = 10;

function drawCircle(event) {

    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;

    console.log(x + ',' + y);

    if (event.shiftKey && event.altKey) {

        alert('Só aperte uma tecla por vez, por favor!');

    } else if (event.shiftKey && radius + 10 <= 40) {
        radius = radius + 10;

    } else if (event.altKey && radius - 5 >= 10) {
        radius = radius - 5;

    }

    brushTool.fillStyle = 'blue';
    brushTool.beginPath();
    brushTool.arc(x, y, radius, 0, 2 * 3.14);
    brushTool.fill();

}

canvas.onclick = drawCircle;