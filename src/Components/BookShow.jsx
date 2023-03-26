import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow( {book, onDeleteHandle, onUpdateHandle}){
    const [onEdit, setOnEdit] = useState(false);


    const handleDeleteClick = () => {
        onDeleteHandle(book.id);
    }

    return(
        <div className="book-show">
            {onEdit ? <BookEdit book={book} onUpdateHandle = {onUpdateHandle} edits = {{onEdit,setOnEdit}}/> : <h3>{book.title}</h3>}
            <div className="actions">
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
                <button className="edit" onClick={() => setOnEdit(!onEdit)}>
                    {onEdit ? "Cancel" : "Edit"}
                </button>

            </div>

        </div>
    )
}

export default BookShow;