import multer from "multer";
import path from "path";

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// File type validation
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|pdf|xlsx|xls/;
  const extName = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extName && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Only jpeg, jpg, png, gif, pdf, xls, xlsx files are allowed"));
  }
};

export const upload = multer({ storage, fileFilter });

// ✅ Single File Upload (Reusable)
export const uploadSingleImage = upload.single("image");

// Multi-field upload config (reusable)
export const uploadFiles = (fields) => upload.fields(fields);

// Example for Admission Form
export const uploadAdmissionFiles = uploadFiles([
  { name: "image", maxCount: 1 }, // max 5 images
  { name: "birthCertificateFile", maxCount: 1 },
  { name: "admissionFormPDF", maxCount: 5 },
]);

// Example for Results (class-wise, multi-file)
export const uploadResultFiles = uploadFiles([
  { name: "resultsFiles", maxCount: 5 },
]);

// Example for Notice Board
export const uploadNoticeFiles = uploadFiles([
  { name: "noticeFiles", maxCount: 5 },
]);
