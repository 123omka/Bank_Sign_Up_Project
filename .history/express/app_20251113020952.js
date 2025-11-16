import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import otpRoutes from "./routes/otpRoutes.js";
import personalRoutes from "./routes/personalRoutes.js";
import addressRoutes from "./routes/addressRoutes.js";
import contactEmploymentRoutes from "./routes/contactEmploymentRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import db from './db.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/otp", otpRoutes);
app.use("/api/users", personalRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/contact-employment", contactEmploymentRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/", async (req, res) => {
  try {
    const [otpRows] = await db.query("SELECT * FROM users_otp ORDER BY id DESC");
    const [personalRows] = await db.query("SELECT * FROM personal_info ORDER BY id DESC");
    const [addressRows]= await db.query("SELECT*FROM address_info  ")
    const [contactEmplpyRow]= await db.query("SELECT*FROM contact_employment ")
    const[documentsRow]=await db.query("SELECT*FROM documents  ")
    // Send both as a single JSON response
    res.json({
      otps: otpRows,
      personalInfo: personalRows,
      addressRo
    });
  } catch (err) {
    console.error("❌ Error fetching OTPs:", err);
    res.status(500).json({ message: "Failed to fetch OTP and personal info data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
