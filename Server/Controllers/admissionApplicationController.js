import { now } from "mongoose";
import admissionApplicationModel from "../Models/admissionApplicationModel.js";
import studentModel from "../Models/studentModel.js";

export const applyAdmission = async (req, res) => {
  try {
    const imagePaths =
      req.files?.image?.map((f) => `uploads/${f.filename}`) || [];

    const birthCertificatePaths = req.files?.birthCertificateFile
      ? req.files.birthCertificateFile.map((f) => `uploads/${f.filename}`)
      : [];

    const {
      fullName,
      fatherName,
      motherName,
      phoneNumber,
      dob,
      address,
      admissionClass,
      previousClass,
      brcn,
      previousSchool,
      email,
      submissionMethod,
    } = req.body;

    // Validation
    if (
      !fullName ||
      !fatherName ||
      !motherName ||
      !phoneNumber ||
      !dob ||
      !address ||
      !admissionClass ||
      !previousClass ||
      !brcn ||
      !previousSchool ||
      imagePaths.length === 0 ||
      birthCertificatePaths.length === 0
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    function generateNumericId(length = 6) {
      let result = "";
      for (let i = 0; i < length; i++) {
        result += Math.floor(Math.random() * 10); // 0-9 random digit
      }
      return result;
    }

    const applicationId = generateNumericId(6); // 6-digit numeric

    const newApplication = await admissionApplicationModel.create({
      image: imagePaths,
      birthCertificateFile: birthCertificatePaths,
      fullName,
      fatherName,
      motherName,
      phoneNumber,
      dob,
      address,
      admissionClass,
      previousClass,
      brcn,
      previousSchool,
      email,
      submissionMethod,
      applicationId,
      admissionStatus: "pending",
      admissionDate: new Date(),
    });

    return res.status(201).json({
      message: "Application Submitted successfully",
      success: true,
      data: newApplication,
      applicationId,
    });
  } catch (error) {
    console.log("Error occurred while applying for admission:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// Public Search Admission Status

export const searchAdmissionStatus = async (req, res) => {
  try {
    const { applicationId, dob, brcn, admissionClass } = req.query;

    if (!applicationId && !dob && !brcn && !admissionClass) {
      return res.status(400).json({
        message: "Please provide accurate information.",
        success: false,
      });
    }
    const query = {};
    if (applicationId) query.applicationId = applicationId;
    if (admissionClass) query.admissionClass = admissionClass;
    if (dob) query.dob = dob;
    if (brcn) query.brcn = brcn;
    const application = await admissionApplicationModel
      .find(query)
      .select(
        "applicationId, fullName, admissionStatus, admissionClass, classRoll"
      );
    if (application.length) {
      return res.status(404).json({
        message: "No Application Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Application Found",
      success: true,
      data: application,
    });
  } catch (error) {
    console.log("Error occurred while searching admission status:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//Admin Get All Application
export const getAllApplications = async (req, res) => {
  try {
    const applications = await admissionApplicationModel.find();
    return res.status(200).json({
      message: "All Application Retrieved Successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error occurred while getting all applications:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//admin approve application
export const adminApproveApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await admissionApplicationModel.findById(id);

    if (!application) {
      return res.status(404).json({
        message: "Application Not Found",
        success: false,
      });
    }
    if (application.admissionStatus === "Approved") {
      return res.status(404).json({
        message: "Application Already Approved",
        success: false,
      });
    }
    application.admissionStatus = "Approved";
    if (!req.body.classRoll) {
      return res.status(400).json({
        message: "Class Roll Are Required",
        success: false,
      });
    }
    application.classRoll = req.body.classRoll;

    await application.save();

    const newStudent = new studentModel({
      image: application.image,
      fullName: application.fullName,
      fatherName: application.fatherName,
      motherName: application.motherName,
      phoneNumber: application.phoneNumber,
      dob: application.dob,
      address: application.address,
      admissionClass: application.admissionClass,
      previousClass: application.previousClass,
      brcn: application.brcn,
      birthCertificateFile: application.birthCertificateFile,
      previousSchool: application.previousSchool,
      classRoll: application.classRoll,
    });
    await newStudent.save();
    return res.status(200).json({
      message: "Student Status Update & Added Student List Successfully ",
      success: true,
    });
  } catch (error) {
    console.log("Error occurred while approving application:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//Admin Reject Application

export const adminRejectApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await admissionApplicationModel.findById(id);
    if (!application) {
      return res.status(404).json({
        message: "Application Not Found",
        success: false,
      });
    }
    if (application.admissionStatus === "Rejected") {
      return res.status(404).json({
        message: "Application Already Rejected",
        success: false,
      });
    }
    application.admissionStatus = "Rejected";
    await application.save();
    return res.status(200).json({
      message: "Application Status Update Rejected Successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error occurred while rejecting application:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//Admin Delete One by one Application
export const adminDeleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteApplication = await admissionApplicationModel.findByIdAndDelete(
      id
    );
    if (!deleteApplication) {
      return res.status(404).json({
        message: "Application Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Application Deleted Successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error occurred while deleting application:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//Deleted 90Days Old Rejected Application
export const deleteOldApplication = async (req, res) => {
  try {
    const oldData = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
    const result = await admissionApplicationModel.deleteMany({
      admissionStatus: "rejected",
      createdAt: { $lt: oldData },
    });

    return res.status(200).json({
      message: "Rejected Student Deleted Successfully",
      success: true,
      result: result.deletedCount,
    });
  } catch (error) {
    console.log("Error Occurred Deleted Rejected Application");
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
