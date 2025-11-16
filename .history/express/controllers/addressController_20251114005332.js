import { saveAddress, getAllAddresses } from "../models/addressModel.js";

export const saveAddressInfo = async (req, res) => {
  try {
    const {  user_id,street, suburb, city, postalCode, province } = req.body;

    if ( !user_id,!street || !suburb || !city || !postalCode || !province) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await saveAddress(street, suburb, city, postalCode, province);

    res.status(201).json({
      message: "Address saved successfully",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error saving address:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Optional: get all addresses
export const fetchAddresses = async (req, res) => {
  try {
    const data = await getAllAddresses();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch addresses" });
  }
};
