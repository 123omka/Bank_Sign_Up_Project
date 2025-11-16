import db from "..//db.js";

export const saveUploadData = async (data) => {
  const { idProof, addressProof, workPermit, issueDate, expiryDate } = data;

  const [result] = await db.execute(
    `INSERT INTO documents (id_proof, address_proof, work_permit, issue_date, expiry_date)
     VALUES (?, ?, ?, ?, ?)`,
    [idProof, addressProof, workPermit, issueDate, expiryDate]
  );

  return result;
};
