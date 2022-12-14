function jumpLine() {
    document.write("<br><br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}
function raffle(number) {
    return Math.round(Math.random() * number + 1);
}
var chances = 3;
var secretNumber = raffle(10);
do {
    var guess = parseInt(prompt("Digite seu palpite"));

    if (guess == secretNumber) {
        display("VOCÊ ACERTOU, MEUS PARABENS!");
    } else {
        chances--;
        if (guess > secretNumber) {
            alert("VOCÊ ERROU!\nO NUMERO SECRETO É MENOR QUE " + guess + "\nVOCÊ POSSUI " + chances + " CHANCES AGORA!");
        } else {
            alert("VOCÊ ERROU!\nO NUMERO SECRETO É MAIOR QUE " + guess + "\nVOCÊ POSSUI " + chances + " CHANCES AGORA!");
        }
    }
} while (guess != secretNumber && chances > 0)
display("NUMERO SECRETO ERA: " + secretNumber);
display("FIM DO PROGRAMA!");