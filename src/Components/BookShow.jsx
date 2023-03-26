import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow( {book, onDeleteHandle, onUpdateHandle}){
    const [onEdit, setOnEdit] = useState(false);


    const handleDeleteClick = () => {
        onDeleteHandle(book.id);
    }

    const handleEditClick = () => {
        setOnEdit(!onEdit);
    }

    const handleSubmitForm = (id, title) => {
        setOnEdit(false);
        onUpdateHandle(id, title);
    }

    return(
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}>
            </img>
            {onEdit ? <BookEdit book={book} onSubmit={handleSubmitForm} /> : <h3>{book.title}</h3>}
            <div className="actions">
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
                <button className="edit" onClick={handleEditClick}>
                    {onEdit ? "Cancel" : "Edit"}
                </button>

            </div>

        </div>
    )
}

export default BookShow;