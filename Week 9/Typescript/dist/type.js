"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Primitives
let username = "Piyush";
let age = 27;
let isAdmin = true;
//Arrays
let numbers = [1, 2, 3,];
let name = ["Piyush", "Rohan"];
//tuples
let person = ["Piyush", 34];
//Enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["greeen"] = 1] = "greeen";
    color[color["yellow"] = 2] = "yellow";
})(color || (color = {}));
let favoriteColor = color.red;
//Any type (avoid when possible) 
let randomValue = 10;
randomValue = "Piyush";
randomValue = true;
//unknow(safer than any)
let userInput;
userInput = 5;
userInput = "Text";
//void (for function that don't change )
function typemanage(meassage) {
    console.log(meassage);
}
//Null and undefined
let nullValue = null;
let undefinedValue = undefined;
//# sourceMappingURL=type.js.map