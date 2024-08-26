// control flow is basically 
// if else statements and switch which is similar to java and c


// falsy values

// false,0,-0, BigInt 0n, "", null, undefined, NaN

// true values

// "0", "false", " ", [], {}, function(){}

// how to compare array and object using if and else
let a = []

if(a.length){
    console.log("Array is not empty");
}
else{
    console.log("Array is empty");
}

let b = {}

if(Object.keys(b).length){
    console.log("Object is not empty");
}
else{
    console.log("Object is empty");
}


// Nullish Coalescing Operator ?? so when the input comes from database
// there may be a case where the input is null or undefined 
// so to check we use it 
// the below is eg
let checkValue = 5 ?? 10
console.log(checkValue);

// remember when ?? operator gets a non null and undefined value then it assigned it 
// 5 ?? 10 case 5 is asssigned
console.log(null ?? 72 ?? 98);

const tea_price = 99
tea_price > 100 ? console.log("tea is costly ") : console.log("tea is affordable");

// the above is one line if else




