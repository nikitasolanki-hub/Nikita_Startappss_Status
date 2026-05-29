//Objetc Type Notation 
// let user:{name:string, age:number} = {
//     name: "Piyush",
//     age: 24,
//     email?: string; //optional property
//     readonly id : number;  //readonly property
// };
//short way 

interface User {
    name:string;
    age:number;
    email?: string;
    readonly id : number; 
}

let user: User = {
    name: "Piyush",
    age: 24,
    email: "bgh@gmail.com",
    id : 1,
};


interface Product {
    name:string;
    price:number;
    getDiscount(percent: number):number;
}

let laptop : Product = {
    name:"MacBook",
    price: 2000,
    getDiscount(percentage: number): number {
        return this.price * (percentage / 100);
    },
};

