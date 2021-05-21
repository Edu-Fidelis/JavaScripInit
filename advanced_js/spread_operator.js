const str = 'JESUS';
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arrClone = [...arr];

const obj = {
    test: 123
};

const obj2 = {
    ...obj, // Spread = serve para construir novos OBJETOS, só em objetos iterável
    test2: 'Oi' // Ordem importa, o último sempre vence!
}

console.log(obj2);