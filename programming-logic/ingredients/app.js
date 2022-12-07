var ingredients = [];
var quantity = parseInt(prompt("Quantos ingredientes você vai adicionar?"));
var count = 1;

while (count <= quantity) {

    var ingredient = prompt("Informe o ingrediente " + count);

    var found = false;

    for (var i = 0; i < ingredients.length; i++) {

        if (ingredients[i] == ingredient) {
            found = true;
            break;
        }
    }

    if (found == false) {
        ingredients.push(ingredient);
        count++;
    }
}

console.log(ingredients);