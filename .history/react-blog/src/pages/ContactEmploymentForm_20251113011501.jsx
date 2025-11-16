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
  const { loading, success, error } = useSelector((state) => state.contactEmployment);

  const [formData, setFormData] = useState({
    email: "",
    employer: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(saveContactEmployment(formData));
    if (saveContactEmployment.fulfilled.match(result)) {
      navigate("/upload-documents");
    }
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

          <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
            {/* Email Address */}
            <div>
              <label className="block font-[open_sans] font-medium mb-1 text-gray-700">
                Email Address (optional)
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 font-[open_Sans]"
              />
            </div>

            {/* Employer */}
            <div>
              <label className="block font-[open_Sans] font-medium mb-1 text-gray-700">
                Employer (required)
              </label>
              <input
                type="text"
                name="employer"
                placeholder="Employer"
                required
                value={formData.employer}
                onChange={handleChange}
                className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2 font-[open_Sans] focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Next Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-lime-400 border border-lime-600 px-6 py-2 rounded-full font-[open_Sans] font-semibold hover:bg-lime-300 transition-all"
              >
                {loading ? "Saving..." : "Next →"}
              </button>
            </div>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            {success && <p className="text-green-600 text-sm mt-2">Details saved successfully!</p>}
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
