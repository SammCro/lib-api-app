import React, { useState } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

function App() {
    const [books, setBooks] = useState([]); // books is an array of objects
    const createBook = (title) => {
        const updatedBooks = [...books, { 
        id : Math.round(Math.random() * 1000000),
        title}]; // it adds a new object end of the array
        setBooks(updatedBooks);
    }

    const deleteBook = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    }

    const updateBook = (id, title) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return {...book, title};
            }
            return book;
        })
        setBooks(updatedBooks);
    }

  return (
    <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBook} onUpdate ={updateBook}></BookList>
        <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;