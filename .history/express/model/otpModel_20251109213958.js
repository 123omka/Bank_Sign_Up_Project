import db from "../db.js";

export const saveOtp = async (phone, otp, expiresAt) => {
  await db.execute(
    "INSERT INTO users_otp (phone, otp, created_at, expires_at) VALUES (?, ?, NOW(), ?)",
    [phone, otp, expiresAt]
  );
};

export const getOtpByPhone = async (phone) => {
  const [rows] = await db.execute(
    "SELECT * FROM users_otp WHERE phone=? ORDER BY created_at DESC LIMIT 1",
    [phone]
  );
  return rows[0];
};
