import db from "../db.js";

export const savePersonalInfoToDB = async (data) => {
  const { user_id,firstName, lastName, dob, gender, idType, idNumber, country } = data;
  const [result] = await db.execute(
    `INSERT INTO personal_info 
    (first_name, last_name, dob, gender, id_type, id_number, country) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [firstName, lastName, dob, gender, idType, idNumber, country]
  );
  return result.insertId;
};
