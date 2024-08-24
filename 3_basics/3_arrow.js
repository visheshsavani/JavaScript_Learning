const user = {
    username : "vishesh",
    price : 657,
    welcomemessage : function(){
        console.log(`${this.username} welcome to website`);
        // console.log(this);
    }
}

// user.welcomemessage();
// user.username = "sam"
// user.welcomemessage();
// console.log(this);


// function add(num1,num2){
//     return num1+num2
// } 
// console.log(add(3,4));


// remember while using arrow function, we dont use this and function key word
// and if we are using curly braces then return keyword is mandatory to use
// const add2 =(num1,num2) => num1+num2

const add2 =(num1,num2) => (num1+num2)

const obj1 = () => ({username : "vishesh"})
console.log(add2(3,4));

console.log(obj1());


