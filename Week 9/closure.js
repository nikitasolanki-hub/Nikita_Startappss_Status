//{

// function outer(){
//     let count = 0;

//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner;
   
// }
// const counter = outer();
// counter();
// counter();
// counter();
// counter();


//outer() finished, but inner() still remembers count.
//This is called closure.

//if we not use return 
// outer() returned nothing
// in js,  if a function does not return anything it will return undefined
//typeError: counter is not a function










//2 one

// function greeting(name){

//     function message(){

//         console.log("Hello "+ name);
//     }

//     return message;
// }

// const greetName = greeting("Nikita");
// greetName();











// 3 one (with Block scope)

// function user (){

// }

// function outer() {

//   {
//     let message = "Hello";
    
//     function inner() {
//       console.log(message);
//     }

//     return inner;
//   }

// }

// const fn = outer();

// fn();





//4 one (Private Variable)

// function user(){
//     let password = "12345";

// return {
//     getPassword(){
//         return password;
//     },
//     setPassword(newPassword){
//         password = newPassword;
//     }
//    };
// }
// const admin = user();

// console.log(admin.getPassword());

// admin.setPassword("ABCD");

// console.log(admin.getPassword());





// 5 one(setTimeOut + closure)


// function test(){
//     let name = "Nikita";
//     setTimeout(function(){
//         console.log(name);
//     },2000);
// }
// test();








//6 one(colusre probole with var)

//for(var i =1 ; i <= 3; i++ ){

// for(let i =1 ; i <= 3; i++ ){

//     setTimeout(function(){
//         console.log(i)
//     }, 1000);
// }


// var is function scoped.  (use let instead of var)
// using var output will be : 4
//                            4
//                            4
// let creates new block scope each iteration.
// All callbacks share same i.
// Loop finishes first:


//7 one {with var }

// for(var i = 1; i <= 3; i++){

//     function close(x){
//         setTimeout(function(){
//             console.log(x);
//         },1000);
//     }
//     close(i);
// }





//8 one{function factory}

// function multiplier(x){
//     return function(y){
//         return x * y;
//     };
// }
// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5));
// console.log(triple(5));








// 9  one
// { 

// function createBankAccount(initialBalanace){
//     let balance = initialBalanace;
//     return{
//         deposit(amount){
//             balance +=amount;
//             return balance;
//         },
//         withdraw(amount){
//             if(amount > balance){
//                 return "Insufficient balance";
//             }
//             balance -= amount;
//             return balance;
//         },
//         checkBalance(){
//             return balance;
//         }
//     };
// }
// const account = createBankAccount(1000);
// console.log(account.deposit(500));
// console.log(account.deposit(500));    
// console.log(account.withdraw(300));    
// console.log(account.checkBalance());   

// console.log(account.balance); 

// // }
// // (balance) is private. You cannot access it directly.




// //10 one (react like state concept)
// // Closures are heavily used in React hooks internally.

// function state(initialValue){

//     let value = initialValue;

//     return[
//         function getValue(){
//             return value;
//         },
//         function setValue (newValue){
//             value = newValue;
//         }
//     ];
// }
// const [getCount, setCount] = state(0);
// console.log(getCount());
// setCount(10);
// console.log(getCount());




//11 one(Memoization using closure)

function memoize(){

    let cache = {};

        return function(num){
            if (cache[num]) {
                console.log("From cache");
                return cache[num];
            }

            console.log("Calculutaed");
            
            let result = num * num;
            cache[num] = result;
            return result ;
        };
}
const square = memoize();

console.log(square(5));
console.log(square(5));
