import teacherModel from "../Models/teacherModel.js";

export const addNewTeacher = async (req, res) => {
  try {
    const imagePath = req.file ? `uploads/${req.file.filename}` : null;
    const { fullName, phoneNumber, designation, subjects, education } = req.body;

    if (
      !fullName ||
      !phoneNumber ||
      !designation ||
      !subjects ||
      !education ||
      !imagePath
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newTeacher = await teacherModel.create({
      fullName,
      phoneNumber,
      designation,
      subjects,
      education,
      image: imagePath,
    });

    return res.status(201).json({
      message: "Teacher added successfully",
      newTeacher,
      success: true,
    });
  } catch (error) {
    console.error("Error in addNewTeacher:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};




// Get all teachers
export const getAllTeachers = async (req, res) => {
  try {
    const teacher = await teacherModel.find({});
    return res.status(200).json({
      message: "Teachers fetched successfully",
      success: true,
      data: teacher,
    });
  } catch (error) {
    console.error("Error in getAllTeachers:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// Get Teacher by ID
export const getTeacherById = async (req, res) => {
  try {
    const teacher = await teacherModel.findById(req.params.id);
    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Teacher fetched successfully",
      success: true,
      data: teacher,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// Update Teacher by ID
export const updateTeacherById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the teacher exists
    const teacher = await teacherModel.findById(id);
    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
        success: false,
      });
    }
    // If an image is uploaded, update the image path
    const imagePath = req.file
      ? `uploads/${req.file.filename}`
      : teacher.image;

    // Update the teacher's details
    const updateFields = req.body;
    const updatedTeacher = await teacherModel.findByIdAndUpdate(
      id,
      { $set: { ...updateFields, image: imagePath } },
      { new: true }
    );
    return res.status(200).json({
      message: "Teacher Updated SuccessFully",
      updatedTeacher,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

// Delete Teacher by ID
export const deleteTeacherById = async (req, res) => {
  try {
    const deletedTeacher = await teacherModel.findByIdAndDelete(req.params.id);

    if (!deletedTeacher) {
      return res.status(404).json({
        message: "Teacher Not Found and Cannot be Deleted",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Teacher Deleted Successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};