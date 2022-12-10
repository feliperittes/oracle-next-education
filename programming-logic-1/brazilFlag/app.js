var canvas = document.querySelector("canvas");
var brushTool = canvas.getContext("2d");

brushTool.fillStyle = "darkgreen";
brushTool.fillRect(0, 0, 600, 400);

brushTool.fillStyle = "yellow";
brushTool.beginPath();
brushTool.moveTo(50, 200);
brushTool.lineTo(300, 50);
brushTool.lineTo(550, 200);
brushTool.fill();

brushTool.beginPath();
brushTool.moveTo(50, 200);
brushTool.lineTo(300, 350);
brushTool.lineTo(550, 200);
brushTool.fill();


brushTool.fillStyle = "darkblue";
brushTool.beginPath();
brushTool.arc(300, 200, 100, 0, 2 * 3.14);
brushTool.fill();