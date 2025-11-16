import db from "../db.js";

// Save new address info
export const saveAddress = async ( user_id,street, suburb, city, postalCode, province) => {
  const [result] = await db.execute(
    `INSERT INTO address_info ( user_id,street, suburb, city, postalCode, province)
     VALUES (?, ?, ?, ?, ?)`,
    [street, suburb, city, postalCode, province]
  );
  return result;
};

// Optionally: get all saved addresses
export const getAllAddresses = async () => {
  const [rows] = await db.execute("SELECT * FROM address_info ORDER BY id DESC");
  return rows;
};
