import db from "../db.js";

export const saveContactEmployment = async ( user_id,email, employer) => {
  const [result] = await db.execute(
    "INSERT INTO contact_employment (email, employer) VALUES (?, ?)",
    [email, employer]
  );
  return result;
};
