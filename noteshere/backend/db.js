const mongoose=require('mongoose')
const mongoURI='mongodb://localhost:27017/noteshere'


const connecttomongo=()=>{
    mongoose.connect(mongoURI,{

    })
    .then(() => {
        console.log("Conneted to mongo successfully")
    }).catch((err) => {
        console.error(err)
    });

}

module.exports=connecttomongo