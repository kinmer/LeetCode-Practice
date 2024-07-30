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

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let array = [...args];
    return array.length;
};

var once = function(fn) {

    let hasBeenCalled = false;
    let result;
  
    return function(...args) {
      if (!hasBeenCalled) {
        result = fn(...args);
        hasBeenCalled = true;
        return result;
      } else {
        return undefined;
      }
    }
  
  };


//   * @param {Promise} promise1
//   * @param {Promise} promise2
//   * @return {Promise}
//   */
 var addTwoPromises = async function(promise1, promise2) {
     const [value1, value2] = await Promise.all([promise1, promise2]);
 
     return value1 + value2;
 };

 async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis))
}


//stilll have no idea about clearTimeout;

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkArray = []
    for (let i = 0; i < arr.length; i += size) {
        chunkArray.push(arr.slice(i, i + size));
    }
    return chunkArray;
};
Array.prototype.last = function() {
    if (this.length) {
        return this[this.length -1]
    } else {
        return -1
    }
};

Array.prototype.groupBy = function(fn) {
    // Reduce the array into a single object
    return this.reduce((grouped, item) => {
      // Apply the provided callback function to get the key
      const key = fn(item);
      
      // If the key doesn't exist in the grouped object, create a new array fßsßor it
      if (!grouped[key]) {
        grouped[key] = [];
      }
      
      // Push the current item to the array associated with the key
      grouped[key].push(item);
      
      // Return the updated grouped object for the next iteration
      return grouped;
    }, {});
  };ß


  var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

var join = function(arr1, arr2) {
    const result  = {};
    arr1.forEach(item => {
        result[item.id] = item;
    });

    arr2.forEach(item => {
        if (result[item.id]) {
            Object.keys(item).forEach (key => {
                result[item.id][key] = item[key]
            });
        } else {
            result[item.id] = item;
        }
    })
return Object.values(result);
};


var cancellable = function(fn, args, t) {
    const t1 = setTimeout(()=>fn(...args), t);
    return () => clearTimeout(t1)
};
var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
};
var timeLimit = function(fn, t) {
    
	return async function(...args) {
        return new Promise((resolve,reject) => {
            setTimeout(() => reject("Time Limit Exceeded"),t);
            fn(...args).then(resolve).catch(reject)
        })
    }
};

const memoize = (fn) => {
    const caceh = {};
    return  function(...args) {
        const key = String(args);
        if (key in caceh) {
            return caceh[key];
        }
        const result = fn(...args);
        caceh[key] = result;
        return result;
    }
}

const TimeLimitedCache = function() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key).ref);
    this.cache.set(key, {
        value, ref: setTimeout(() => this.cache.delete(key), duration)
    });
    return found;
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.caceh.size
}

const debounce = (fn, t = 1000) => {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), t);
    }
}


function customPromiseAll(functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let resolvedCount = 0;
        let rejected = false;

        functions.forEach((fn, index) => {
            fn().then(value => {
                if (!rejected) {
                    results[index] = value;
                    resolvedCount += 1;

                    // If all promises are resolved, resolve the final promise
                    if (resolvedCount === functions.length) {
                        resolve(results);
                    }
                }
            }).catch(err => {
                if (!rejected) {
                    rejected = true;
                    reject(err);
                }
            });
        });
    });
}


var flat = function(arr, depth) {
    const stack = [...arr.map(item => [item, depth])];
    const result = [];
  
    while (stack.length > 0) {
      const [item, depth] = stack.pop();
  
      if (Array.isArray(item) && depth > 0) {
        stack.push(...item.map(subItem => [subItem, depth - 1]));
      } else {
        result.push(item);
      }
    }
  
    return result.reverse();
  };
  