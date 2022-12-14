function jumpLine() {
    document.write("<br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}

var age = parseInt(prompt("Qual é sua idade"));
var haveDriveLicense = prompt("Tem carteira? Responda S ou N");

if (age >= 18 && haveDriveLicense == "S") {
    display("Pode dirigir");
} else {
    display("Não pode dirigir");
}