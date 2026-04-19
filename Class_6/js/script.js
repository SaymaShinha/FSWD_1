let a = 3;
let b = 5;

// addition
console.log(a + b);

// comparision
if (a < b) {
    console.log(b + " is greater than " + a);
} else {
    console.log(a + " is greater than " + b);
}

// loop
let value = 0;

for (let i = 2; i <= 100; i = i + 2) {
    value += i;
}

console.log(value);

// Array of Objects
let person = { name: "Maksu", age: 26, leg: 2, nose: 1 }
let human = [person]


// Multiply even number from numbers object

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2) {
        continue;
    } else {
        result *= numbers[i]
    }
}

console.log("Multiply even number from numbers object: ", result);

// functions

function textChange() {
    document.getElementsByTagName("h1")[0].innerText = "Hello";
}

