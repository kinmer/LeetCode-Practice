// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld(){
    return function(){
     return "Hello World";
    };
 }
 
 const a = createHelloWorld();
 console.log(a());