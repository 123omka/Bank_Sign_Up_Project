import express from "express";
import { savePersonalInfo } from "../controllers/personalController.js";

const router = express.Router();

router.post("/personal-info", savePersonalInfo);

export default router;
