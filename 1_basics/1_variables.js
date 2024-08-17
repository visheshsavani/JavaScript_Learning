const accountId = 1334;

let gender = "male";
var accountNumber = 4536337;

// accountId = 111; we cant change the accountId as it is a const so once assigned a value, it cant be reassigned

gender = "female"
accountNumber = 53727;
let age; // if the variable is not assigned any value in while declaring then its value is undefined by default

// console.log(gender);

// The below way is used to print multiple variables in one single print statement
console.table([gender,accountNumber,age]);