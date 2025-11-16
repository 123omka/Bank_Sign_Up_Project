import db from "../db.js";

export const saveUploadedDocuments = async ({
  idProof,
  addressProof,
  workPermit,
  issueDate,
  expiryDate,
}) => {
  const sql = `
    INSERT INTO documents (id_proof, address_proof, work_permit, issue_date, expiry_date)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    idProof,
    addressProof,
    workPermit,
    issueDate,
    expiryDate,
  ]);
  return result;
};
