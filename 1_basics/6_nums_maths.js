const score = 500;
// console.log(score)


const balance = new Number(999);
// console.log(balance);

let a = balance.toString();
// console.log(a.length)

const num = 1177.968
// console.log(num.toFixed(2))
// toFixed is used to round it off the digit to a specific decimal

// console.log(num.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-US'))
/// toLocaleString is used to change the number representation by default it is indian representation
// if want USA then pass en-US in parameter

/// ********************* MATHS

// Math Library

/*
console.log(Math)
console.log(Math.abs(-9))
console.log(Math.floor(7.2))
console.log(Math.min(4,2,1,5,5,0))
*/

// let b = (Math.floor(Math.random()*10)%5 + 1)
// console.log(b)

/// the below is to generate random number for dice
// for(let i =0;i<10;i++){
//     let b = (Math.floor(Math.random()*10)%6 + 1)
//     console.log(b)
// }


// the below text is used to generate numbers between a specific range 

/*
const min = 10
const max = 40
console.log(Math.floor(Math.random()*(max-min+1))+min)
*/

