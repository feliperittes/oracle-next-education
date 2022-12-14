function drawSquare(x, y, size, color) {
    var canvas = document.querySelector('canvas');
    var brushTool = canvas.getContext('2d');

    brushTool.fillStyle = color;
    brushTool.fillRect(x, y, size, size);
    brushTool.strokeStyle = 'black';
    brushTool.strokeRect(x, y, size, size);
}

function drawText(text, x, y) {
    var canvas = document.querySelector('canvas');
    var brushTool = canvas.getContext('2d');

    brushTool.font = '20px Georgia';
    brushTool.fillStyle = 'black';
    brushTool.fillText(text, x, y);
}

drawText("Qual é a fração?", 50, 30);

var y = 50;
drawSquare(50, y, 100, 'green');
drawSquare(150, y, 100, 'green');
drawSquare(250, y, 100, 'green');
drawSquare(350, y, 100, 'white');