var canvas = document.querySelector("canvas");
var brushTool = canvas.getContext("2d");

brushTool.fillStyle = "grey";
brushTool.fillRect(0, 0, 600, 400);

function drawCircle(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    brushTool.fillStyle = "darkgreen";
    brushTool.beginPath();
    brushTool.arc(x, y, 10, 0, 2 * Math.PI);
    brushTool.fill();
    console.log("X = " + x + ", " + "Y = " + y)
}
canvas.onclick = drawCircle;