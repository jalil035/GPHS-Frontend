import express from "express";
import { uploadAdmissionFiles } from "../Middleware/upload.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import { uploadAdmissionForm, getAllAdmissionForm, deleteAdmissionForm } from "../Controllers/admissionFromController.js";

const router = express.Router();

//Upload Admission Form
router.post("/uploadForm", uploadAdmissionFiles, authMiddleware, uploadAdmissionForm);

//Get Admission Form
router.get("/getAllForm", authMiddleware, getAllAdmissionForm);

//Delete Admission Form
router.delete("/deleteForm/:id", authMiddleware, deleteAdmissionForm);

export default router;