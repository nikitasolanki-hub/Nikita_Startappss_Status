
const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());       //(comment this perform without express.json() )

app.use('/', bookRoutes); 

// let books = [
//     {id: 1, title: 'Book 1', author: 'Author 1'},
//     {id: 2, title: 'Book 2', author: 'Author 2'},
//     {id: 3, title: 'Book 3', author: 'Author 3'},   
// ]

// //Read operation 
// app.get('/', (req, res) => {
//     res.json(books);
// });

// app.use(express.json());

// //Create operation
// app.post('/books', (req, res) => {
//     console.log(req.body);
//     const newBook = req.body;
//     newBook.id = books.length + 1;
//     books.push = books.push(newBook);
//     res.status(201).json(newBook);
// });
// //Update operation
// app.put('/books/:id',(req, res) => {
//     const id = parseInt(req.params.id);
//     const updatedBook = req.body;
//     const index = books.findIndex(book => book.id === id);

//     if(index !== -1){
//         books[index] = {...books[index],...updatedBook};
//           res.json(books[index]);
//     }
//     else{
//             res.status(404).json({error: 'Book not found'});
//     }
// })

// //Delete operation
// app.delete('/books/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const index = books.findIndex(book => book.id === id);

//     if(index !== -1){
//         const deletedBook = books[index]
//         books.slice(index, 1);
//         res.json(deletedBook);
//     }
//     else{
//         res.status(404).json({error: 'Book not found'});
//     }
// })

app.listen(7000, () => {
     console.log('Server is running on port 7000');
 })






//This operation also performe with Express.js framework, beacuse it provides a simple and efficient way to handle HTTP requests and responses. 
// Express.js allows us to define routes for different HTTP methods (GET, POST, PUT, DELETE) and easily manage the data sent in the request body. 
// It also provides middleware functions that can be used to process requests before they reach the route handlers, making it easier to implement features 
// like authentication, validation, and error handling. Overall, using Express.js simplifies the development of RESTful APIs and enhances the functionality of our application.