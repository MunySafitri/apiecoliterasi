import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema

const kognitifSchema = new Schema({
    id:{
        type: String,
        // required:true
    },
    id_user:{
        type: String,
        // required:true
    },
    jawabanKognitif: {
        type: Array,
        // required:true,
        // unique: true
    },
    
    isKognitif: {
        type: Boolean,
        // required:true,
        // unique: true
    },
    isPostKognitif: {
        type: Boolean,
        // required:true,
        // unique: true
    },
    
})

export default mongoose.model("jawabanKognitif", kognitifSchema)
//name collection users