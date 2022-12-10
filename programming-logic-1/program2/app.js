function drawSquare(x, y, color) {
    var canvas = document.querySelector("canvas");
    var brushTool = canvas.getContext("2d");
    brushTool.fillStyle = color;
    brushTool.fillRect(x, y, 50, 50);
    brushTool.fillStroke = "black";
    brushTool.strokeRect(x, y, 50, 50);
}

for (var x = 0; x < 600; x += 50) {
    drawSquare(x, 0, "darkgreen");
    drawSquare(x, 50, "darkred");
    drawSquare(x, 100, "darkblue");
}