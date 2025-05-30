"use strict";
function addNumbers(a, b) {
    return a + b;
}
function concatStrings(a, b) {
    return `${a}${b}`;
}
let numbers = [1, 2, 3];
function calculateAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
function logMessage(message) {
    console.log(`This function should have a void type`);
}
console.log(addNumbers(2, 3));
console.log(concatStrings(`Hello`, `World`));
console.log(calculateAverage(numbers));
console.log(logMessage(`Hello`));
function createGreeting(name, title) {
    if (title === undefined) {
        return `Hello ${name}!`;
    }
    else {
        return `Hello ${title}${name} !`;
    }
}
console.log(createGreeting(`Mohab`));
console.log(createGreeting(`Mohab`, `Mr.`));
function calculateOrderTotal(price, quantity = 1, discountCode) {
    if (discountCode = `SAVE10`) {
        return price * quantity * 0.9;
    }
    else {
        return price * quantity;
    }
}
function sumAllNumbers(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}
numbers = [1, 2, 3];
console.log(sumAllNumbers(numbers));
//# sourceMappingURL=functions.js.map