// Three ways to write the same add function

//Function declaration with nameSpaces
function addDeclaration(a,b) {
    return a + b; 
}
console.log(addDeclaration(4,5))

//Anonymous function

const addExpression = function(a,b) {
    return a + b ;  
}
console.log(addExpression(5 , 6))

// Arrow function

const addArrow = (a,b) => {
    return a + b ;

}
console.log(addArrow(6,7))

