import React from "react";
import Ibmcard from "../components/Ibmcard";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
const AddressP = () => {
  const navigate=useNavigate()
  const gotoContactemplo=()=>{
    navigate("/contact-employment")
  }
  return (
    <>
    <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">Self Sign-up</h1>

      {/* 🔵 Shared Progress Bar (step index = 1) */}
      <ProgressBar currentStep={3} /></div>
      <div className="absolute top-[374px] left-[374px]">
    <section className="  max-w-[1212px] h-[414px]  flex flex-col">
      <h2 className="w-[358px] h-[28px]  font-bold text-[24px] leading-[28px] font-[Open_Sans]">
        Where Do You Live?
      </h2>

      <form className="space-y-4 w-full max-w-md">
        {/* Street Name and Number */}
        <div>
          <label className="block font-[Open_Sans] font-medium mb-1 mt-[10px] text-gray-700">
            Street Name and Number
          </label>
          <input
            type="text"
            placeholder="enter street name and number"
            className="w-full border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[Open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Suburb */}
        <div>
          <label className="block font-[open_Sans] font-medium mb-1 text-gray-700">
            Suburb
          </label>
          <input
            type="text"
            placeholder="enter suburb"
            className="w-full border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* City */}
        <div>
          <label className="block font-[open_Sans] font-medium mb-1 text-gray-700">
            City
          </label>
          <input
            type="text"
            placeholder="city"
            className="w-full border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Postal Code */}
        <div>
          <label className="block font-[open_Sans] font-medium mb-1 text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            placeholder="0000"
            className="w-full border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Province Dropdown */}
        <div>
          <label className="block font-[open_Sans] font-medium mb-1 text-gray-700">
            Province
          </label>
          <select className="w-full h-[50px] border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>select</option>
            <option>Eastern Cape</option>
            <option>Free State</option>
            <option>Gauteng</option>
            <option>KwaZulu-Natal</option>
            <option>Limpopo</option>
            <option>Mpumalanga</option>
            <option>Northern Cape</option>
            <option>North West</option>
            <option>Western Cape</option>
          </select>
        </div>

        {/* Next Button */}
        <div className="pt-2">
          <button onClick={gotoContactemplo}
            type="submit"
            className="bg-lime-400 border border-lime-600 px-6 py-2 rounded-full font-[open_Sans]font-semibold hover:bg-lime-300 transition-all"
          >
            Next →
          </button>
        </div>
      </form>
    </section></div>
    <Ibmcard/>
    <div className="absolute top-[1040px]"><Footer/></div>
    </>
  );
};

export default AddressPage;
