var canvas = document.querySelector("canvas");
var brushTool = canvas.getContext("2d");

brushTool.fillStyle = "darkgreen";
brushTool.fillRect(200, 50, 350, 300);

brushTool.fillStyle = "black";
brushTool.fillRect(250, 110, 90, 90);
brushTool.fillRect(410, 110, 90, 90);

brushTool.fillRect(340, 200, 70, 100);

brushTool.fillRect(300, 240, 40, 110);
brushTool.fillRect(410, 240, 40, 110);