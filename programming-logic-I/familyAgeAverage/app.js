function jumpLine() {
    document.write("<br>");
    document.write("<br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}

var quantityFamilyMembers = parseInt(prompt("Informe quantidade de familiares"));
var sumAges = 0;
for (var i = 1; i <= quantityFamilyMembers; i++) {
    var age = parseInt(prompt("Informe a idade do familiar"));
    sumAges = sumAges + age;
}
var averageAges = sumAges / quantityFamilyMembers;
display("A media das idades dos familiares é: " + averageAges);
display("FIM");