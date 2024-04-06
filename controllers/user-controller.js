import User from "../model/User.js"
import bcrypt from "bcryptjs"

const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return console.log(err)
    }

    if (!users) {
        return res.status(404).json({ message: "No user" })
    }
    return res.status(200).json({ users })
}

const signup = async (req, res, next) => { 
    // const { name, email, password, pelajaran, kelas, semester, isPretest, isPosttest, isAdmin } = req.body
    
        
        // res.status(200).json({
        //   message: "success",
        //   data: todo
        // })
      
    // let existingUser;
    // try {
    //     existingUser = await User.findOne({ email })
    // } catch (err) {
    //     return console.log(err)
    // }

    // if (existingUser) {
    //     return res.status(400).json({ mssage: "User Already Exist" })
    // }

    // const hashedPassword = await bcrypt.hashSync(password)
    const user = await User.create(req.body)
    try{
        user.save()
    }catch(err){
        return console.log(err)
    }
    return res.status(201).json({user}) 

}

const login = async  (req, res, next)=>{
    const {email, password} =req.body
    let existingUser;
    try {
        existingUser = await User.findOne({ email })
    } catch (err) {
        return console.log(err)
    }

    if (!existingUser) {
        return res.status(400).json({ mssage: "TIdak bisa login" })
    }
    const isPasswordCorrect =  (password === existingUser.password)
    if (!isPasswordCorrect){
        return res.status(400).json({message:"Incorrecrt Password"})
    }

}
export {getAllUser ,signup, login}  ;
