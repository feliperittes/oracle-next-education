function drawRectangle(x, y, width, height, colors) {
    var canvas = document.querySelector('canvas');
    var brushTool = canvas.getContext('2d');

    brushTool.fillStyle = colors;
    brushTool.fillRect(x, y, width, height);
    brushTool.strokeStyle = 'black';
    brushTool.strokeRect(x, y, width, height);
}

function drawText(x, y, text) {
    var canvas = document.querySelector('canvas');
    var brushTool = canvas.getContext('2d');

    brushTool.font = '15px Georgia';
    brushTool.fillStyle = 'black';
    brushTool.fillText(text, x, y);
}

function drawBar(x, y, serie, colors, text) {

    drawText(x, y - 10, text);

    var sumHeight = 0;
    for (var i = 0; i < serie.length; i++) {
        var height = serie[i];
        drawRectangle(x, y + sumHeight, 50, height, colors[i]);
        sumHeight = sumHeight + height;
    }
}

var colors = ['blue', 'green', 'yellow', 'red'];
var serie2015 = [50, 25, 20, 5];
var serie2016 = [65, 20, 13, 2];

drawBar(50, 50, serie2015, colors, '2015');
drawBar(150, 50, serie2016, colors, '2016');