//Declare one variable of each primitive type

var greeting = "Hello, JavaScript!"; 
let score = 42; 
const isActive = true;
let nothing = null;
let mystery;
const id = Symbol("userId");

// console.log(typeof(greeting));
// console.log(typeof(score));
// console.log(typeof(isActive));
// console.log(nothing);
// console.log(typeof(nothing));
// console.log(typeof(mystery));
// console.log(typeof(id));




// Non-primitive examples
const config = { debug: true, version: 3 }; //object
const colours = ["red", "green", "blue"];  //array

// console.log(typeof(config));
// console.log(typeof(colours));

// Type inspector
function typeInfo(value){

    let type;
    if(value === null){
        type = "null";
    }else if(Array.isArray(value)){
        type = "array";
    }else{
        type = typeof value;
    }

    return `Type ${typeof value} | value: ${value}`;
 }
// console.log(typeInfo(score));
// console.log(typeInfo(colours));
// console.log(typeInfo(nothing));





// Coercion experiments

console.log("5" + 3 ); // 53  (+ with a string does string concatenation).
console.log("5" - 3); // 2 (- does numeric subtraction only. So string "5" becomes number 5.)
console.log("10" * 2 ) // 20 (* and / are numeric operators only.)
console.log("10" / 2 ); // 5
console.log(true + 1) // 2 (+ is doing numeric addition here because there is no string.)
//true -> 1
//false -> 0
console.log(false - 1) // -1
console.log(true + true); // 2
console.log(false + false); // 0

console.log(false + "1"); // falsel   (
//+ sees a string "1", so it does string concatenation, not numeric addition.
//boolean + number  => numeric addition
//boolean + string  => string concatenation  ) 

console.log(null + 1); // 1 (null becomes 0)
console.log(undefined + 1); // NaN


// Strict vs loose equality 

console.log(0 == false);  // true 
console.log(0 === false); //false
// === checks value + type, without conversion.
// 0 //number
// false boolean


console.log("" == false); //true
console.log("" === false); // false
// "" -> false -> 0 
// "" // string
//false // boolean



console.log(null == undefined); //true
console.log(null === undefined); // false
// null = 0 ;
//undefine = 0;
//null // object
//undefined = undefined 

//console.log(NaN ===  NaN);//false
//console.log(NaN == NaN); // false 
//Number.isNaN(NaN);// true
//NaN means Not a Number
// NaN is not equal to anything, even itself.









console.log("Nikita" - 100 );