import NoticeBoard from "../Models/noticeBoardModel.js";

//Upload Notice Board
export const uploadNoticeBoard = async (req, res) => {
  try {
    const { slNo, subject, noticeType } = req.body;

    // access files
    const files = req.files?.noticeFiles?.map((file) => ({
      fileName: file.originalname,
      filePath: file.path,
    })) || [];

    if (!subject || files.length === 0 || !noticeType) {
      return res.status(400).json({
        message: "Subject, Notice Type or Files Are Required",
        success: false,
      });
    }

    if (!["board", "marquee"].includes(noticeType)) {
      return res.status(400).json({
        message: "Notice Type are Required",
        success: false,
      });
    }

    const newNotice = await NoticeBoard.create({
      slNo,
      subject,
      noticeType,
      files,
    });

    res.status(201).json({
      message: "Notice Upload Successfully",
      success: true,
      data: newNotice,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
      error: error.message,
    });
  }
};

//Get All Notice Board
export const getAllNoticeBoard = async (req, res) => {
  try {
    const { noticeType } = req.query;

    let query = {}
    if (noticeType && ["board", "marquee"].includes(noticeType)) {
      query.noticeType = noticeType
    }
    const notice = await NoticeBoard.find(query).sort({ createdAt: -1 });
    if (!notice || notice.length === 0) {
      return res.status(404).json({
        message: "Notice Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Notice Found",
      success: true,
      data: notice,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal Server Error",
      success: false,
    });
  }
}

//Delete Notice By Id
export const deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNotice = await NoticeBoard.findByIdAndDelete(id);
    if (!deleteNotice) {
      return res.status(404).json({
        message: "Notice Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Notice Deleted Successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal Server Error",
      success: false,
    });
  }
}