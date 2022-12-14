var canvas = document.querySelector("canvas");
var brushTool = canvas.getContext("2d");

function drawFraming(xa, ya, xc, yc, color) {
    brushTool.fillStyle = color;
    brushTool.beginPath();
    brushTool.moveTo(xa, ya);
    brushTool.lineTo(xa, yc);
    brushTool.lineTo(xc, yc);
    brushTool.fill();

    brushTool.fillStyle = "white";
    brushTool.beginPath();
    brushTool.moveTo((6 * xa + xc) / 7, (9 * ya + 5 * yc) / 14);
    brushTool.lineTo((6 * xa + xc) / 7, (ya + 6 * yc) / 7);
    brushTool.lineTo((5 * xa + 9 * xc) / 14, (ya + 6 * yc) / 7);
    brushTool.fill();
}
drawFraming(50, 50, 400, 400, "black");