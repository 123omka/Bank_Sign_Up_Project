import React, { useState } from "react";
import Ibmcard from "../components/Ibmcard";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { uploadDocuments } from "../features/documents/documentSlice";

const UploadDocumentsForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, success, message } = useSelector((state) => state.documents);

  const [idProof, setIdProof] = useState(null);
  const [addressProof, setAddressProof] = useState(null);
  const [workPermit, setWorkPermit] = useState(null);
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (idProof) formData.append("idProof", idProof);
    if (addressProof) formData.append("addressProof", addressProof);
    if (workPermit) formData.append("workPermit", workPermit);
    formData.append("issueDate", issueDate);
    formData.append("expiryDate", expiryDate);

    const result = await dispatch(uploadDocuments(formData));

    if (uploadDocuments.fulfilled.match(result)) {
      navigate("/thank-yo");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">
          Self Sign-up
        </h1>
        <ProgressBar currentStep={5} />
      </div>

      <div className="absolute top-[374px] left-[374px]">
        <section className="max-w-[1212px] h-[414px] flex flex-col">
          <h2 className="w-[358px] h-[28px] font-bold text-[24px] leading-[28px] font-[Open_Sans]">
            Upload Your Documents
          </h2>
          <p className="font-[open_Sans] text-gray-600 mb-6">
            Upload good quality picture of your ID (jpg, jpeg, png)
          </p>

          <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
            {/* ID Upload */}
            <div>
              <label className="block font-[open_Sans] font-medium text-gray-700 mb-1">
                Upload ID Proof
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setIdProof(e.target.files[0])}
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-full px-3 py-2 font-[open_Sans] file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
              />
            </div>

            {/* Proof of Address */}
            <div>
              <label className="block font-[open_Sans] font-medium text-gray-700 mb-1">
                Upload Proof of Address
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setAddressProof(e.target.files[0])}
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-full px-3 py-2 font-[open_Sans] file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
              />
            </div>

            {/* Work Permit Upload */}
            <div>
              <label className="block font-[open_Sans] font-medium text-gray-700 mb-1">
                Upload good quality picture of your work permit (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setWorkPermit(e.target.files[0])}
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-full px-3 py-2 font-[open_Sans] file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
              />
            </div>

            {/* Work Permit Issue Date */}
            <div className="inline-block mt-6">
              <label className="block font-[open_Sans] font-medium mb-1 text-gray-700">
                Work Permit Issue Date
              </label>
              <input
                type="date"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Work Permit Expiry Date */}
            <div>
              <label className="block font-[open_Sans] font-medium mb-1 text-gray-700">
                Work Permit Expiry Date
              </label>
              <input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Status Messages */}
            {loading && <p className="text-blue-500 font-[open_Sans]">Uploading...</p>}
            {error && <p className="text-red-600 font-[open_Sans]">{error}</p>}
            {success && (
              <p className="text-green-600 font-[open_Sans]">{message || "Uploaded successfully"}</p>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-lime-400 border border-lime-600 px-6 py-2 rounded-full font-[open_Sans] font-semibold hover:bg-lime-300 transition-all"
              >
                {loading ? "Uploading..." : "Submit →"}
              </button>
            </div>
          </form>
        </section>
      </div>

      <Ibmcard />
      <div className="absolute top-[1243px]">
        <Footer />
      </div>
    </>
  );
};

export default UploadDocumentsForm;
