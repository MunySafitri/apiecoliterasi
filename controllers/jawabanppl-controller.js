import Ppl from "../model/jawabanPpl.js"
// import bcrypt from "bcryptjs"

export const getAllPPL = async (req, res, next) => {
    let ppl;
    try {
        ppl = await Ppl.find();
    } catch (err) {
        return console.log(err)
    }

    if (!ppl) {
        return res.status(404).json({ message: "No Kognitif" })
    }
    return res.status(200).json({ ppl })
}

export const postPPL = async (req, res, next) => { 
    const ppl = await Ppl.create(req.body)
    try{
        ppl.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({ppl}) 

}


// export {getAllUser ,signup, login}  ;
