import db from "../db.js";

export const saveAddressInfo = async (req, res) => {
  try {
    const { street, suburb, city, postalCode, province } = req.body;

    if (!street || !suburb || !city || !postalCode || !province) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [result] = await db.execute(
      `INSERT INTO address_info (street, suburb, city, postalCode, province)
       VALUES (?, ?, ?, ?, ?)`,
      [street, suburb, city, postalCode, province]
    );

    res.status(201).json({ message: "Address saved successfully", id: result.insertId });
  } catch (error) {
    console.error("Error saving address:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
