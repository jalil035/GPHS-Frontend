import mongoose from "mongoose";

const noticeBoardSchema = new mongoose.Schema({
    slNo: {
        type: Number,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    noticeType: {
        type: String,
        enum: ["board", "marquee"],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    files: [
        {
            fileName: { type: String, required: true },
            filePath: { type: String, required: true },
        },
    ],
    uploadBy: {
        type: String,
    }
}, { timestamps: true, versionKey: false })

const NoticeBoard = mongoose.model("NoticeBoard", noticeBoardSchema);

export default NoticeBoard;