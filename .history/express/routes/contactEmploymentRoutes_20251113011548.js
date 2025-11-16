import express from "express";
import { saveContactEmployment } from "../controllers/contactEmploymentController.js";

const router = express.Router();
router.post("/save", saveContactEmployment);

export default router;
