// program_1/booksrep.js
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' }
];

console.log('Inside the booksrep.js file');

function getBooks() {
  return books;
}

function addBook(id, title, author) {
  const book = { "id": id, "title": title, "author": author };
  books.push(book);
}

function deleteBook(id) {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books.splice(index, 1);
  }
}

function updateBook(id, updatedBook) {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook };
  }
}

module.exports = { getBooks, addBook, deleteBook, updateBook };
