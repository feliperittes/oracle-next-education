function jumpLine() {
    document.write("<br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}

var totalEvents = parseInt(prompt("Informe o total de eventos"));

var count = 1;
var totalSpentWithEvents = 0;

while (count <= totalEvents) {
    var spent = parseFloat(prompt("Informe total gasto com evento"));
    totalSpentWithEvents = totalSpentWithEvents + spent;
    count++;
}

var average = totalSpentWithEvents / totalEvents;

display("A média de gastos é " + average);