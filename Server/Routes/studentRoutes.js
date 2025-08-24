import express from "express";
import {
    getAllStudent,
    getStudentById,
    getStudentsByClass,
    addNewStudent,
    updateStudentById,
    deleteStudent
} from "../Controllers/studentController.js";
import { uploadAdmissionFiles } from "../Middleware/upload.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";

const router = express.Router();


//Get All Student
router.get("/getAll", authMiddleware, getAllStudent);

//Get Student By Id
router.get("/get/:id", authMiddleware, getStudentById);

//Get Students By Class
router.get("/getByClass/:admissionClass", authMiddleware, getStudentsByClass);

//Add New Student
router.post("/add", authMiddleware, uploadAdmissionFiles, addNewStudent);

//Update Student By Id
router.put("/update/:id", authMiddleware, uploadAdmissionFiles, updateStudentById);

//Delete Student By Id
router.delete("/delete/:id", authMiddleware, deleteStudent);


export default router;