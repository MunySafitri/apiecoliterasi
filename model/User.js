import mongoose, { model } from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    id:{
        type: String,
        // required:true
    },
    name:{
        type: String,
        // required:true
    },
    email: {
        type: String,
        // required:true,
        unique: true
    },
    password: {
        type: String,
        // required:true
    },
    pelajaran: {
        type: String,
        // required:true 
    },
    kelas: {
        type: String,
        // required:true
    },
    semester: {
        type: String,
        // required:true
    },
    isPretest: {
        type: Boolean,
        // required:true 
    },
    isPosttest: {
        type: Boolean,
        // required:true
    },
    isAdmin: {
        type: Boolean,
        // required:true
    },
})

export default mongoose.model("User", userSchema)
//name collection users