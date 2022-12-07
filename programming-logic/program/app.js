var currentYear = new Date().getFullYear();
document.write("Flávio tem " + (currentYear - 1976) + " anos");
document.write("<br>");
document.write("Joaquim tem " + (currentYear - 1998) + " anos");
document.write("<br>");
document.write("Barney tem " + (currentYear - 1971) + " anos");
document.write("<br>");
var ageFlavio = currentYear - 1976;
var ageJoaquin = currentYear - 1998;
var ageBarney = currentYear - 1971;

var average = (ageBarney + ageJoaquin + ageFlavio) / 3;
document.write("A media arredondada das idades é " + Math.round(average));
var name = "Flavio";
document.write("<br>A idade de " + name + " é " + ageFlavio)

