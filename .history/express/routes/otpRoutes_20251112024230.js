import express from "express";
import { sendOtp, verifyOtp, resendOtp } from "../controllers/otpController.js";
import db from '../db.js'

const router = express.Router();

router.post("/send", sendOtp);
router.post("/verify", verifyOtp);
router.post("/resend", resendOtp);
router.get("/all", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM otps ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error("❌ Error fetching OTPs:", err);
    res.status(500).json({ message: "Failed to fetch OTP data" });
  }
});

export default router;
