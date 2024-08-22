const a = [1,2,3,4,5]
const b = [6,7,8,9]

// a.push(b)

// console.log(a)


// This is one way
//let c = a.concat(b)
// console.log(c)


//  this way is known as spread technique
const c = [...a, ...b]
console.log(c)



