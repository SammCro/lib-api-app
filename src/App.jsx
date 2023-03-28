import React, { useState, useEffect } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import axios from 'axios';
import componentDidMount from 'react';

function App() {
    const [books, setBooks] = useState([]); // books is an array of objects

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3004/books');
        setBooks(response.data);
    }

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3004/books', {title});

        const updatedBooks = [...books, response.data];
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

    useEffect(() => {
        fetchBooks();
    }, []);


  return (
    <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBook} onUpdate ={updateBook}></BookList>
        <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;