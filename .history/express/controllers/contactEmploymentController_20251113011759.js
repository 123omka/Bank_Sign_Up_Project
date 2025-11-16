import { saveContactEmployment } from "../models/contactEmploymentModel.js";

export const handleSaveContactEmployment = async (req, res) => {
  const { email, employer } = req.body;

  if (!employer) {
    return res.status(400).json({ success: false, message: "Employer is required" });
  }

  try {
    await saveContactEmployment(email || null, employer);
    res.json({ success: true, message: "Contact & Employment data saved successfully" });
  } catch (err) {
    console.error("❌ DB Error:", err);
    res.status(500).json({ success: false, message: "Database insert failed" });
  }
};
