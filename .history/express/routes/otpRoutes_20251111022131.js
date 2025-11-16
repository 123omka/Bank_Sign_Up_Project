import express from "express";
import { sendOtp, verifyOtp } from "./contro";
const router = express.Router();

router.post("/send", sendOtp);
router.post("/verify", verifyOtp);

export default router;
