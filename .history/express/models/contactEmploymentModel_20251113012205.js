import db from "../db.js";

// 🔹 Function to save contact & employment data
export const saveContactEmployment = async (email, employer) => {
  try {
    const [result] = await db.execute(
      "INSERT INTO contact_employment (email, employer) VALUES (?, ?)",
      [email, employer]
    );
    return result;
  } catch (err) {
    console.error("Error saving contact & employment:", err);
    throw err;
  }
};
