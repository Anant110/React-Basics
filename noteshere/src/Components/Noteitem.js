import React,{ useContext } from 'react';
import noteContext from '../Context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note ,updateNote } = props;

    return (
        <div className='col-md-3'>
            <div class="card" style={{marginTop:"24px"}}>
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description}</p>
                        <i class="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i class="fa-solid fa-pen-to-square mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick={()=>{updateNote(note)}}></i>
                    </div>
            </div>
        </div>
    )
}

export default Noteitem
