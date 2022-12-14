function jumpLine() {
    document.write("<br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}

var currentYear = new Date().getFullYear();
display("Eu nasci em : " + (currentYear - 21));
display("Adriano nasceu em : " + (currentYear - 26));
display("Paulo nasceu em : " + (currentYear - 32));