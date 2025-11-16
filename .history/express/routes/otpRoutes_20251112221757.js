import express from "express";
import { sendOtp, verifyOtp, resendOtp } from "../controllers/otpController.js";
import db from '../db.js'

const router = express.Router();

router.post("/send", sendOtp);
router.post("/verify", verifyOtp);
router.post("/resend", resendOtp);
router.get("/all", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users_otp ORDER BY id DESC");
    const [rows2] = await db.query("SELECT * FROM peronal_info ORDER BY id DESC");
    res.json(rows,rows2);
  } catch (err) {
    console.error("❌ Error fetching OTPs:", err);
    res.status(500).json({ message: "Failed to fetch OTP data" });
  }
});

export default router;
