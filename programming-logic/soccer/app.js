function jumpLine() {
    document.write("<br><br>");
}
function display(phrase) {
    document.write(phrase);
    jumpLine();
}

var wins = parseInt(prompt("Entre com o numero de vitorias"));
var matchTied = parseInt(prompt("Entre com o numero de empates"));

var points = (wins * 3) + matchTied;
display("O seu time possui: " + points + " pontos.")

if (points > 28) {
    display("Seu time está melhor do que o ano passado");
}
else if (points < 28) {
    display("Seu time está pior do que o ano passado");
}
else {
    display("Seu time está igual ao ano passado");
}
display("FIM do Programa!")