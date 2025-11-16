import React from "react";
import Ibmcard from "../components/Ibmcard";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { CheckCircle } from "lucide-react";
import Footer from "../components/Footer";

const UploadDocumentsForm = () => {
  const navigate=useNavigate()
  const gotoThankMessage=()=>{
    navigate("/thank-you")
  }
  return (
    <>
     <div className="flex flex-col items-center justify-center py-12 bg-white">
      <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">Self Sign-up</h1>

      {/* 🔵 Shared Progress Bar (step index = 1) */}
      <ProgressBar currentStep={5} /></div>
      <div className="absolute top-[374px] left-[374px]">
    <section className="max-w-[1212px] h-[414px]  flex flex-col">
      <h2 className="w-[358px] h-[28px]  font-bold text-[24px] leading-[28px] font-[Open_Sans]">
        Upload Your Documents
      </h2>
      <p className="font-[open_Sans] text-gray-600 mb-6">
        Upload good quality picture of your ID (jpg, jpeg, png)
      </p>

      <form className="space-y-4 w-full max-w-md">
        {/* ID Upload */}
        <div>
          <button
            type="button"
            className="border border-[#040404] bg-[#f1f1f1] text-blue-600 px-4 py-2 rounded-full font-[open_Sans] font-medium hover:bg-blue-50 transition"
          >
            File Uploaded
          </button>
        </div>

        {/* Proof of Address */}
        <div>
          <label className="block font-[open_Sans] font-medium text-gray-700 mb-1">
            Upload Proof of Address
          </label>
          <input
            type="file"
            className="w-full border border-[#040404] bg-[#f1f1f1]  rounded-full px-3 py-2 font-[open_Sans] file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
          />
        </div>

        {/* Work Permit Upload */}
        <div >
          <label className="block font-[open_Sans] font-medium text-gray-700  mb-1">
            Upload good quality picture of your work permit (optional)
          </label>
          <input
            type="file"
            className="w-full border border-[#040404] bg-[#f1f1f1]  rounded-full px-3 py-2 font-[open_Sans] file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
          />
        </div>

        {/* Work Permit Issue Date */}
        <div className="inline-block mt-6">
          <label className="block font-[open_Sans]font-medium mb-1 text-gray-700">
            Work Permit Issue Date
          </label>
          <input
            type="date"
            className="w-full border border-[#040404] bg-[#f1f1f1]  rounded-md px-3 py-2 font-[open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Work Permit Expiry Date */}
        <div>
          <label className="block font-[open_Sans] font-medium mb-1 text-gray-700">
            Work Permit Expiry Date
          </label>
          <input
            type="date"
            className="w-full border border-[#040404] bg-[#f1f1f1]  rounded-md px-3 py-2 font-[open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button onClick={gotoThankMessage}
            type="submit"
            className="bg-lime-400 border border-lime-600 px-6 py-2 rounded-full font-[open_Sans]font-semibold hover:bg-lime-300 transition-all"
          >
            Submit →
          </button>
        </div>
      </form>
    </section></div>
    <Ibmcard/>
    <div className="absolute top-[1243px]"><Footer/></div>
    </>
  );
};

export default UploadDocumentsForm;
