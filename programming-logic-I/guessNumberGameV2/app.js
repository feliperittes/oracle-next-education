function raffle() {
    return Math.round(Math.random() * 10);
}

function raffleNumber(quantity) {
    var secret = [];
    var number = 1;
    while (number <= quantity) {

        var randomNumber = raffle();

        if (randomNumber !== 0) {

            var found = false;

            for (var i = 0; i < secret.length; i++) {
                if (secret[i] == randomNumber) {
                    found = true;
                    break;
                }
            }
            if (found == false) {
                secret.push(randomNumber);
                number++;
            }
        }
    }
    return secret;
}

function verify() {
    var found = false;
    for (var i = 0; i < secret.length; i++) {
        if (input.value == secret[i]) {
            alert("VOCÊ ACERTOU!");
            found = true;
            break;
        }
    }
    if (found == false) {
        alert("VOCÊ ERROU!");
    }
    input.value = "";
    input.focus();
}

var secret = raffleNumber(5);
console.log(secret);

var input = document.querySelector("input");
input.focus();

var button = document.querySelector("button");
button.onclick = verify;
