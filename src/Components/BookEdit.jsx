import React, {useState} from 'react';

function BookEdit( {book, onSubmit}){
    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book.id, title);
    }

    return(
        <div>
            <form onSubmit={onHandleSubmit} className="book-edit">
                <label htmlFor="update">Title</label>
                <input type="text" id="update" value={title} onChange={handleChange} className="input" />
                <button className='button is-primary'>Save</button>
            </form>

        </div> 
    )
}

export default BookEdit;