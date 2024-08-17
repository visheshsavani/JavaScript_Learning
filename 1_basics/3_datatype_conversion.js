/*
let number = null;
console.log(typeof number);

let someNumber = Number(number)
console.log(someNumber);
console.log(typeof someNumber);
*/
// "3" => is converted into 3
// "3abac" => is converted into NaN (Not a Number)
// "null" => is converted into 0 (since null is a object)
// so we have to be carefull when converting numbers

/*
let no = null;
console.log(typeof no);

let yesno = Boolean(no);
console.log(yesno);
*/

// "",0 => is converted into false
// "44",322 => is converted intto true;


// ***********<- Operations -> **************

// careful while writing such operation
console.log(1+"2");
console.log("2"+4+8); // -> in this opearation, totally string concatenation taken place as first operation is string
console.log("8"+"2");
console.log(1+"2");
console.log(1+5+6+9+"2"); // -> in this eg the since the first 4 operation is arithmetic addition so add take place, after add string operation is there so concatenation of string taken place