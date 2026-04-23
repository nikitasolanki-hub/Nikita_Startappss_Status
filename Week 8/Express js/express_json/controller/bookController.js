let books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "1984", author: "George Orwell" }
]


const getBooks = (req, res) => {
    res.json(books);
}
const createBook = (req, res ) => {
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(books);   
 }; 

const updateBook = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);

    if(index !== -1){
        books[index] = {...books[index], ...updatedBook};
        res.json(books[index]);
    }
    else{
        res.status(404).json({ error: "Book not found" });
    }
 }
    

const deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);

    if(index !== -1){
        const deletedBook = books[index];
        books.slice(index, 1);
        res.json(deletedBook);
    }
    else{
        res.status(404).json({ error: "Book not found" });
    }
 }

 module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
 }