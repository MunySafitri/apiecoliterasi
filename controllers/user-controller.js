import User from "../model/User.js"
import bcrypt from "bcryptjs"
import jawabanSpritual from "../model/jawabanSpritual.js";

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

const updatedUser = async(req, res, next) => {
    const userId = req.params.id;
    let user;
    // const data = {
    //     id: req.body.id,
    //     id_user: req.body.id_user,
    //     jawabanSpritual: req.body.jawabanSpritual,
    //     isSpritual: req.body.isSpritual,
    // }
    // try{ 
    //      user = await User.findByIdAndUpdate(userId, req.body)
    // }catch(err){
    //     return console.log(err)
    // }
    // return res.status(200),json({user})
    
    
    // await User.findByIdAndUpdate((req.params.id).trim(), { $set: user }, { new: false }, (err,data) => {
    //     if(!err){
    //         res.status(200).json({code: 200, message: 'Updated successfully', updatedUser: data})
    //         // res.send(data);
    //     }else{
    //         console.log(err);
    //     }
    // })
    // const data = {
    //     id: req.body.id,
    //     id_user: req.body.id_user,
    //     jawabanSpritual: req.body.jawabanSpritual,
    //     isSpritual: req.body.isSpritual,
    // }

    try {
        // let user = await User.findById(req.params.id);
        // if (!user) {
        //   return res.status(404).json({ message: "Not found " })
        // }
        var query = {'id_user': req.params.id};
        user = await User.updateOne({id  : req.params.id},
            {$set: req.body});
    
        res.status(200).json({
          message: "success",
          data: user
        })
      }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
      }


    
}

export {getAllUser ,signup, login, updatedUser}  ;
