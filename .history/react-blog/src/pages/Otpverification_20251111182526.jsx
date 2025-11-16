import React, { useState, useEffect } from "react";
import Ibmcard from "../components/Ibmcard";
import ProgressBar from "../components/ProgressBar";
import Footer from "../components/Footer";


const Otpverification = () => {


  return (
    <>
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Self Sign-up</h2>
        <ProgressBar currentStep={1} />
      </div>

      <div className="absolute top-[374px] left-[374px]">
        <strong className="block w-[358px] h-[28px] font-bold text-[24px] leading-[28px] font-['Open_Sans']">
          Enter Your OTP
        </strong>

        <p className="text-[#040404] mt-6 mb-2">OTP</p>
        <p>Phone: {phoneFromNav || phone}</p>

        <form onSubmit={handleVerify} className="flex flex-col space-y-4">
          <input
            value={otpLocal}
            onChange={(e) => setOtpLocal(e.target.value)}
            type="text"
            placeholder="0000"
            className="w-[358px] h-[50px] rounded-xl p-[10px] border border-[#040404] bg-[#f1f1f1]"
          />

          <button
            disabled={loading}
            type="submit"
            className="w-[157.125px] h-[51px] rounded-[1000px] border-2 px-[20px] py-[10px] bg-lime-500 font-[open_Sans] text-black font-semibold hover:bg-lime-400 transition"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <div className="mt-3">
          {timer > 0 ? (
            <p>
              Resend OTP in <strong>{timer}s</strong>
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-blue-600 hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        {message && <p className="mt-2 text-gray-700">{message}</p>}
      </div>

      <Ibmcard />
      <div className="absolute top-[905px]">
        <Footer />
      </div>
    </>
  );
};

export default Otpverification;
