import express from "express";
import { sendOtp, verifyOtp, resendOtp } from "../controllers/otpController.js";
import db from "../db.js";

const router = express.Router();

router.post("/send", sendOtp);
router.post("/verify", verifyOtp);
router.post("/resend", resendOtp);

// ✅ Fetch all OTP and personal info data
router.get("/all", async (req, res) => {
  try {
    const [otpRows] = await db.query("SELECT * FROM users_otp ORDER BY id DESC");
    const [personalRows] = await db.query("SELECT * FROM personal_info ORDER BY id DESC");

    // Send both as a single JSON response
    res.json({
      otps: otpRows,
      personalInfo: personalRows,
    });
  } catch (err) {
    console.error("❌ Error fetching OTPs:", err);
    res.status(500).json({ message: "Failed to fetch OTP and personal info data" });
  }
});

export default router;
