import db from "../db.js";

export const saveOtp = async (phone, otp, expiresAt) => {
  try {
    await db.execute(
      "INSERT INTO users_otp (phone, otp, expires_at) VALUES (?, ?, ?)",
      [phone, otp, expiresAt]
    );
  } catch (err) {
    console.error("Error saving OTP:", err);
    throw err;
  }
};

export const getOtpByPhone = async (phone) => {
  try {
    const [rows] = await db.execute(
      "SELECT * FROM users_otp WHERE phone=? ORDER BY created_at DESC LIMIT 1",
      [phone]
    );
    return rows[0];
  } catch (err) {
    console.error("Error getting OTP:", err);
    throw err;
  }
};

export const deleteOtp = async (phone) => {
  await db.execute("DELETE FROM users_otp WHERE phone = ?", [phone]);
};