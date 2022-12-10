var canvas = document.querySelector("canvas");
var brushTool = canvas.getContext("2d");

brushTool.fillStyle = "grey";
brushTool.fillRect(0, 0, 600, 400);

function drawCircle(x, y, radius, color) {
    brushTool.fillStyle = color;
    brushTool.beginPath();
    brushTool.arc(x, y, radius, 0, 2 * 3.14);
    brushTool.fill();
}

var lastClickPosition;
document.addEventListener('click', storePosition, true);
function storePosition(e) {
    lastClickPosition = { x: e.pageX, y: e.pageY };
    console.log(lastClickPosition);
    drawCircle(lastClickPosition.x, lastClickPosition.y, 10, "black");
}