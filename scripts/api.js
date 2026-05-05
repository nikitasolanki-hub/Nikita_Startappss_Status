//Main Api
// Use Async and Await function asynchronouse(to call api)
// ALso use Promise and (.then) 

const BASE_URl = "https://jsonplaceholder.typicode.com/";

const apiDataDiv = document.getElementB

const mapData = () => {
    return postData.map((individualEntryOfPost) => {
        <div>{individualEntryOfPost.title}</div>

    })
};

apiDataDiv.innerHtml = 


    const postData = getPosts()
//Get Post 
export async function getPosts() {
    const res = await fetch(`${BASE_URL}/posts`);
    return await res.json();              // res response object formate
}
//Get Single Post 
export async function getPosts(id) {
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    return await res.json();
} 
//create post
export async function createPosts(data) {
    const res = await fetch(`${BASE_URL}/posts`, {
        method:"Post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return await res.json();
} 
//uPDATE pOST
export async function updatePosts(id, data) {
    const res = await fetch(`${BASE_URL}/posts/${id}` ,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return await res.json();
} 
//Delete Post

export async function deletePosts(id){
 await fetch(`${BASE_URL}/posts/${id}`, {
    method: "Delete",
 });
 return true;
}
