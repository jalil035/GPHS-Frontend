import mongoose from "mongoose";


const admissionFormSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    file: {
        type: [String],
        required: true,
    },
    uploadedBy: {
        type: String,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true, versionKey: false });

const AdmissionForm = mongoose.model("AdmissionForm", admissionFormSchema);

export default AdmissionForm;