import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadDocuments } from "../features/upload/uploadSlice";
import Ibmcard from "../components/Ibmcard";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const UploadDocumentsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    idProof: null,
    addressProof: null,
    workPermit: null,
    issueDate: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("idProof", formData.idProof);
    data.append("addressProof", formData.addressProof);
    data.append("workPermit", formData.workPermit);
    data.append("issueDate", formData.issueDate);
    data.append("expiryDate", formData.expiryDate);

    await dispatch(uploadDocuments(data));
    navigate("/thank-you");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">Self Sign-up</h1>
        <ProgressBar currentStep={5} />
      </div>

      <div className="absolute top-[374px] left-[374px]">
        <section className="max-w-[1212px] flex flex-col">
          <h2 className="text-[24px] font-bold font-[Open_Sans] mb-4">Upload Your Documents</h2>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            <div>
              <label>Upload ID Proof</label>
              <input type="file" name="idProof" onChange={handleChange} />
            </div>
            <div>
              <label>Upload Proof of Address</label>
              <input type="file" name="addressProof" onChange={handleChange} />
            </div>
            <div>
              <label>Upload Work Permit</label>
              <input type="file" name="workPermit" onChange={handleChange} />
            </div>
            <div>
              <label>Work Permit Issue Date</label>
              <input type="date" name="issueDate" onChange={handleChange} />
            </div>
            <div>
              <label>Work Permit Expiry Date</label>
              <input type="date" name="expiryDate" onChange={handleChange} />
            </div>
            <button
              type="submit"
              className="bg-lime-400 border border-lime-600 px-6 py-2 rounded-full font-semibold hover:bg-lime-300 transition-all"
            >
              Submit →
            </button>
          </form>
        </section>
      </div>

      <Ibmcard />
      <div className="absolute top-[1243px]"><Footer /></div>
    </>
  );
};

export default UploadDocumentsForm;
