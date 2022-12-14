function drawBrazilFlag() {
    var canvas = document.querySelector('canvas');
    var brushTool = canvas.getContext('2d');

    brushTool.fillStyle = "green";
    brushTool.fillRect(0, 0, 600, 400);

    brushTool.fillStyle = "yellow";
    brushTool.beginPath();
    brushTool.moveTo(300, 50);
    brushTool.lineTo(50, 200);
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
}

function drawGermanFlag() {
    var canvas = document.querySelector('canvas');
    var brushTool = canvas.getContext('2d');

    brushTool.fillStyle = 'black';
    brushTool.fillRect(0, 0, 600, 133);

    brushTool.fillStyle = 'red';
    brushTool.fillRect(0, 133, 600, 133);

    brushTool.fillStyle = 'yellow';
    brushTool.fillRect(0, 266, 600, 133);
}
var displayBrazil = true;
function changeFlag() {
    if (displayBrazil) {
        drawBrazilFlag();
    } else {
        drawGermanFlag();
    }
    displayBrazil = !displayBrazil;
}
setInterval(changeFlag, 3000)