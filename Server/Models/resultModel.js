import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    className: {
        type: String,
        enum: [
            "One", "Two", "Three", "Four", "Five",
            "Six", "Seven", "Eight", "Nine", "Ten"
        ],
        required: true,
    },
    files: [
        {
            fileName: { type: String, required: true },
            filePath: { type: String, required: true },
        },
    ],
    uploadBy: {
        type: String,
    },
    uploadDate: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true, versionKey: false });

const ResultModel = mongoose.model("Result", resultSchema);

export default ResultModel;