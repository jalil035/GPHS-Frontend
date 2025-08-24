import express from 'express';
import { uploadNoticeFiles } from "./../Middleware/upload.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import { uploadNoticeBoard, getAllNoticeBoard, deleteNotice } from '../Controllers/noticeBoardController.js';

const router = express.Router();

//Upload Notice
router.post("/upload", authMiddleware, uploadNoticeFiles, uploadNoticeBoard);

//Get All Notice
router.get("/getAll", getAllNoticeBoard);

//Delete Notice
router.delete("/delete/:id", authMiddleware, deleteNotice);

export default router;