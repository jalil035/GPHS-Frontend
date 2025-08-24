import express from "express";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import {
  registerNewAdmin,
  loginAdmin,
  logoutAdmin,
  getAdminDetails,
} from "../Controllers/adminController.js";
import teacherRoutes from "./teacherRoutes.js";

const router = express.Router();

// Admin registration route
router.post("/registerNew", registerNewAdmin);

// Admin login route
router.post("/login", loginAdmin);

// Admin logout route
router.post("/logout", authMiddleware, logoutAdmin);

// Get admin details route
router.get("/getDetails", authMiddleware, getAdminDetails);

//waitimport { teacherModel } from "../Models/teacherModel.js";
router.use("/teacher", teacherRoutes);

export default router;
