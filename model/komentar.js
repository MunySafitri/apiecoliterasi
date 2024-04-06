import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema

const komentarSchema = new Schema({
    id:{
        type: String,
        // required:true
    },
    username:{
        type: String,
        // required:true
    },
    komentar: {
        type: String,
        // required:true,
        // unique: true
    },
    
    // created_at: {
    //     type: Boolean,
    //     // required:true,
    //     // unique: true
    // },
    
    
})

export default mongoose.model("komentar", komentarSchema)
//name collection users