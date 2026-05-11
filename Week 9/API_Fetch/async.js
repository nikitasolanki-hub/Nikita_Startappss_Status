async function getUsers(){
    try{
        const response = await fetch
        ("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();
        console.log("User Data: ");
        console.log(data)
    }
    catch(error){
        console.log("Error: ", error);
    };
}
getUsers();