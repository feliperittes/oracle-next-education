var canvas = document.querySelector("canvas");
var brushTool = canvas.getContext("2d");

brushTool.fillStyle = "darkgrey";
brushTool.fillRect(0, 0, 600, 400);

brushTool.fillStyle = "darkgreen";
brushTool.fillRect(0, 0, 200, 400);

brushTool.fillStyle = "darkred";
brushTool.fillRect(400, 0, 200, 400);

brushTool.fillStyle = "yellow";
brushTool.beginPath();
brushTool.moveTo(300, 200);
brushTool.lineTo(200, 400);
brushTool.lineTo(400, 400);
brushTool.fill();

brushTool.fillStyle = "darkblue";
brushTool.beginPath();
brushTool.arc(300, 200, 50, 0, 2 * 3.14);
brushTool.fill();
