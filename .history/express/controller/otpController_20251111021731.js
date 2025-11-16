import twilio from "twilio";
import { saveOtp, getOtpByPhone } from "../models/otpModel.js";
import { generateOtp, getExpiryTime } from "../utils/generateOtp.js";

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendOtp = async (req, res) => {
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ message: "Phone number required" });

  const otp = generateOtp();
  const expiresAt = getExpiryTime();

  try {
    await client.messages.create({
      body: `Your OTP is ${otp}. It expires in 2 minutes.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });

    await saveOtp(phone, otp, expiresAt);
    res.json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

export const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;
  try {
    const record = await getOtpByPhone(phone);
    if (!record) return res.status(400).json({ message: "No OTP found" });

    const now = new Date();
    if (now > new Date(record.expires_at)) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (record.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    res.json({ success: true, message: "OTP verified successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
