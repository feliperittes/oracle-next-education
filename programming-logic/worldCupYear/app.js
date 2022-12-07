function jumpLine() {
    document.write("<br>");
    document.write("<br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}

var deadLine = parseInt(prompt("Entre com a data limite:"));

var cupYear = 1930;

for (var i = cupYear; i <= new Date().getFullYear(); i += 4) {
    display("Teve copa em " + i)
}