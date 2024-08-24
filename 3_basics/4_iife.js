// function ConnectionStatus(){
//     console.log("DB Connected");
// }

// ConnectionStatus()

// Integrated Invoked Function Expression

// It is used when we want to when the function is declared and run immediately
// syntax is ()()
// 1 () -> this will contain function defintion
// 2 () -> function call

( function ConnectionStatus(bro){
    console.log("DB Connected "+bro);
})("bro");
// always remember to put semicolon after iife function if not then it will not stop
( function ConnectionStatus2(bro){
    console.log("DB Connected 2 "+bro);
})("bro");
