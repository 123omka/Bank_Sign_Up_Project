import express from "express";
import { saveAddressInfo, fetchAddresses } from "../controllers/addressController.js";

const router = express.Router();

router.post("/save", saveAddressInfo);
router.get("/all", fetchAddresses);

export default router;
