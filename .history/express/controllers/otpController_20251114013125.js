import twilio from "twilio";
import dotenv from "dotenv";
import db from '../'
import { saveOtp, getOtpByPhone } from "../models/otpModel.js";
import { generateOtp, getExpiryTime } from "../utils/generateOtp.js";

dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// POST /api/otp/send
export const sendOtp = async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ success: false, message: "Phone number required" });

  const otp = generateOtp();
  const expiresAt = getExpiryTime();

  try {
    await client.messages.create({
      body: `Your verification code is ${otp}. It will expire in 2 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone
    });

    await saveOtp(phone, otp, expiresAt);
    res.json({ success: true, message: "OTP sent", expiresAt });
  } catch (err) {
    console.error("Twilio/DB error:", err);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

// POST /api/otp/verify
export const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;
  if (!phone || !otp) return res.status(400).json({ success: false, message: "Phone and OTP required" });

  try {
    const record = await getOtpByPhone(phone);
    if (!record) return res.status(400).json({ success: false, message: "No OTP found for this phone" });

    const now = new Date();
    if (now > new Date(record.expires_at)) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (record.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    res.json({ success: true, message: "OTP verified" });
  } catch (err) {
    console.error("Verify error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

 const [rows] = await db.execute(
      "SELECT * FROM users WHERE phone = ?",
      [phone]
    );

    let user_id;
    if (rows.length > 0) {
      user_id = rows[0].id;
    } else {
      const [result] = await db.execute(
        "INSERT INTO users (phone) VALUES (?)",
        [phone]
      );
      user_id = result.insertId;
    }

   await deleteOtp(phone);
try {
    res.json({
      success: true,
      message: "OTP verified successfully",
      user_id,
    });
  }catch (err) {
    console.error("Error verifying OTP:", err);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: err.message });
  }
   

// Optional: POST /api/otp/resend (calls sendOtp logic)
export const resendOtp = async (req, res) => {
  // reuse sendOtp
  await sendOtp(req, res);
};
