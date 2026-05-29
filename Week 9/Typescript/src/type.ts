//Primitives
let username: string = "Piyush";
let age: number = 27;
let isAdmin: boolean = true;

//Arrays
let numbers: number[] = [1,2,3,];
let name: string [] = ["Piyush", "Rohan"];

//tuples
let person: [string, number] = ["Piyush", 34];


//Enum

enum color {
    red,
    greeen,
    yellow
}
let favoriteColor: color =color.red ;

//Any type (avoid when possible) 
let randomValue : any = 10;
randomValue = "Piyush";
randomValue = true;

//unknow(safer than any)
let userInput: unknown;
userInput = 5;
userInput = "Text";


//void (for function that don't change )
function typemanage(meassage : string):void {
    console.log(meassage)
}

//Null and undefined
let nullValue: null= null;
let undefinedValue: undefined = undefined;