import React, { useState } from "react";
import Ibmcard from "../components/Ibmcard";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { saveContactEmployment } from "../features/contactEmployment/contactEmploymentSlice";

const ContactEmploymentForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.contactEmployment);
  const user_id = useSelector((state) => state.otp.user_id); 
  const [formData, setFormData] = useState({
    user
    email: "",
    employer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.employer.trim()) {
      alert("Employer is required");
      return;
    }

    dispatch(saveContactEmployment(formData))
      .unwrap()
      .then(() => navigate("/upload-documents"))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">Self Sign-up</h1>
        <ProgressBar currentStep={4} />
      </div>

      <div className="absolute top-[374px] left-[374px]">
        <section className="max-w-[1212px] h-[414px] flex flex-col">
          <h2 className="w-[358px] h-[28px] font-[open_sans] font-bold text-[24px] leading-[28px]">
            Contact & Employment Details
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
            {/* Email Address (optional) */}
            <div>
              <label className="block font-[open_sans] font-medium mb-1 text-gray-700">
                Email Address (optional)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400 font-[open_Sans]"
              />
            </div>

            {/* Employer (required) */}
            <div>
              <label className="block font-[Open_Sans] font-medium mb-1 text-gray-700">
                Employer (required)
              </label>
              <input
                type="text"
                name="employer"
                value={formData.employer}
                onChange={handleChange}
                placeholder="Employer"
                required
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[Open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Messages */}
            {loading && <p className="text-blue-600">Saving...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {message && <p className="text-green-600">{message}</p>}

            {/* Next Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-lime-400 border border-lime-600 px-6 py-2 rounded-full font-[open_Sans] font-semibold hover:bg-lime-300 transition-all"
              >
                Next →
              </button>
            </div>
          </form>
        </section>
      </div>

      <Ibmcard />
      <div className="absolute top-[905px]">
        <Footer />
      </div>
    </>
  );
};

export default ContactEmploymentForm;
