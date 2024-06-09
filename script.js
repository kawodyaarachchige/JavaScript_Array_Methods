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
