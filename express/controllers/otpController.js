import twilio from "twilio";
import dotenv from "dotenv";
import db from "../db.js";
import { saveOtp, getOtpByPhone} from "../models/otpModel.js";
import { generateOtp, getExpiryTime } from "../utils/generateOtp.js";

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// ✅ Send OTP
export const sendOtp = async (req, res) => {
  const { phone } = req.body;
  if (!phone)
    return res.status(400).json({ success: false, message: "Phone number required" });

  const otp = generateOtp();
  const expiresAt = getExpiryTime();

  try {
    await client.messages.create({
      body: `Your verification code is ${otp}. It will expire in 2 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    await saveOtp(phone, otp, expiresAt);
    res.json({ success: true, message: "OTP sent successfully", expiresAt });
  } catch (err) {
    console.error("Twilio/DB error:", err);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

// ✅ Verify OTP
export const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp)
    return res.status(400).json({ success: false, message: "Phone and OTP required" });

  try {
    // 1️⃣ Get OTP record
    const record = await getOtpByPhone(phone);
    if (!record)
      return res.status(400).json({ success: false, message: "No OTP found for this phone" });

    const now = new Date();
    if (now > new Date(record.expires_at)) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (record.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    // 2️⃣ Check if user exists or create new
    const [rows] = await db.execute("SELECT * FROM users WHERE phone = ?", [phone]);

    let user_id;
    if (rows.length > 0) {
      user_id = rows[0].id;
    } else {
      const [result] = await db.execute("INSERT INTO users (phone) VALUES (?)", [phone]);
      user_id = result.insertId;
    }

    // 3️⃣ Delete OTP after successful verification
    // await deleteOtp(phone);

    // 4️⃣ Send response
    res.json({
      success: true,
      message: "OTP verified successfully",
      user_id,
    });
  } catch (err) {
    console.error("Error verifying OTP:", err);
    res.status(500).json({
      success: false,
      message: "Server error while verifying OTP",
      error: err.message,
    });
  }
};

// ✅ Resend OTP
export const resendOtp = async (req, res) => {
  await sendOtp(req, res);
};
