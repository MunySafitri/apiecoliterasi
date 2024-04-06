import express from 'express';

// import { getAllSpritual, postSpritual } from '../controllers/jawabanspritual-controller.js';
import { getAllKomentar, postKomentar } from '../controllers/komentar-controller.js';


const router = express.Router();

router.get("/komentar", getAllKomentar)

router.post("/komentar", postKomentar )
// router.post("/login", login )

export default router;