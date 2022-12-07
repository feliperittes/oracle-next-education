function jumpLine() {
    document.write("<br>");
    document.write("<br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}

var multiplicationTable = prompt("Insira o numero da tabuada desenhada");
display("TABUADA DO NUMERO " + multiplicationTable)
for (var i = 1; i <= 10; i++) {
    display(i + " x " + multiplicationTable + " = " + i * multiplicationTable);
}
display("FIM");