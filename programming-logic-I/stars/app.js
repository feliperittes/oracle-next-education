function jumpLine() {
    document.write("<br>");
}

function display(phrase) {
    document.write(phrase);
    jumpLine();
}
function raffle(number) {
    return Math.floor(Math.random() * number + 1);
}
for (var line = 1; line <= 3; line++) {
    for (var column = 1; column <= 10; column++) {
        document.write("*");
    }
    jumpLine();
}