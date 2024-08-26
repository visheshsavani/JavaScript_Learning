const myarr = ["vishesh","jinal","rohan"]

myarr.forEach((item) => {
    if(item === "jinal"){
        // console.log(item);
    }
})

// function printMe(item){
//     console.log(item);
// }

// myarr.forEach(printMe)


myarr.forEach((item,index,arr) => {
    // console.log(item+" "+index+" "+arr);
})

const myCoding = [
    {
        languagename : "javascript",
        languageshortcut : "js"
    },
    {
        languagename : "Java",
        languageshortcut : "java"
    },
    {
        languagename : "C++",
        languageshortcut : "cpp"
    },
    {
        languagename : "python",
        languageshortcut : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageshortcut);
})