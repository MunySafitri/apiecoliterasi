import Kognitif from "../model/JawabanKognitif.js"
// import bcrypt from "bcryptjs"

export const getAllKognitif = async (req, res, next) => {
    let kognitif;
    try {
        kognitif = await Kognitif.find();
    } catch (err) {
        return console.log(err)
    }

    if (!kognitif) {
        return res.status(404).json({ message: "No Kognitif" })
    }
    return res.status(200).json({ kognitif })
}

export const postKognitif = async (req, res, next) => { 
    const kognitif = await Kognitif.create(req.body)
    try{
        kognitif.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({kognitif}) 

}


// export {getAllUser ,signup, login}  ;
