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


const createCounter1 = (n) => {
    let current = n;
    const counter = () => {
       return current ++;
    }
    return counter;
}

const counter1 = createCounter1(10);
console.log(counter1());
console.log(counter1()); 
console.log(counter1()); 

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

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter = (init) => {
    let current = init;
    return{
        increment: function(current) {
            current +=1;
            return current;
        },
        decrement: function(current) {
            current -=1;
            return current;
        },
        reset: function(current) {
            current = init;
            return current;
        }
    }
}

const counter = createCounter(5);
console.log(counter.increment()); 
console.log(counter.reset()); 
console.log(counter.decrement()); 

// Apply Transform Over Each Element in Array

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
const map = (arr, fn) => {
    const newArr = [];
    for (n of arr) {
        i = arr.indexOf(n);
       newArr.push(fn(n, i))
    }
    return newArr;
}



/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArr = [];
    for (n of arr) {
        let i = arr.indexOf(n);
        if (fn(n, i)) {
            filteredArr.push(n)
        }
    }
    return filteredArr;
};

var reduce = function(nums, fn, init) {
    let val = init;
    for (num of nums) {
       val = fn(val, num);
    }
       return val;
   };
   

   var compose = function(functions) {
    
    return function(x) {
 
        return functions.reduceRight((acc, fn) => fn(acc), x);
    }
};

