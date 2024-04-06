import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema

const SpritualSchema = new Schema({
    id:{
        type: String,
        // required:true
    },
    id_user:{
        type: String,
        // required:true
    },
    jawabanSpritual: {
        type: Array,
        // required:true,
        // unique: true
    },
    
    isSpritual: {
        type: Boolean,
        required:false,
        // unique: true
    },
    isSpritualPosttest: {
        type: Boolean,
        required:false,
        // unique: true
    },
    
})

export default mongoose.model("jawabanSpritual", SpritualSchema)
//name collection users