const promise = new Promise((resolve, reject) => {
console.log("User Data");
})

fetch("https://jsonplaceholder.typicode.com/users")

.then((response) => {
    return response.json();
})

.then((data) => {
    console.log(data);
})

.catch((error) => {
    console.log("Error:", error);
});