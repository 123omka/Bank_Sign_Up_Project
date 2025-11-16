import express from "express";
import { handleSaveContactEmployment } from "../controllers/contactEmploymentController.js";

const router = express.Router();

// POST /api/contact-employment/save
router.post("/save", handleSaveContactEmployment);

export default router;
