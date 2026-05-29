//type alias

type Point = {
    x : number;
    y: number;
};

let point : Point = {x:10, y:20};

//type alias for primitives 
type ID = string | number ;

let userId: ID  = "piyush123"
let productId : ID = 456;

//Type alise vs Interface
//Interface can be extended, type allas cannot 

interface Animal {
    name: string;
}
interface Dog extends Animal{
    breed : string;
}
// let myDog : Dog = {
//     name:"Buddy",
//     breed:"Golden Retriever",
// }; 

//INterface can be declared multiple times and will merge

interface Animal {
    name: string;
}

interface Animal {
  age : number;
}
 let dog : Animal = {
    age: 3,
    name:"Buddy",
};

 // Use iNterface for object shapse,
 // type aliases for unions/ intersections