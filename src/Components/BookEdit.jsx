import React, {useState} from 'react';

function BookEdit( {book, onUpdateHandle, edits: {onEdit, setOnEdit}}){
    const [title, setTitle] = useState(book.title);

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdateHandle(book.id, title);
        setOnEdit(!onEdit);
    }

    return(
        <div>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="update">Title</label>
                <input type="text" id="update" value={title} onChange={handleChange} />
                <button>Save</button>
            </form>

        </div> 
    )
}

export default BookEdit;