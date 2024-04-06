import Spritual from "../model/jawabanSpritual.js"
// import bcrypt from "bcryptjs"

export const getAllSpritual = async (req, res, next) => {
    let spritual;
    try {
        spritual = await Spritual.find();
    } catch (err) {
        return console.log(err)
    }

    if (!spritual) {
        return res.status(404).json({ message: "No Kognitif" })
    }
    return res.status(200).json({ spritual })
}

export const postSpritual = async (req, res, next) => { 
    const spritual = await Spritual.create(req.body)
    try{
        spritual.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({spritual}) 

}


// export {getAllUser ,signup, login}  ;
