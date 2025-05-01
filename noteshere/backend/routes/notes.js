const express=require('express')
const fetchuser = require('../middleware/fetchuser')
const router=express.Router();
const { body, validationResult } = require('express-validator');
const Note = require('../modals/Note')

//Route 1-Get all the notes using: GET "/api/notes/fetchallnotes".Login Required
router.get('/fetchallnotes',fetchuser,async(req,res)=>{

    try {
        const notes=await Note.find({user:req.user.id})
        res.json(notes)      
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Internel server error");
    }
})

//Route 2-Add a new note using: POST "/api/notes/fetchallnotes".Login Required
router.post('/addnote',fetchuser,[
    body('title','Enter a valid Title name').isLength({ min: 3 }),
    body('description','Description must be atleast 5 characters').isLength({ min: 5 }),
],async(req,res)=>{

    try {      
        const{title,description,tag}=req.body
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note =new Note({
            title,description,tag, user:req.user.id
        })
        const savednotes=await note.save();
        res.json(savednotes);

    } catch (error) {
        console.error(error.message);
        res.status(500).json("Internel server error");
    }

})

//Route 3-Update an existing note using: PUT "/api/notes/updatenote/:id".Login Required

router.put('/updatenote/:id',fetchuser,async(req,res)=>{

    try {
        const {title,description,tag}=req.body

        //Add a new note
        const newNote={}
        if(title){newNote.title=title};
        if(description){newNote.description=description};
        if(tag){newNote.tag=tag};
     
        //Find note to be updated and update it
        let note=await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not found")}
     
        if(note.user.toString()!=req.user.id){
         return res.send(401).send("Not allowed")
        }
     
        note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.json({note});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Error in Updation");
    }
})



//Route 4-Deleting note using: DELETE "/api/notes/deletenote/:id".Login Required

router.delete('/deletenote/:id',fetchuser,async(req,res)=>{

    try {     
        //Find note to be updated and update it
        let note=await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not found")}
     
        if(note.user.toString()!=req.user.id){
         return res.send(401).send("Not allowed")
        }
     
        note=await Note.findByIdAndDelete(req.params.id)
        res.json({"success":"Note has been deleted",note:note});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Error in Delete Note");
    }
})


module.exports=router