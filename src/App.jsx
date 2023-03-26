import React, { useState } from 'react';
import BookCreate from './Components/BookCreate';

function App() {
    const [books, setBooks] = useState([]); // books is an array of objects
    const createBook = (title) => {
        const updatedBooks = [...books, { title }]; // it adds a new object end of the array
        setBooks(updatedBooks);
    }

  return (
    <div className="App">
        <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;