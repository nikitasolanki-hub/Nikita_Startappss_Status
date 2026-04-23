const express = require('express');
const app = express();
const bookRouters = require('./routes/booksRouters');   
const router = express.Router();
app.use(express.json());



app.use('/', bookRouters);

// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));






// In Memory book collection
// let books = [
//     { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//     { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
//     { id: 3, title: "1984", author: "George Orwell" }
// ]
// //get
// app.get('/books', (req, res) =>{
//     res.json(books);
// })
// //post
// app.post('/books',(req, res ) => {
//    // console.log(req.body);
//     const newBook = {
//         id:books.length + 1,
//         title: req.body.title,
//         author: req.body.author

//     };
//     books.push(newBook);
//     res.status(201).json(books);
// } )

// app.get('/books', (req, res) => {
//     res.json(books);
// })
//  app.post('/books',(req, res ) => {
//     console.log(req.body);
//     const newBook = req.body;
//     newBook.id = books.length + 1;
//     books.push(newBook);
//     res.status(201).json(books); 
    
//  }); 

//  app.put('/books/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const updatedBook = req.boby;
//     const index = books.findIndex(book => book.id === id);

//     if(index !== -1){
//         books[index] = {...books[index], ...updatedBook};
//         res.json(books[index]);
//     }
//     else{
//         res.status(404).json({ error: "Book not found" });
//     }
//  })
    

//  app.delete('/books/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = books.findIndex(book => book.id === id);

//     if(index !== -1){
//         const deletedBook = books[index];
//         books.slice(index, 1);
//         res.json(deletedBook);
//     }
//     else{
//         res.status(404).json({ error: "Book not found" });
//     }
//  })

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})