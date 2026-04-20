const person = {
    name:"abc",
    age: 32,
    friend: [{name:"def", age:28}]
}

//console.log(person.friend[0].name);

///////////////////////////////////////////////

let numbers = [10,20,30,40,50];
let [a,b,c,...restNumber] = numbers;

//console.log(a,b,c,restNumber);

///////////////////////////////////////////////

let x = (i,j) => i+j;

//console.log(x(2,3));

///////////////////

let numbers_2 = [1,2,3,4,5,6];

let even_number = numbers_2.filter(number => number%2==0);
let power_two = even_number.map(number => Math.pow(number, 2));
console.log(power_two);
