// let a = 30
// const b = 80
// var c = 88
let a = 2999
if(true){
let a = 30
const b = 80
// var c = 88
// console.log(`inner is ${a}`);
}


// console.log(a)  ;
// console.log(b);

// so scope is basically concept of local and global variable

// we know if we declare one variable in block let say
// in 1 if block then that variable is only for that block
// but we declare our variables of javascript using var keyword then 
// that variable is common throughout each block so
// thats why it is not advisiable to use var for declaration of variables use let..


// the below is eg of how imp scoping is
// remember in nested function child function can access all variables of parent function 
// but vice a versa is not possible
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube.com"
        console.log(username+" "+website);
    }
    // console.log(website);
    two()
}

// one()
