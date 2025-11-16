import React, { useState } from "react";
import Ibmcard from "../components/Ibmcard";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { savePersonalInfo } from "../features/personal/personalSlice";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, message } = useSelector((state) => state.personal);
  const user_id = useSelector((state) => state.otp.user_id); 
  
  

  // Form state
  const [form, setForm] = useState({
    user_id,
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    idType: "",
    idNumber: "",
    country: "",
  });

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

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (
      !form.firstName ||
      !form.lastName ||
      !form.day ||
      !form.month ||
      !form.year ||
      !form.gender ||
      !form.idType ||
      !form.idNumber ||
      !form.country
    ) {
      return alert("Please fill in all fields");
    }

    const dob = `${form.year}-${String(months.indexOf(form.month) + 1).padStart(2, "0")}-${String(form.day).padStart(2, "0")}`;

    const formData = {
      user_id: form.user_id,
      firstName: form.firstName,
      lastName: form.lastName,
      dob,
      gender: form.gender,
      idType: form.idType,
      idNumber: form.idNumber,
      country: form.country,
    };

    const result = await dispatch(savePersonalInfo(formData));

    if (result.payload?.success) {
      alert("Personal Info saved successfully!");
      navigate("/address-form");
    } else {
      alert(result.payload?.message || "Failed to save info");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-6 bg-white">
        <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">
          Self Sign-up
        </h1>
        <ProgressBar currentStep={2} />
      </div>

      <div className="absolute top-[374px] left-[374px]">
        <section className="max-w-[1212px] h-[414px] mx-auto mt-[1px] font-[open_Sans] flex flex-col">
          <h2 className="w-[358px] h-[28px] font-bold text-[24px] leading-[28px] font-[Open_Sans]">
            Tell Us About You
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            {/* First Name */}
            <div>
              <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
                First name
              </label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="eg: Omkar"
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
                Last name
              </label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="eg: Khandekar"
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
                Date of birth
              </label>
              <div className="flex space-x-3">
                <select
                  name="day"
                  value={form.day}
                  onChange={handleChange}
                  className="w-1/3 h-[50px] border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2"
                >
                  <option value="">Day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>

                <select
                  name="month"
                  value={form.month}
                  onChange={handleChange}
                  className="w-1/3 border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2"
                >
                  <option value="">Month</option>
                  {months.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>

                <select
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  className="w-1/3 border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2"
                >
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
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full h-[50px] border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2"
              >
                <option value="">Select</option>
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
              <select
                name="idType"
                value={form.idType}
                onChange={handleChange}
                className="w-full h-[50px] border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2"
              >
                <option value="">Select</option>
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
                name="idNumber"
                value={form.idNumber}
                onChange={handleChange}
                type="text"
                placeholder="eg: 2736gf3636"
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2"
              />
            </div>

            {/* Country of Issue */}
            <div>
              <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
                Country of issue
              </label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full h-[50px] border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2"
              >
                {countries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Next Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-lime-400 border border-lime-600 px-6 py-2 rounded-full font-[Open_Sans] font-semibold hover:bg-lime-300 transition-all"
              >
                {loading ? "Saving..." : "Next →"}
              </button>
            </div>
          {setTimeout(() => {
  setMessage("");
}, 3000);
            {message && <p className="text-gray-600 mt-2">{message}</p>}
          </form>
        </section>
      </div>

      <Ibmcard />
      <div className="absolute top-[1200px]">
        <Footer />
      </div>
    </>
  );
};

export default PersonalInfo;
