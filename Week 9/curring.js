// Currying = instead of passing all arguments at once, pass them one by one.

//Normal Function

// function add (a,b,c){
//     return a+b+c;
// }
// console.log(add(2,3,4));

//Curring function

// function add(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         };
//     };
// }
//  console.log(add (2)(3)(4))


 //same with arrow function
//  const add = a => b => c => a + b + c;
//  console.log(add(4)(5)(6));


//currying calculator

// function discount(discountPercent){
//     return function(price){
//         return price - (price * discountPercent / 100);
//     };
//  }
//  const tenPercentDiscount = discount(10);
//  const twentyPercentDiscount = discount(20);

//  console.log(tenPercentDiscount(1000));
//  console.log(tenPercentDiscount(5000));
//  console.log(twentyPercentDiscount(1000));





//Example

// const multiply = a => b => a * b;
// const double = multiply(2);

// console.log(double(5));
// console.log(double(10));