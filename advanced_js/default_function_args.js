// function multiply(a, b) {
//     b = b || 1;
//     return a * b;
// }

// console.log(multiply(7, 0)); // Vai retornar 7, pois 0 é falso, logo veio o valor 1

//-----------------------------------------------------------------------------------------

// function multiply(a, b) {
//     b = typeof b === 'undefined' ? 1 : b; // Verboso, mas funcional
//     return a * b;
// }

// console.log(multiply(7));

//-----------------------------------------------------------------------------------------

// function multiply(a = 1, b = 1) { // Gostosinho no azeite
//     return a * b;
// }

// console.log(multiply(7));

//-----------------------------------------------------------------------------------------

// lazy evaluation
function randomNUmber() {
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5));