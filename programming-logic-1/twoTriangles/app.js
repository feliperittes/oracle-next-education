var canvas = document.querySelector("canvas");
var brushTool = canvas.getContext("2d");

brushTool.fillStyle = "dark";
brushTool.beginPath();
brushTool.moveTo(50, 50);
brushTool.lineTo(50, 400);
brushTool.lineTo(400, 400);
brushTool.fill();

brushTool.fillStyle = "white";
brushTool.beginPath();
brushTool.moveTo(100, 175);
brushTool.lineTo(100, 350);
brushTool.lineTo(275, 350);
brushTool.fill();

