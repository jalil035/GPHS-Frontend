import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { PORT, DATABASE, MAX_JSON_SIZE, URL_ENCODER } from "./Config/config.js";
import path from "path";
import {fileURLToPath} from "url";
import adminRoutes from "./Routes/adminRoutes.js";
import teacherRoutes from "./Routes/teacherRoutes.js";
import admissionApplication from "./Routes/admissionApplicationRoutes.js";
import studentRoutes from "./Routes/studentRoutes.js";
import admissionFormRoutes from "./Routes/admissionFormRoutes.js";
import resultRouts from "./Routes/resultRoutes.js";
import noticeBoard from "./Routes/noticeBoardRoutes.js";

const app = express();
app.use(cookieParser());
// Body parser config
app.use(express.json({ limit: MAX_JSON_SIZE }));
if (URL_ENCODER) {
  app.use(express.urlencoded({ extended: true, limit: MAX_JSON_SIZE }));
}
// Database connection
mongoose
  .connect(DATABASE)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Connection Failed:", err));

// admin routes
app.use("/api/admin", adminRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/admission", admissionApplication);
app.use("/api/student", studentRoutes);
app.use("/api/admissionForm", admissionFormRoutes);
app.use("/api/result", resultRouts);
app.use("/api/noticeBoard", noticeBoard);

// Start the server only after successful database connection
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/Uploads", express.static(path.join(__dirname, "Uploads")));
