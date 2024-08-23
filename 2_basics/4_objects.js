const obj1 = {1:"a",2:"b",6:"c"}
const obj2 = {3:"e",4:"f",5:"d"}


// this is not the right way to merge two objects
// const obj3 = {obj1,obj2}
// console.log(obj3)

// this is one way
// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3)

// this is 2 way and best way -> spread techinque
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// .keys, .values using these methods we can access keys and values of objects and rememeber datatype is array
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))

// the below thing is known as object destructuring
const course = {
    name : "backend",
    courseinstructor : "hitesh"
}

const {courseinstructor : instructor} = course

console.log(instructor)




