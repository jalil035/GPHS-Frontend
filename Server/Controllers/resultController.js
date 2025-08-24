import ResultModel from "../Models/resultModel.js";

//Upload Result
export const uploadResult = async (req, res) => {
    try {
        const { className } = req.body;


        const files = req.files?.resultsFiles?.map((file) => ({
            fileName: file.originalname,
            filePath: file.path,
        })) || [];

        if (!className || files.length === 0) {
            return res.status(400).json({
                message: "Class Name or Files Are Required",
                success: false,
            })
        }

        const newResult = await ResultModel.create({
            className,
            files,
        })
        return res.status(201).json({
            message: "Result Uploaded Successfully",
            success: true,
            data: newResult,
        });
    } catch (error) {
        res.status(404).json({
            message: "internal Server Error",
            success: false,
        });
    }
}

//Get All Results
export const getAllResults = async (req, res) => {
    try {
        const results = await ResultModel.find();
        if (!results || results.length === 0) {
            return res.status(404).json({
                message: "Result Not Found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Result Founded",
            success: true,
            data: results,
        });
    } catch (error) {
        res.status(404).json({
            message: "internal Server Error",
            success: false,
        });
    }
}

//Delete Results
export const deleteResult = async (req, res) => {
    try {
        const { id } = req.params;
        const results = await ResultModel.findByIdAndDelete(id);
        if (!results) {
            return res.status(404).json({
                message: "Result Not Found",
                success: false,
            });
        }
        return res.status(200).json({
            message: "Results Deleted Successfully",
            success: true,
        });
    } catch (error) {
        res.status(404).json({
            message: "internal Server Error",
            success: false,
        });
    }
}