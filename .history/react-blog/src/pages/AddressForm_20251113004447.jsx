import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAddressInfo } from "../features/address/addressSlice";
import { useNavigate } from "react-router-dom";
import Ibmcard from "../components/Ibmcard";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    street: "",
    suburb: "",
    city: "",
    postalCode: "",
    province: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.address);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(saveAddressInfo(formData));

    if (result.payload?.message) {
      alert("Address saved successfully!");
      navigate("/contact-employment");
    } else {
      alert(result.payload?.message || "Failed to save address");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">Self Sign-up</h1>
        <ProgressBar currentStep={3} />
      </div>

      <div className="absolute top-[374px] left-[374px]">
        <section className="max-w-[1212px] h-[414px] flex flex-col">
          <h2 className="w-[358px] h-[28px] font-bold text-[24px] leading-[28px] font-[Open_Sans]">
            Where Do You Live?
          </h2>

          <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
            <input name="street" onChange={handleChange} placeholder="Street Name and Number" className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2" />
            <input name="suburb" onChange={handleChange} placeholder="Suburb" className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2" />
            <input name="city" onChange={handleChange} placeholder="City" className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2" />
            <input name="postalCode" onChange={handleChange} placeholder="Postal Code" className="w-full border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2" />
            <select name="province" onChange={handleChange} className="w-full h-[50px] border border-[#040404] bg-[#f1f1f1] rounded-md px-3 py-2">
              <option>Select Province</option>
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
            <button
              type="submit"
              disabled={loading}
              className="bg-lime-400 border border-lime-600 px-6 py-2 rounded-full font-semibold hover:bg-lime-300 transition-all"
            >
              {loading ? "Saving..." : "Next →"}
            </button>
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </section>
      </div>

      <Ibmcard />
      <div className="absolute top-[1040px]"><Footer /></div>
    </>
  );
};

export default AddressForm;
