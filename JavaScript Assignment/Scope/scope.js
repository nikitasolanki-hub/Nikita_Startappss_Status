// console.log(typeof hoistedVar);

// var hoistedVar = "I am hoisted"; //undefined var is hosisted 


// console.log(letVar);  // its goes on temporal Zone 
// let letVar = "Iam Not hoisted"; // ReferenceError 


// function hoistedFn() {
//     return "Function declaration are fully hoisted!";   // ""= this print the value , `` = this gives the output
// }
// console.log(hoistedFn());




//Lexical scope 
//JavaScript uses lexical scoping.
//A function accesses variables based on where it is defined, not where it is called.
//Flow
// current scope
// parent scope
// global scope



// const region = "global";
// function outer(){
//     const region = "outer";
//     function inner(){
//         const region = "inner";
//         console.log(region);
//     }
//     inner();
//     console.log(region);
// }
// outer();
// console.log(region);



// 'this' depends on how a function is called, not where it is written.



const person = {
    name: "Nikita",

    greetRegular: function(){return `Hi, I'm  ${this.name}`;},
    greetArrow: () =>`Hii, I am ${person.name}`
    // greetArrow: () =>`Hii, I am ${this.name}` //"Hi, I am undefined" 
    //beacuse arrow function does not have its own 'this', it uses 'this' from the surrounding context, 
    // which is the global scope in this case. In the global scope, 'name' is not defined, so it returns undefined.
}
console.log(person.greetRegular()); 
console.log(person.greetArrow());

//Call() call() :- immediately invokes function and manually sets this.
function showThis(){
    console.log(this?.name ?? "No name");
}
showThis.call({name: "Nikita"});

//apply() :- similar to call() but takes arguments as an array.
showThis.apply({name: "Carios"});
showThis.apply({name: "Alice"});
//  fn.apply(obj, [a, b])



//bind() :- bind() does NOT execute immediately, returns a new function with 'this' permanently bound this.
const bond = showThis.bind({name: "Dina"});
bond();




//Arrow functions should generally NOT be used as object methods when you need dynamic this.
// Wrong Output
const obj = {
  name: "Jay",
  arrow: () => console.log(this.name)
};
obj.arrow(); 
// undefined, because 'this' in arrow function refers to the global scope, not the object.



//Bug

const timer = {
    label:"Countdown ",
    start(){
       setTimeout(function() {
        console.log(this.label); 
        },1000);
    }
}
timer.start();
//Because setTimeout executes the callback as a normal function call.

//Best Way

const timer2 = {
    label: "Countdown 2 ",

    start(){
        setTimeout(() => {
            console.log(this.label);
        }, 1000);
    },
};
timer2.start();
//Arrow function does NOT create its own this.
// It inherits from surrounding scope


//const self = this 

const timer3 = {
    label: "Countdown 3 ",

    start(){
        const self = this;

      setTimeout(function() {
        console.log(self.label);
      },1000);
    },
};
timer3.start();
//Closures preserve variables. self references timer.


//.bind

const timer4 = {
    label: "Countdown 4",

    start(){
        setTimeout( function(){
            console.log(this.label);
            }.bind(this),1000
        );
    },
};
timer4.start();