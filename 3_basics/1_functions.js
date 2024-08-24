function printname(){
    console.log("Vishesh")
    console.log("Jinal")
    console.log("Ila")
    console.log("Bhimji")
}

// printname()

function loginUsername(username){
    if(!username){
        console.log("Please enter your name");
        return
    }

    return `${username} just logged in`
}

// let a = loginUsername()
// console.log(a);


// how to pass object and array.

const user = {
    name : "hitesh",
    price : 599
}
function getname(anyObject){
    return anyObject.price
}

function getArrVal(arr){
    return arr[1]
}

// console.log(getname(user))

// console.log(getArrVal([2,45,7]));


// sometimes we do not how many parameters will come 
// i.e. in shopping application we don't know how many items will be there in cart so
// the below is the way to handle this in function

function getTotal(...num){
    let a = num;
    let element = 0;
    for (let index = 0; index < a.length; index++) {
         element += a[index];
    }
    return element;
}
console.log(getTotal(45,743,211));


