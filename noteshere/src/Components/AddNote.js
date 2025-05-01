import React, { useState } from 'react';
import noteContext from '../Context/notes/noteContext';
import { useContext } from 'react';

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "default" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);

    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    
    return (
        <div>
            <div className="container my-3">
                <h1>Add a note</h1>
                <form className='my-3'>
                    <div class="mb-3">
                        <label htmlFor="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" name='title' onChange={onChange} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="Descriptiom" class="form-label">Description</label>
                        <textarea class="form-control" id="Description" name='description' onChange={onChange}></textarea>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="tag" class="form-label">Tag</label>
                        <textarea class="form-control" id="tag" name='tag' onChange={onChange}></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote
