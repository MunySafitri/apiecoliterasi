import express from 'express';

import {getAllUser,signup,login, updatedUser} from "../controllers/user-controller.js"
// import User from '../model/User.js';
// import signup  from "../controllers/user-controller.js"

const router = express.Router();

router.get("/user", getAllUser)

router.post("/user", signup )

router.post("/login", login )
router.put("/user/:id", updatedUser )
router.patch("/user/:id", updatedUser )


export default router;