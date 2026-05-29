"use strict";
//Basic function with types
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
//Optional parameters
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}`;
    }
    return `Hello, ${name}`;
}
//# sourceMappingURL=function.js.map