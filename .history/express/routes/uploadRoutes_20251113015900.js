import express from "express";
import multer from "multer";
import { uploadDocuments } from "../controllers/uploadController.js";

const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Route
router.post(
  "/documents",
  upload.fields([
    { name: "idProof", maxCount: 1 },
    { name: "addressProof", maxCount: 1 },
    { name: "workPermit", maxCount: 1 },
  ]),
  uploadDocuments
);

export default router;
