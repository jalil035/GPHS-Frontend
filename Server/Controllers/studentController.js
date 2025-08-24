import studentModel from "../Models/studentModel.js";
import fs from "fs";
import path from "path";

//Get All Students
export const getAllStudent = async (req, res) => {
  try {
    const students = await studentModel.find();

    if (!students) {
      return res.status(404).json({
        message: "Student Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Students fetched Successfully",
      success: true,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Get Students By Class
export const getStudentsByClass = async (req, res) => {
  try {
    const { admissionClass } = req.params;
    const students = await studentModel.find({ admissionClass });
    return res.status(200).json({
      message: `Student in Class ${admissionClass} Showing`,
      success: true,
      student: students,
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Get Single Student By Id
export const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const students = await studentModel.findById(id);
    if (!students) {
      return res.status(404).json({
        message: "Student Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Student Retrieved Successfully",
      success: true,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Add New Student Manualy By Admin
export const addNewStudent = async (req, res) => {
  try {
    const imagePaths =
      req.files?.image?.map((f) => `uploads/${f.filename}`) || [];

    const birthCertificatePaths = req.files?.birthCertificateFile
      ? req.files.birthCertificateFile.map((f) => `uploads/${f.filename}`)
      : [];

    const { fullName,
      fatherName,
      motherName,
      phoneNumber,
      dob,
      address,
      admissionClass,
      previousClass,
      brcn,
      previousSchool } = req.body;

    //validation
    if (!fullName ||
      !fatherName ||
      !motherName ||
      !phoneNumber ||
      !dob ||
      !address ||
      !admissionClass ||
      !previousClass ||
      !brcn ||
      !previousSchool) {
      return res.status(404).json({
        message: "All Fields Are Required",
        success: false,
      });
    }

    const newStudent = await studentModel.create({
      image: imagePath,
      birthCertificateFile: birthCertificatePath,
      fullName,
      fatherName,
      motherName,
      phoneNumber,
      dob,
      address,
      admissionClass,
      previousClass,
      classRoll,
      brcn,
      previousSchool,
      email,
      admissionStatus: "Approved",
      admissionDate: new Date(),
    });
    return res.status(201).json({
      message: "Student Added Successfully",
      success: true,
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

//Update Students By Id
export const updateStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findById(id);
    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
        success: false,
      });
    }

    const imagePaths =
      req.files?.image?.length > 0
        ? req.files.image.map((f) => `uploads/${f.filename}`)
        : student.image; // keep previous if not uploaded

    const birthCertificatePaths =
      req.files?.birthCertificateFile?.length > 0
        ? req.files.birthCertificateFile.map((f) => `uploads/${f.filename}`)
        : student.birthCertificateFile; // keep previous if not uploaded

    const updatedField = {
      image: imagePaths,
      birthCertificateFile: birthCertificatePaths,
      fullName: req.body.fullName || student.fullName,
      fatherName: req.body.fatherName || student.fatherName,
      motherName: req.body.motherName || student.motherName,
      phoneNumber: req.body.phoneNumber || student.phoneNumber,
      dob: req.body.dob || student.dob,
      address: req.body.address || student.address,
      admissionClass: req.body.admissionClass || student.admissionClass,
      previousClass: req.body.previousClass || student.previousClass,
      classRoll: req.body.classRoll || student.classRoll,
      brcn: req.body.brcn || student.brcn,
      previousSchool: req.body.previousSchool || student.previousSchool,
    };
    Object.assign(student, updatedField);
    await student.save();
    return res.status(200).json({
      message: "Student Updated Successfully",
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};


//Delete Student By Id
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json({
        message: "Student Not Found",
        success: false,
      });
    }
    if (student.image) {
      fs.unlink(path.join("uploads", path.basename(student.image)), (err) => {
        if (err) console.log("Failed to delete student image:", err);
      });
    }
    if (student.birthCertificateFile) {
      fs.unlink(
        path.join("uploads", path.basename(student.birthCertificateFile)),
        (err) => {
          if (err) console.log("Failed to delete birth certificate:", err);
        }
      );
    }
    return res.status(200).json({
      message: "Student Deleted Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });

  }
};


