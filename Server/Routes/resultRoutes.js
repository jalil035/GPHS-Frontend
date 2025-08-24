import express from 'express';
import { uploadResultFiles } from '../Middleware/upload.js';
import { authMiddleware } from '../Middleware/authMiddleware.js';
import { uploadResult, getAllResults, deleteResult } from '../Controllers/resultController.js';

const router = express.Router();

//Upload Result
router.post("/upload", authMiddleware, uploadResultFiles, uploadResult);

//Get All Results
router.get("/getAll", getAllResults);

//Delete Results
router.delete("/delete/:id", authMiddleware, deleteResult);

export default router;