import express from "express";
import { saveContactEmploymentData } from "../controllers/contactEmploymentController.js";

const router = express.Router();

router.post("/save", saveContactEmploymentData);

export default router;
