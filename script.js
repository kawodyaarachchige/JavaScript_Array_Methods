//concat ()

function concat() {
        let array1 = [1, 2, 3];
        let array2 = [4, 5, 6];
        let result = array1.concat(array2);
        console.log(result); // Output: [1, 2, 3, 4, 5, 6]
    }
    concat();

// copyWithin ()

function copyWithin() {
    let array = [1, 2, 3, 4, 5];
    array.copyWithin(0, 3);
    console.log(array); // Output: [4, 5, 3, 4, 5]
}
copyWithin()

// entries ()

function entries() {
    let array = ['a', 'b', 'c'];
    let iterator = array.entries();
    for (let [index, element] of iterator) {
        console.log(index, element);
    }
}
entries()

// every ()

function every() {
    let array = [1, 2, 3, 4, 5];
    let result = array.every((element) => element > 0);
    console.log(result); // Output: true
}
every()

// fill ()

function fill() {
    let array = [1, 2, 3, 4, 5];
    array.fill(0, 2, 4);
    console.log(array); // Output: [1, 2, 0, 0, 5]
}
fill()

// filter ()

function filter() {
    let array = [1, 2, 3, 4, 5];
    let result = array.filter((element) => element > 2);
    console.log(result); // Output: [3, 4, 5]
}
filter()

// find ()

function find() {
    let array = [1, 2, 3, 4, 5];
    let result = array.find((element) => element > 3);
    console.log(result); // Output: 4
}
find()

// findIndex ()

function findIndex() {
    let array = [1, 2, 3, 4, 5];
    let result = array.findIndex((element) => element > 3);
    console.log(result); // Output: 3
}
findIndex()

// flat ()

function flat() {
    let array = [1, 2, [3, 4, [5, 6]]];
    let result = array.flat(2);
    console.log(result); // Output: [1, 2, 3, 4, 5, 6]
}
flat()

// flatMap ()
function flatMap() {
    let array = [1, 2, 3, 4];
    let result = array.flatMap((element) => [element * 2]);
    console.log(result); // Output: [2, 4, 6, 8]
}
flatMap()

// forEach ()

function forEach() {
    let array = [1, 2, 3];
    array.forEach((element) => console.log(element));
    // Output: 1
    // 2
    // 3
}
forEach()

// Array.from ()
function from() {
    let array = Array.from('hello');
    console.log(array); // Output: ['h', 'e', 'l', 'l', 'o']
}
from()

// includes ()
function includes() {
    let array = [1, 2, 3, 4, 5];
    let result = array.includes(3);
    console.log(result); // Output: true
}
includes()

// indexOf ()
function indexOf() {
    let array = [1, 2, 3, 4, 5];
    let result = array.indexOf(3);
    console.log(result); // Output: 2
}
indexOf()

// isArray ()
function isArray() {
    let array = [1, 2, 3];
    let result = Array.isArray(array);
    console.log(result); // Output: true
}
isArray()

// join ()
function join() {
    let array = [1, 2, 3, 4, 5];
    let result = array.join('-');
    console.log(result); // Output: 1-2-3-4-5
}
join()

// keys ()
function keys() {
    let array = ['a', 'b', 'c'];
    let result = array.keys();
    for (let key of result) {
        console.log(key); // Output: 0, 1, 2
    }
}
keys()

// lastIndexOf ()
function lastIndexOf() {
    let array = [1, 2, 3, 4, 5];
    let result = array.lastIndexOf(3);
    console.log(result); // Output: 2
}
lastIndexOf()

// map ()
function map() {
    let array = [1, 2, 3, 4, 5];
    let result = array.map((element) => element * 2);
    console.log(result); // Output: [2, 4, 6, 8, 10]
}
map()

// pop ()
function pop() {
    let array = [1, 2, 3, 4, 5];
    let result = array.pop();
    console.log(result); // Output: 5
    console.log(array); // Output: [1, 2, 3, 4]
}
pop()

// push ()
function push() {
    let array = [1, 2, 3, 4, 5];
    let result = array.push(6);
    console.log(result); // Output: 6
    console.log(array); // Output: [1, 2, 3, 4, 5, 6]
}
push()