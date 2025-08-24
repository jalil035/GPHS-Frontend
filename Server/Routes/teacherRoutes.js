import express from "express";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import {
  addNewTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacherById,
  deleteTeacherById,
} from "../Controllers/teacherController.js";
import { uploadSingleImage } from "../Middleware/upload.js";

const router = express.Router();

// Teacher routes
router.post("/addNew", authMiddleware, uploadSingleImage, addNewTeacher);
router.get("/getAll", authMiddleware, getAllTeachers);
router.get("/getOne/:id", authMiddleware, getTeacherById);
router.put(
  "/update/:id",
  authMiddleware,
  uploadSingleImage,
  updateTeacherById
);
router.delete("/delete/:id", authMiddleware, deleteTeacherById);

export default router;
