import { uploadAdmissionFiles } from "../Middleware/upload.js";
import AdmissionForm from "../Models/admissionFromModel.js";

// Upload Admission Form

export const uploadAdmissionForm = async (req, res) => {
    try {
        const files = req.files?.admissionFromPDF?.map(f => `upload/${f.filename}`);
        if (!files || files.length === 0) {
            return res.status(400).json({
                message: "File Not Found",
                success: false,
            });
        }
        const form = await AdmissionForm.create({
            files,
            uploadBy: req.admin?.name || "Admin",
        });
        return res.status(200).json({
            message: "Admission Form Upload",
            data: form,
            success: true,
        });
    } catch (error) {
        res.status(404).json({
            message: "internal Server Error",
            success: false,
        });
    }
}

// Get All Admission Form
export const getAllAdmissionForm = async (req, res) => {
    try {
        const files = await AdmissionForm.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Get All Admission Form",
            data: files,
            success: true,
        });

    } catch (error) {
        res.status(404).json({
            message: "internal Server Error",
            success: false,
        });
    }
}

// Delete Admission Form
export const deleteAdmissionForm = async (req, res) =>{
    try {
        const { id } = req.params;
        const deleteForm = await AdmissionForm.findByIdAndDelete(id);
        if(!deleteForm){
            return res.status(400).json({
                message: "Admission Form Not found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Admission Form Deleted Successfully",
            success: true,
        });
    } catch (error) {
        res.status(404).json({
            message: "internal Server Error",
            success: false,
        });
    }
}