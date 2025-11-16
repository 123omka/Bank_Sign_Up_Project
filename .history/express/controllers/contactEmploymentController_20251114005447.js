import { saveContactEmployment } from "../models/contactEmploymentModel.js";

export const saveContactEmploymentData = async (req, res) => {
  try {
    const { user_id email, employer } = req.body;

    if (!employer || employer.trim() === "") {
      return res.status(400).json({ message: "Employer is required" });
    }

    await saveContactEmployment(email || null, employer);
    res.status(200).json({ message: "Contact & Employment details saved successfully" });
  } catch (error) {
    console.error("Error saving contact & employment:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
