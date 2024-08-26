let arr = [1,32,1,4,78,99]

for (const i of arr){
    // console.log(i);
}

// **********************


// Map


let map = new Map()
map.set("1","Vishesh")
map.set("2","Karthik")
map.set("3","Rohan")

// console.log(map)
// [key,value] is syntax to iterate in maps
for (const [key,value] of map) {
    // console.log(value)
}

// remember that we can't iterate on objects using for of loop concept 
// remember that we can't iterate on map using for in loop concept

const myObj ={
    game1 : "nfs",
    game2 : "coc"    
}

// for in loop is used for objects
for (const key in myObj) {
    // console.log(myObj[key])
}

// while using for in loop on array we get indexes from that so remember it
let myarr = ["h","i","s"]
for (const key in myarr) {
console.log(myarr[key]);
}