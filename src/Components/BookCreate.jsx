import React, {useState} from 'react';

function BookCreate({onCreate}){
    const [title, setTitle] = useState(''); // title is a string

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
        setTitle('');
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    return(
        <div className='book-create'>
            <form onSubmit={handleSubmit}>
                <h3>Create Book</h3>
                <label htmlFor="title">Title</label>
                <input className='input' type="text" id="title" value={title} onChange={handleChange} />
                <button className='button' type="submit">Create</button>
            </form>
        </div>
    )
}

export default BookCreate;