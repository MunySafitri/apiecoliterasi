import express from 'express';

// import {getAllUser,signup,login} from "../controllers/user-controller.js"
import { getAllKognitif, postKognitif } from '../controllers/jawabankognitif-controller.js';
import {auth} from '../middleware/auth.js'

const router = express.Router();

router.get("/jawabanKognitif",auth, getAllKognitif)

router.post("/jawabanKognitif",auth, postKognitif )
// router.post("/login", login )

export default router;