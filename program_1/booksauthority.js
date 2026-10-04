// program_1/booksauthority.js
const express = require('express');
const { getBooks, addBook, deleteBook, updateBook } = require('./booksrep');

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

// 1. READ (GET method)
app.get('/', (req, res) => {
  res.status(200).json(getBooks());
});

// 2. CREATE (POST method)
app.post('/', (req, res) => {
  const { id, title, author } = req.body;
  addBook(id, title, author); // Pass values individually to match repository arguments
  res.status(201).json({ message: 'Book added successfully', currentCart: getBooks() });
});

// 3. DELETE (DELETE method)
app.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  deleteBook(id);
  res.status(200).json(getBooks());
});

// 4. UPDATE (PUT method)
app.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  updateBook(id, updatedBook);
  res.status(200).json(getBooks());
});

app.listen(port, () => {
  console.log(`CRUD Server is running on http://localhost:${port}`);
});
