const express = require('express');
const app = express();
app.use(express.json());


let book = [
    {id: 1, title: 'Book 1', author: 'Author 1'},
    {id: 2, title: 'Book 2', author: 'Author 2'},
    {id: 3, title: 'Book 3', author: 'Author 3'},   
]

//Read
app.get('/', (req, res) => {
    res.json(book);
})



app.use(express.json());
//Create

app.post('/books',(req, res) => {
    console.log(req.body);
    const newBook = req.body;
    newBook.id = book.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
})




app.listen(7000, () => {
    console.log('Server is running on port 7000');
})