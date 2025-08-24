import express from "express";
import {
  applyAdmission,
  searchAdmissionStatus,
  adminApproveApplication,
  adminRejectApplication,
  getAllApplications,
  adminDeleteApplication,
  deleteOldApplication,
} from "../Controllers/admissionApplicationController.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import { uploadAdmissionFiles } from "../Middleware/upload.js";

const router = express.Router();

//apply for Admission
router.post("/apply", uploadAdmissionFiles, applyAdmission);

//Search Admission Status
router.get("/search", searchAdmissionStatus);

//get Admission Application
router.get("/getAll", authMiddleware, getAllApplications);

//Admin Approve Application
router.post("/approve/:id", authMiddleware, adminApproveApplication);

//Admin Reject Application
router.post("/reject/:id", authMiddleware, adminRejectApplication);

//Admin Delete Reject Application
router.delete("/delete/:id", authMiddleware, adminDeleteApplication);

//Deleted 90Days old Application
router.delete("/deleteOld", authMiddleware, deleteOldApplication);

export default router;
