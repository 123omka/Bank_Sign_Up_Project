import React from "react";

import { CircleCheck  } from "lucide-react";
import Footer from "../components/Footer";

const ThankYouMessage = () => {
  return (
    <>
    <section className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-3xl font-[open_Sans] font-bold text-blue-700 mb-8">Self Sign-up</h1>

      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full border-2  border-[#040404] bg-lime-500">
          <CircleCheck className="text-black w-6 h-6" />
        </div>
        <p className="text-gray-800 text-sm">
          Thank you for your application
        </p>
      </div>
    </section>
     <div className="absolute top-[905px]"><Footer/></div>
    
    </>
  );
};

export default ThankYouMessage;
