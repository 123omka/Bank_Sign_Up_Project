import React from 'react'
import Ibmcard from '../components/Ibmcard'
import ProgressBar from "../components/ProgressBar";
import { CheckCircle } from "lucide-react";
import Footer from '../components/Footer';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, resendOtp, decrementTimer, resetTimer, setOtp } from "../features/otp/otpSlice.js";
import { useLocation, useNavigate } from "react-router-dom";

const Otpverification = () => {
 const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const phoneFromNav = location.state?.phone;
  const { phone, otp: otpState, loading, message, timer } = useSelector(s => s.otp);
  const [otpLocal, setOtpLocal] = useState("");

  useEffect(() => {
    // if we navigated with phone, ensure store has it
    if (phoneFromNav) dispatch({ type: "otp/setPhone", payload: phoneFromNav });

    // timer interval
    const id = setInterval(() => dispatch(decrementTimer()), 1000);
    return () => clearInterval(id);
  }, [dispatch, phoneFromNav]);

  useEffect(() => { dispatch(setOtp(otpLocal)); }, [otpLocal, dispatch]);

  const handleVerify = async (e) => {
    e.preventDefault();
    const result = await dispatch(verifyOtp({ phone: phoneFromNav || phone, otp: otpLocal }));
    if (result.payload?.success) navigate("/personal-info");
    else alert(result.payload?.message || "Invalid OTP");
  };

  const handleResend = async () => {
    const result = await dispatch(resendOtp(phoneFromNav || phone));
    if (!result.payload?.success) alert(result.payload?.message || "Resend failed");
  };
  return (
    <>
    <div className="flex flex-col items-center justify-center py-12 bg-white">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Self Sign-up</h2>

      {/* 🔵 Shared Progress Bar (step index = 1) */}
      <ProgressBar currentStep={1} /></div>
    <div className="absolute top-[374px] left-[374px]">
      {/* Title */}
      <strong className="block w-[358px] h-[28px] font-bold text-[24px]  leading-[28px] font-['Open_Sans']">
        Enter Your OTP
      </strong>

      {/* Label */}
      <p className="text-[#040404] mt-6 mb-2">OTP</p>

      {/* Form */}
      
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="0000"
          className="w-[358px] h-[50px] rounded-xl p-[10px] border border-[#040404] bg-[#f1f1f1]"
        />

        <button onClick={gotoPersonalInfo}
          type="submit"
          className="w-[157.125px] h-[51px] opacity-100 rounded-[1000px] border-2 px-[20px] py-[10px] bg-lime-500 font-[open_Sans] text-black font-semibold hover:bg-lime-400 transition"
        >
          Send OTP
        </button>
      </form>
    </div>
    <Ibmcard/>
    <div className="absolute top-[905px]"><Footer/></div>
    </>
  )
}

export default Otpverification
