console.log("Bonjour madame");
var myNumber = 3;
var myString = "I am cute"
var myBoolean = true
var myArray = []
var myObject = {}

var undefinedVar;
console.log(undefinedVar)

var nullVar = null;
console.log(nullVar);

// Setting Arrays

var animalsArray = ['cat', 'dog']
var theSameAnimalsArray = new Array('cat', 'dog')
console.log(animalsArray);
console.log(theSameAnimalsArray);
console.log(animalsArray[1])
animalsArray[2]='pig'
console.log(animalsArray);

// Pushing and popping

var myStack = []
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);

console.log(myStack.pop());
console.log(myStack);

// Queues using shifting and unshifting

var myQueue = [];
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue.shift());
console.log(myQueue);

var myArray = [1,2,3];
myArray.unshift(0);
console.log(myArray);

// Splicing

var myArray = [0,1,2,3,4,5,6,7,8,9];
var splice = myArray.splice(3,5);

console.log(splice);
console.log(myArray);
