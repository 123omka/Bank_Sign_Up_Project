import express from "express";
import { saveAddressInfo } from "../controller/addressController.js";

const router = express.Router();

router.post("/save", saveAddressInfo);

export default router;
