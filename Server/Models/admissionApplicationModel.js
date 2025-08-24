import mongoose from "mongoose";

export const admissionApplicationSchema = new mongoose.Schema(
  {
    image: {
      type: [String], // Array of string paths
      required: true,
    },
    birthCertificateFile: {
      type: [String], // Array of string paths
      required: true,
    },
    fullName: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
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
    previousClass: { type: String, required: true },
    brcn: { type: Number, required: true },
    applicationId: {
      type: String,
      unique: true,
      required: true,
      default: () =>
        "APP-" +
        Date.now().toString(36).toUpperCase() +
        "-" +
        Math.random().toString(36).substring(2, 7).toUpperCase(),
    },
    admissionStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"], // সব lowercase
      default: "pending",
    },
    previousSchool: { type: String, required: true },
    adminNote: { type: String },
    submissionMethod: {
      type: String,
      enum: ["online", "offline"],
      default: "online",
    },
    email: { type: String },
    admissionDate: { type: Date, default: Date.now },
    classRoll: { type: String }, // approve করলে যোগ হবে
  },
  { timestamps: true, versionKey: false }
);

admissionApplicationSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 60 * 60 * 24 * 90,
    partialFilterExpression: { admissionStatus: "rejected" },
  } // 90 days
);

const admissionApplicationModel = mongoose.model(
  "AdmissionApplication",
  admissionApplicationSchema
);

export default admissionApplicationModel;
