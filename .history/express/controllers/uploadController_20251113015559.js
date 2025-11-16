import { saveUploadData } from "../models/uploadModel.js";

export const uploadDocuments = async (req, res) => {
  try {
    const { issueDate, expiryDate } = req.body;

    const idProof = req.files["idProof"]?.[0]?.filename || null;
    const addressProof = req.files["addressProof"]?.[0]?.filename || null;
    const workPermit = req.files["workPermit"]?.[0]?.filename || null;

    await saveUploadData({ idProof, addressProof, workPermit, issueDate, expiryDate });

    res.status(200).json({ message: "Documents uploaded successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
