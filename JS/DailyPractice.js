// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld(){
    return function(){
     return "Hello World";
    };
 }
 
 const a = createHelloWorld();
 console.log(a());




 const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];

// create a new array names with only the name of each girl
const names = spices.map(s => s.name);
console.log(names);



// create a new array endInY with just the girls whose nickname ends in "y"

const endInY = spices.filter(s => s.nickname.slice(-1) === "y")

console.log(endInY);

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).


const createCounter = (n) => {
    let current = n;
    const counter = () => {
       return current ++;
    }
    return counter;
}

const counter = createCounter(10);
console.log(counter());
console.log(counter()); 
console.log(counter()); 

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
const expect = (x) => {
    return {
        toBe : function(y) {
            if (x === y) {
                return true;
            } else return false;
        },
        notToBe : function(z) {
            if (x !== z) {
                return true;
            } else return 'Equal';
        }
    }
}

console.log(expect(5).toBe(5));
console.log(expect(5).notToBe(5));
