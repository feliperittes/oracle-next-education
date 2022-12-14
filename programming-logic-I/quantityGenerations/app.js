function jumpLine() {
    document.write("<br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}
var AgeAverageWhenHaveChildren = 28;
var currentYear = 2016;
var quantityGenerations = (currentYear - 1500) / AgeAverageWhenHaveChildren;
display(quantityGenerations);