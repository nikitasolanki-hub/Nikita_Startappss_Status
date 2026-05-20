function greet(name = "stranger", ...hobbies){
    return`Hi ${name}! You enjoy: ${hobbies.join(", ")}`;
}

console.log(greet("Aarav", "coding", "chess", "hiking"));