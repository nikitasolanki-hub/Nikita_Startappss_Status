const db = {
users: [
{ id: 1, name: "Aarav", email: "aarav@example.com" },
{ id: 2, name: "Bella", email: "bella@example.com" },
{ id: 3, name: "Carlos", email: "carlos@example.com" },
],
posts: [
{ id: 101, userId: 1, title: "Learning JS Closures" },
{ id: 102, userId: 1, title: "Async/Await Deep Dive" },
{ id: 103, userId: 2, title: "Array Methods Cheatsheet"},
{ id: 104, userId: 3, title: "CSS Grid in 10 Minutes" },
],
comments: [
{ id: 201, postId: 101, text: "Great post!" },
{ id: 202, postId: 101, text: "Very helpful, thanks!" },
{ id: 203, postId: 102, text: "Mind blown." },
],
};

function fetchUserCb(id, callback){
    setTimeout(() => {
        const user = db.users.find(u => u.id === id);
        callback(user);
    }, 1000);
}