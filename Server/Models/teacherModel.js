import mongoose from "mongoose";

export const teacherSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    designation: {
      type: String,
      required: true,
    },
    subjects: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    joiningDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, versionKey: false }
);

const teacherModel = mongoose.model("Teacher", teacherSchema);
export default teacherModel;
