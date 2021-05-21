// Symbols

const uniqueId = Symbol('Oi');

// Well known symbols

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'JESUS';

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

// const it = obj[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


for (let value of obj) {
    console.log(value);
}

const arr2 = [...obj];



// Generators

function* hello() {
    console.log('Hello');
    yield 1;

    console.log('Hello');
    yield 2;
    console.log('Hello');

}

const it = hello();

console.log(itnext());