import React from "react";
import Ibmcard from "../components/Ibmcard";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { CheckCircle } from "lucide-react";
import Footer from "../components/Footer";

const PersonalInfo = () => {
  const navigate=useNavigate()
  const gotoAddressForm=()=>{
    navigate("/address-form")
  }
  const countries = [
    "Select Country",
    "South Africa",
    "Namibia",
    "Botswana",
    "Zimbabwe",
    "Mozambique",
    "Lesotho",
    "Eswatini",
    "Zambia",
    "Malawi",
    "Nigeria",
    "Kenya",
    "Uganda",
  ];

  return (
    <>
    <div className="flex flex-col  items-center justify-center  pt-6 bg-white">
      <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">Self Sign-up</h1>

       
      <ProgressBar currentStep={2} /></div> 
      <div className="absolute top-[374px] left-[374px]">
  <section className="max-w-[1212px] h-[414px] mx-auto mt-[1px] tex-[open_Sans] flex flex-col ">

     
      <h2 className="w-[358px] h-[28px]  font-bold text-[24px] leading-[28px] font-[Open_Sans]">
        Tell Us About You
      </h2>

      <form className="space-y-4 w-full max-w-md ">
        {/* First Name */}
        <div>
          <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
            First name
          </label>
          <input
            type="text"
            placeholder="eg:omkar"
            className="w-full border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
            Last name
          </label>
          <input
            type="text"
            placeholder="eg:khandekar"
            className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Date of Birth (Dropdowns) */}
        <div>
          <label className="block font-[Open_Sans]  font-medium mb-1 text-gray-700">
            Date of birth
          </label>
          <div className="flex space-x-3">
            {/* Day */}
            <select className="w-1/3 h-[50px] border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[Open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* Month */}
            <select className="w-1/3 border  border-[#040404] bg-[#f1f1f1]  rounded-md px-3 py-2 font-[Open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Month</option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>

            {/* Year */}
            <select className="w-1/3 border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[Open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="">Year</option>
              {Array.from({ length: 100 }, (_, i) => 2025 - i).map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
            Gender
          </label>
          <select className="w-full h-[50px] border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[Open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* ID Type */}
        <div>
          <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
            ID Type
          </label>
          <select className="w-full h-[50px] border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[Open_Sans]focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Select</option>
            <option>SA ID</option>
            <option>Passport</option>
            <option>Asylum / Refugee Document</option>
          </select>
        </div>

        {/* ID Number */}
        <div>
          <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
            ID / Passport / Asylum document number
          </label>
          <input
            type="text"
            placeholder="eg:2736gf3636"
            className="w-full border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[Open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Country of Issue (Dropdown) */}
        <div>
          <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
            Country of issue
          </label>
          <select className="w-full h-[50px] border  border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[Open_Sans]focus:outline-none focus:ring-2 focus:ring-blue-400">
            {countries.map((country) => (
              <option key={country}>{country}</option>
            ))}
          </select>
        </div>

        {/* Next Button */}
        <div className="pt-2">
          <button onClick={gotoAddressForm}
            type="submit"
            className="bg-lime-400 border border-lime-600 px-6 py-2 rounded-full font-[Open_Sans] font-semibold hover:bg-lime-300 transition-all"
          >
            Next →
          </button>
        </div>
      </form>
    </section></div>
    <Ibmcard/>
    <div className="absolute top-[1200px]"><Footer/></div>
    
    </>
  );
};

export default PersonalInfo;
