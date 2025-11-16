import { savePersonalInfoToDB } from "../models/personalModel.js";

export const savePersonalInfo = async (req, res) => {
  try {
    const data = req.body;

    // Basic validation
    if (
      !user_
      !data.firstName ||
      !data.lastName ||
      !data.dob ||
      !data.gender ||
      !data.idType ||
      !data.idNumber ||
      !data.country
    ) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    const id = await savePersonalInfoToDB(data);
    res.json({ success: true, id, message: "Personal info saved successfully" });
  } catch (error) {
    console.error("Error saving personal info:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
