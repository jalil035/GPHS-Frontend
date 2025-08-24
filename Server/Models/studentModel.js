import mongoose from "mongoose";

export const studentSchema = new mongoose.Schema({
  image: {
    type: [String], // Array of string paths
    required: true,
  },
  birthCertificateFile: {
    type: [String], // Array of string paths
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  admissionClass: {
    type: String,
    enum: [
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
    ],
    required: true,
  },
  previousClass: {
    type: String,
    required: true,
  },
  classRoll: {
    type: Number,
  },
  brcn: {
    type: Number,
    required: true,
  },
  admissionStatus: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
    required: true,
  },
  applicationId: {
    type: String,
    unique: true,
    required: true,
  },
  admissionDate: {
    type: Date,
    default: Date.now,
  },
  previousSchool: {
    type: String,
    required: true,
  },
});

const studentModel = mongoose.model("Student", studentSchema);
export default studentModel;
