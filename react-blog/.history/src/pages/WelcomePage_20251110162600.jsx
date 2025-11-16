import React from "react";
import Ibmcard from "../components/Ibmcard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const WelcomePage = () => {
  return (
    <>
      {/* Header */}
      <div className="flex flex-col  items-center justify-center py-12 bg-white">
        <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-4">Self Sign-up</h1>
      </div>

      {/* Main section - Welcome text + IBM Card side by side */}
      
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-center gap-20 py-16 px-8">
        
        {/* Left: Welcome Text */}
        <div className="max-w-md">
          <h2 className="text-3xl font-[open_Sans] font-bold mt-[30px] text-gray-900">Welcome</h2>
          <p className="text-gray-700 mb-4 font-[open_Sans]">
            Open your account in a few easy steps
          </p>

          <p className="font-semiboldfont-[open_Sans] mb-2 text-gray-800">
            Here’s what you’ll need before you start:
          </p>
          <ul className="space-y-2 font-[open_Sans] text-gray-700">
            <li>✅ South African mobile number</li>
            <li>✅ 18 years or older</li>
            <li>✅ SA ID, Passport, or Asylum/Refugee document (permit if required)</li>
            <li>✅ Proof of address (not older than 3 months)</li>
            <li>✅ A selfie holding your ID</li>
          </ul>

          <Link to="/mobile-verification">
            <div className="mt-8">
              <button className="bg-lime-400 border border-lime-700 px-6 py-2 rounded-full font-[open_Sans] font-semibold hover:bg-lime-300 transition-all">
                Start my application →
              </button>
            </div>
          </Link>

          <p className="text-xs font-[open_Sans] mt-4 text-gray-500 leading-relaxed">
            By clicking “Start my application”, you accept all IMB terms and conditions<br />
            imb.datafree.co/legal/
          </p>
        </div>
      </section>
      
      {/* ibmcard */}
       
        <Ibmcard/>
       
       {/* footer */}
          <div className="absolute top-[1000px]" >
            <Footer/>
          </div>
    </>
  );
};

export default WelcomePage;
