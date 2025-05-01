import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{
    const host="http://localhost:5000"
    const Notesinitial=[]
    const[notes,setNotes]=useState(Notesinitial)
    // const s1={
    //     "name":"Anant",
    //     "class":"785758"
    // }
    // const[state,setState]=useState(s1);
    // const update=()=>{
    //     setTimeout(() => {
    //         setState({
    //             "name":"Pratap",
    //             "class":"apsbm"
    //         })
    //     }, 2000);

    // }

    // GET NOTES
    const getNote=async ()=>{
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjOGQzZjUyYzUwN2YwYWUxMzViODIyIn0sImlhdCI6MTcwNzczMDIwOH0.naWUHmlHjHuuNplYXrcmrdErgI2g4esYZFkjtO4ENxA"
            },
          });
          const json=await response.json()
          console.log(json);
          setNotes(json);

      }

      //Add Note Functionality
      const addNote=async (title,description,tag)=>{

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjOGQzZjUyYzUwN2YwYWUxMzViODIyIn0sImlhdCI6MTcwNzczMDIwOH0.naWUHmlHjHuuNplYXrcmrdErgI2g4esYZFkjtO4ENxA"
            },
            body: JSON.stringify({title,description,tag})
          });

          const json= response.json();
          console.log(json)
        console.log("Adding a new note")
        const note=
            {
                "_id": "65ca4d15e730c632cb79406b",
                "user": "65c8d3f52c507f0ae135b834",
                "title": title,
                "description": description,
                "tag": tag,
                "date": "2024-02-12T16:53:41.870Z",
                "__v": 0
            }
        setNotes(notes.concat(note))
      }

      //Delete Note Functionality
      
      const deleteNote=async (id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjOGQzZjUyYzUwN2YwYWUxMzViODIyIn0sImlhdCI6MTcwNzczMDIwOH0.naWUHmlHjHuuNplYXrcmrdErgI2g4esYZFkjtO4ENxA"
            },
          });
          const json= response.json();
          console.log(json)


        console.log("Deleting a note"+ id)
        const newNotes=notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }


      //Update Note Functionality
      const updateNote=async (id,title,description,tag)=>{

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjOGQzZjUyYzUwN2YwYWUxMzViODIyIn0sImlhdCI6MTcwNzczMDIwOH0.naWUHmlHjHuuNplYXrcmrdErgI2g4esYZFkjtO4ENxA"
            },
            body: JSON.stringify(title,description,tag),
          });
          const json= response.json();
          console.log(json)

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element.id===id){
                element.title=title;
                element.description=description;
                element.tag=tag;
            }
            
        }
      }
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,updateNote,getNote}}>
            {props.children}
            </NoteContext.Provider>
    )

}
export default NoteState;