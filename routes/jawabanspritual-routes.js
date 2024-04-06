import express from 'express';

import { getAllSpritual, postSpritual } from '../controllers/jawabanspritual-controller.js';


const router = express.Router();

router.get("/jawabanSpritual", getAllSpritual)

router.post("/jawabanSpritual", postSpritual )
// router.post("/login", login )

export default router;