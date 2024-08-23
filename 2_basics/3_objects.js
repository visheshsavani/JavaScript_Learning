// singleton
// object.create


// object literal
const mySym = Symbol();
const Jsuser = {
    name : "vishesh",
    age : 20,
    gender : "male",
    [mySym] : "jinal",
    "phone number" : 86573737272
}

// another way to access objects properties
//console.log(Jsuser.age)


// this is very imp way to acces objects properties
// console.log(Jsuser["phone number"])
// console.log(Jsuser[mySym])

// the above way is imp because if the key is define as explicitly as string then we cant access it using " . " operator


// now important thing

// for symbol datatype

// in this way we declare symbol datatype
//const mySym = Symbol();

// in the below way we can freeze the object

// Object.freeze(Jsuser)

Jsuser.age = 78;
// as we can see the value didn't change
// console.log(Jsuser["age"])


// functions
Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())
