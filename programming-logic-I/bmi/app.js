function jumpLine() {
    document.write("<br>");
    document.write("<br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}

function calculateBMI(weight, height) {
    return weight / Math.pow(height, 2);
}

var name = prompt("Informe seu nome:")
var weightPerson = prompt(name + ",  informe seu peso:");
var heightPerson = prompt(name + ", informe sua altura:");
var bmi = calculateBMI(weightPerson, heightPerson);

display(name + " seu IMC é: " + bmi);

if (bmi < 18.5) {
    display("Você está com IMC abaixo do recomendado!");
} else if (bmi > 35) {
    display("Você está com IMC acima do recomendado!");
} else if (bmi >= 18.5 && bmi <= 35) {
    display("Você está com o imc recomendado!");
}