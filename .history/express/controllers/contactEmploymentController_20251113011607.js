import db from "../config/db.js"; // your mysql2 pool/connection

export const saveContactEmployment = async (req, res) => {
  const { email, employer } = req.body;
  try {
    await db.execute(
      "INSERT INTO contact_employment (email, employer) VALUES (?, ?)",
      [email, employer]
    );
    res.json({ message: "Contact & Employment data saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database insert failed" });
  }
};
