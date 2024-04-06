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
        required:false,
        // unique: true
    },
    isKognitifPosttest: {
        type: Boolean,
        required:false,
        // unique: true
    },
    
})

export default mongoose.model("jawabanKognitif", kognitifSchema)
//name collection users