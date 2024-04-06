import express from 'express';

// import {getAllUser,signup,login} from "../controllers/user-controller.js"
import { getAllPPL, postPPL } from '../controllers/jawabanppl-controller.js';


const router = express.Router();

router.get("/jawabanPPL", getAllPPL)

router.post("/jawabanPPL", postPPL )
// router.post("/login", login )

export default router;