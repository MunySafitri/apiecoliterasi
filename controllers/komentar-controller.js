import Komentar from "../model/komentar.js"

export const postKomentar = async (req, res, next) => { 
    const komentar = await Komentar.create(req.body)
    try{
        komentar.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({komentar}) 

}
export const getAllKomentar= async (req, res, next) => {
    let komentar;
    try {
        komentar = await Komentar.find();
    } catch (err) {
        return console.log(err)
    }

    if (!komentar) {
        return res.status(404).json({ message: "No Komentar" })
    }
    return res.status(200).json({ komentar })
}