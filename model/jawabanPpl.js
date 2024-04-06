import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema

const PPLSchema = new Schema({
    id:{
        type: String,
        // required:true
    },
    id_user:{
        type: String,
        // required:true
    },
    jawabanPPL: {
        type: Array,
        // required:true,
        // unique: true
    },
    
    
    isPPL: {
        type: Boolean,
        required:false,
        // unique: true
    },
    isPPLPosttest: {
        type: Boolean,
        required:false,
        // unique: true
    },
})

export default mongoose.model("jawabanPPL", PPLSchema)
//name collection users