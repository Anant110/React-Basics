import React, { useContext, useEffect, useState, useRef } from 'react'
import noteContext from '../Context/notes/noteContext'
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNote } = context;
    useEffect(() => {
        getNote();
        // eslint-disable-next-line 
    }, [])

    const ref = useRef(null)
    const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })

    const updateNote = (currentnote) => {
        ref.current.click();
        setNote({ etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })
    }


    const handleClick = (e) => {
        e.preventDefault();

    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote />

            <button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className='my-3'>
                                <div class="mb-3">
                                    <label htmlFor="title" class="form-label">Title</label>
                                    <input type="text" class="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="Descriptiom" class="form-label">Description</label>
                                    <textarea class="form-control" id="eDescription" name='edescription' value={note.edescription} onChange={onChange}></textarea>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="tag" class="form-label">Tag</label>
                                    <textarea class="form-control" id="etag" name='etag' value={note.etag} onChange={onChange}></textarea>
                               </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h1>Your Notes</h1>
                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
